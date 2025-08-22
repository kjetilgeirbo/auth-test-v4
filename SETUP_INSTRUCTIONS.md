# Setup Instructions for auth-test-v4

## 1. Create Amplify App in AWS Console

1. Go to AWS Amplify Console: https://eu-north-1.console.aws.amazon.com/amplify/home?region=eu-north-1
2. Click "Create new app"
3. Choose "Build an app" (not "Host web app")
4. Give it the name: `auth-test-v4`
5. Click "Deploy without Git provider" (we'll connect GitHub later)
6. Once created, note the App ID from the URL (format: d1234567890)

## 2. Connect to GitHub

1. In the Amplify Console, go to your app
2. Click on "Hosting" tab
3. Click "Connect branch"
4. Choose GitHub and authorize if needed
5. Select repository: `kjetilgeirbo/auth-test-v4`
6. Select branch: `main`
7. Click "Next" and then "Save and deploy"

## 3. Run Pipeline Deploy

Once you have the App ID, run:
```bash
# From the auth-test-v4 directory
mcp__amplify-pipeline__pipeline_deploy app_id="YOUR_APP_ID"
```

This will:
- Set up the custom CI/CD pipeline
- Open the GitHub secrets page automatically
- Create all necessary workflow files

## 4. Add GitHub Secrets

When the secrets page opens, add:
- `AWS_ACCESS_KEY_ID` - from the github-actions-amplify IAM user
- `AWS_SECRET_ACCESS_KEY` - from the github-actions-amplify IAM user

## 5. Push to trigger deployment

```bash
git push
```

The GitHub Actions workflow will run and deploy your app!