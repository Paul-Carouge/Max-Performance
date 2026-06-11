#!/usr/bin/env python3
"""Trigger Vercel deployment via API."""
import urllib.request, json, os

# Read token
token = ""
for p in ["/home/atlas/.hermes/.env", "/home/atlas/max-performance/.env"]:
    try:
        with open(p) as f:
            for line in f:
                if "VERCEL_TOKEN" in line:
                    token = line.split("=", 1)[1].strip()
                    break
    except: pass

if not token:
    print("NO_TOKEN")
    exit(1)

# Trigger deploy from GitHub
data = json.dumps({
    "name": "max-performance",
    "project": "max-performance",
    "gitSource": {
        "type": "github",
        "repoId": "Paul-Carouge/Max-Performance",
        "ref": "main"
    }
}).encode()

req = urllib.request.Request(
    "https://api.vercel.com/v13/deployments",
    data=data,
    headers={
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    },
    method="POST"
)

try:
    with urllib.request.urlopen(req, timeout=120) as resp:
        result = json.loads(resp.read())
        print(f"DEPLOYED:{result.get('url', '?')}")
        print(f"STATE:{result.get('state', '?')}")
except Exception as e:
    print(f"ERROR:{e}")
