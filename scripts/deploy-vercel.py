#!/usr/bin/env python3
"""Deploy to Vercel via API."""
import urllib.request, json, os

TOKEN = os.environ.get("VERCEL_TOKEN", "")
PROJECT_ID = "prj_KWiAfxxBbi4fWn2csVoaVmYWIWmO"
TEAM_ID = "team_Ujgm3jSTpreRdyea7lWxxBuV"

if not TOKEN:
    for p in ["/home/atlas/.hermes/.env", "/home/atlas/max-performance/.env"]:
        try:
            with open(p) as f:
                for line in f:
                    if "VERCEL_TOKEN" in line:
                        TOKEN = line.split("=", 1)[1].strip()
                        break
        except Exception:
            pass

if not TOKEN:
    print("ERROR: No Vercel token found")
    exit(1)

print(f"Token found: {TOKEN[:12]}...")

# Method: Deploy via Vercel API v13 (most direct)
print("Triggering deploy via API v13...")
data = json.dumps({
    "name": "max-performance",
    "project": "max-performance",
    "gitSource": {
        "type": "github",
        "ref": "main",
        "repo": "Paul-Carouge/Max-Performance"
    },
    "target": "production"
}).encode()

req = urllib.request.Request(
    f"https://api.vercel.com/v13/deployments?teamId={TEAM_ID}",
    data=data,
    headers={
        "Authorization": f"Bearer {TOKEN}",
        "Content-Type": "application/json"
    },
    method="POST"
)

try:
    with urllib.request.urlopen(req, timeout=60) as resp:
        result = json.loads(resp.read())
        url = result.get("url", "?")
        state = result.get("state", "?")
        print(f"SUCCESS")
        print(f"URL: {url}")
        print(f"State: {state}")
except urllib.error.HTTPError as e:
    body = e.read().decode()
    print(f"HTTP {e.code}: {body[:500]}")
except Exception as e:
    print(f"Error: {e}")
