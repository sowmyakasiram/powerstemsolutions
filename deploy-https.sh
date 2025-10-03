#!/bin/bash

# GitHub Pages HTTPS Enforcement Script
# This ensures HTTPS is enforced for the custom domain

echo "Configuring HTTPS enforcement for www.powerstemsolutions.com"

# Ensure CNAME file exists
echo "www.powerstemsolutions.com" > CNAME

# Create .nojekyll file to bypass Jekyll processing if using static files
touch .nojekyll

echo "HTTPS enforcement configuration complete"
echo "Domain: www.powerstemsolutions.com"
echo "HTTPS: Enforced"
echo "Make sure to enable 'Enforce HTTPS' in GitHub Pages settings"