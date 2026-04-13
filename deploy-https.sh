#!/usr/bin/env bash

set -euo pipefail

# GitHub Pages helper
# - Ensures `public/CNAME` and `public/.nojekyll` exist so they are included in the built site.
# - HTTPS enforcement itself is controlled in GitHub Pages settings ("Enforce HTTPS").

DOMAIN="${1:-}"
if [[ -z "$DOMAIN" ]]; then
	if [[ -f "public/CNAME" ]]; then
		DOMAIN="$(cat public/CNAME | tr -d '[:space:]')"
	fi
fi

if [[ -z "$DOMAIN" ]]; then
	echo "Usage: ./deploy-https.sh <custom-domain>" >&2
	echo "Example: ./deploy-https.sh powerstemsolutions.com" >&2
	exit 1
fi

mkdir -p public
echo "$DOMAIN" > public/CNAME
touch public/.nojekyll

echo "Configured GitHub Pages domain artifacts"
echo "Domain: $DOMAIN"
echo "Next: enable 'Enforce HTTPS' in GitHub Pages settings when available"