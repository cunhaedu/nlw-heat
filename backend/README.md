## Authentication flow

1. Get github code
2. Recover github access token
3. Recover user info in github
4. Check if user already exists in DB
  1. If so -> Generate token
  2. else -> Create user in DB and generate token
5. Return token with user's info
