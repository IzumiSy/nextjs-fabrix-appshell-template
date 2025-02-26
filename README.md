# nextjs-fabrix-appshell

## Initialize

```bash
npx create-next-app@latest my-fabrix-app --use-pnpm -e https://github.com/IzumiSy/nextjs-fabrix-appshell-template
```

## Setup 

This app template has a minimum authentication that uses Machine User authentication on Tailor Platform.

Do NOT forget to add `.env` file as follows.

```
NEXT_PUBLIC_GRAPHQL_URL="<your GraphQL backend URL>"
NEXT_PUBLIC_CLIENT_ID="<your Tailor machine user client ID>"
NEXT_PUBLIC_CLIENT_SECRET="<your Tailor machine user client secret>"
```

## Start

```bash
pnpm dev
```

Open [http://localhost:3000/dashboard](http://localhost:3000/dashboard) with your browser to see how fabrix works for you.

## Learn More

WIP
