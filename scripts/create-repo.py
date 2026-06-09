#!/usr/bin/env python3
"""Create GitHub repo and push."""
import subprocess, json, os, sys

# Read token
token = ""
for p in ["/home/atlas/.hermes/.env", "/home/atlas/.env"]:
    try:
        with open(p) as f:
            for line in f:
                if "GITHUB_TOKEN" in line:
                    token = line.split("=", 1)[1].strip()
                    break
    except: pass

if not token:
    print("No token found")
    sys.exit(1)

# Create repo via API
result = subprocess.run([
    "curl", "-s", "-X", "POST", "https://api.github.com/user/repos",
    "-H", f"Authorization: Bearer {token}",
    "-H", "Content-Type: application/json",
    "-d", json.dumps({
        "name": "max-performance",
        "description": "Max Performance — Coach sportif à Arras. Next.js 16, Tailwind v4, GSAP.",
        "private": False,
        "has_issues": True,
        "has_wiki": False
    })
], capture_output=True, text=True, timeout=15)

resp = json.loads(result.stdout)
if "html_url" in resp:
    print(f"Repo created: {resp['html_url']}")
elif "errors" in resp:
    print(f"Error: {resp['errors']}")
    sys.exit(1)
else:
    print(f"Response: {resp}")
