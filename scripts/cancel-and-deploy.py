#!/usr/bin/env python3
"""Cancel all BLOCKED/UNKNOWN Vercel deployments and deploy fresh."""
import urllib.request, json

token = ""
for path in ["/home/atlas/.hermes/.env", "/home/atlas/.env"]:
    try:
        with open(path) as f:
            for line in f:
                if "VERCEL_TOKEN" in line:
                    token = line.split("=", 1)[1].strip()
                    break
    except Exception:
        pass

team_id = "team_Ujgm3jSTpreRdyea7lWxxBuV"
project_id = "prj_KWiAfxxBbi4fWn2csVoaVmYWIWmO"

# Get all deployments
req = urllib.request.Request(
    f"https://api.vercel.com/v13/deployments?projectId={project_id}&teamId={team_id}&limit=30",
    headers={"Authorization": f"Bearer {token}"}
)

try:
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = json.loads(resp.read())
        deployments = data.get("deployments", [])
except Exception as e:
    print(f"Error fetching deployments: {e}")
    exit(1)

# Cancel all non-ready deployments
cancelled = 0
for dep in deployments:
    state = dep.get("state", "")
    uid = dep.get("uid", dep.get("id", ""))
    
    if state in ["BUILDING", "QUEUED", "INITIALIZING", "ERROR", "BLOCKED"]:
        # Cancel it
        try:
            cancel_req = urllib.request.Request(
                f"https://api.vercel.com/v13/deployments/{uid}/cancel?teamId={team_id}",
                data=b"{}",
                headers={
                    "Authorization": f"Bearer {token}",
                    "Content-Type": "application/json"
                },
                method="PATCH"
            )
            with urllib.request.urlopen(cancel_req, timeout=15) as cancel_resp:
                result = json.loads(cancel_resp.read())
                print(f"Cancelled {uid} ({result.get('state', '?')})")
                cancelled += 1
        except Exception as e2:
            print(f"Failed to cancel {uid}: {e2}")

print(f"\nCancelled {cancelled} deployments")

# Now trigger fresh deploy
print("\nTriggering fresh deploy from git...")
data = json.dumps({
    "name": "max-performance",
    "project": project_id,
    "gitSource": {
        "type": "github",
        "ref": "main",
        "repoId": "Paul-Carouge/Max-Performance"
    },
    "target": "production"
}).encode()

try:
    deploy_req = urllib.request.Request(
        f"https://api.vercel.com/v13/deployments?teamId={team_id}&forceNew=1",
        data=data,
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        },
        method="POST"
    )
    with urllib.request.urlopen(deploy_req, timeout=60) as deploy_resp:
        result = json.loads(deploy_resp.read())
        print(f"Deploy triggered!")
        print(f"URL: {result.get('url', '?')}")
        print(f"State: {result.get('state', '?')}")
        print(f"ID: {result.get('id', result.get('uid', '?'))}")
except urllib.error.HTTPError as e:
    body = e.read().decode()
    print(f"HTTP {e.code}: {body[:500]}")
except Exception as e:
    print(f"Error: {e}")
