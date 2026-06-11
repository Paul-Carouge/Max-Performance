#!/usr/bin/env python3
"""Check Vercel deployment status."""
import urllib.request, json, os

# Read token from env files
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

if not token:
    # Fallback - hardcoded from env
    token = os.environ.get("VERCEL_TOKEN", "")

team_id = "team_Ujgm3jSTpreRdyea7lWxxBuV"
deploy_id = "dpl_FKWv4nHT2P6BgidaBX7t2bUt5eCf"

req = urllib.request.Request(
    f"https://api.vercel.com/v13/deployments/{deploy_id}?teamId={team_id}",
    headers={"Authorization": f"Bearer {token}"}
)

try:
    with urllib.request.urlopen(req, timeout=30) as resp:
        d = json.loads(resp.read())
        print(f"State: {d.get('state', '?')}")
        print(f"ReadyState: {d.get('readyState', '?')}")
        if d.get("error"):
            print(f"Error: {d['error']}")
        builder = d.get("builder", {})
        if builder.get("error"):
            print(f"Build Error: {builder['error']}")
        # Error message
        for key in ["error", "errorMessage", "errorCode"]:
            if d.get(key):
                print(f"{key}: {d[key]}")
except urllib.error.HTTPError as e:
    body = e.read().decode()
    print(f"HTTP {e.code}: {body[:500]}")
except Exception as e:
    print(f"Exception: {e}")
