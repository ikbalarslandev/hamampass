<img src="https://github.com/ikbalarslandev/hamampass/blob/main/public/readme/banner.jpg" alt="Hamampass Logo">

<p align="center" style="margin-top: 20px">
  <p align="center">
  The Open Source Crowdsourcing platform for hamams
  <br>
    <a href="https://www.hamampass.com"><strong>Learn more »</strong></a>
    <br />
    <br />
    <a href="https://www.hamampass.com">Website</a>
    ·
    <a href="https://github.com/ikbalarslandev/hamampass/issues">Issues</a>
    ·
    <a href="https://github.com/users/ikbalarslandev/projects/4">Upcoming Releases</a>
    ·
    <a href="https://github.com/users/ikbalarslandev/projects/5">Roadmap</a>
  </p>
</p>

<p align="center">
   <a href="https://github.com/ikbalarslandev/hamampass/stargazers"><img src="https://img.shields.io/github/stars/ikbalarslandev/hamampass" alt="Github Stars"></a>
   <a href="https://github.com/documenso/documenso/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-AGPLv3-purple" alt="License"></a>
   <a href="https://github.com/documenso/documenso/pulse"><img src="https://img.shields.io/github/commit-activity/m/ikbalarslandev/hamampass" alt="Commits-per-month"></a>
   <a href="CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg" alt="Contributor Covenant"></a>
</p>



## About Hamampass

Signing documents digitally should be fast and easy and should be the best practice for every document signed worldwide. This is technically quite easy today, but it also introduces a new party to every signature: The signing tool providers. While this is not a problem in itself, it should make us think about how we want these providers of trust to work. Documenso aims to be the world's most trusted document-signing tool. This trust is built by empowering you to self-host Documenso and review how it works under the hood.

Join us in creating the next generation of open trust infrastructure.


## Community and Next Steps 🎯

We're currently working on a redesign of the application, including a revamp of the codebase, so Documenso can be more intuitive to use and robust to develop upon.

- Check out the first source code release in this repository and test it.
- ⭐ the repository to help us raise awareness.
- Fix or create [issues](https://github.com/ikbalarslandev/hamampass/issues), that are needed for the first production release.

## Contributing

- To contribute, please see our [contribution guide](https://github.com/documenso/documenso/blob/main/CONTRIBUTING.md).


## Tech Stack
<p align="left">
  <a href="https://www.typescriptlang.org"><img src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square" alt="TypeScript"></a>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="NextJS"></a>
  <a href="https://prisma.io"><img width="122" height="20" src="http://made-with.prisma.io/indigo.svg" alt="Made with Prisma" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss" alt="Tailwind CSS"></a>
</p>


- [Typescript](https://www.typescriptlang.org/) - Language
- [Next.js](https://nextjs.org/) - Framework
- [Prisma](https://www.prisma.io/)  - ORM
- [Tailwind](https://tailwindcss.com/) - CSS
- [shadcn/ui](https://ui.shadcn.com/) - Component Library
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Vercel](https://vercel.com) - Hosting



## Developer Setup

Follow these steps to setup Hamampass on your local machine:

1. [Fork this repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) to your GitHub account.

After forking the repository, clone it to your local device by using the following command:

```sh
git clone https://github.com/<your-username>/hamampass
```

2. Run `pnpm i` in the root directory

3. Create your `.env` from the `.env.example`. You can use `cp .env.example .env` to get started with our handpicked defaults.

4. Set the following environment variables:

   - NEXTAUTH_URL
   - NEXTAUTH_SECRET
   - NEXT_PUBLIC_WEBAPP_URL
   - NEXT_PUBLIC_MARKETING_URL
   - NEXT_PRIVATE_DATABASE_URL
   - NEXT_PRIVATE_DIRECT_DATABASE_URL
   - NEXT_PRIVATE_SMTP_FROM_NAME
   - NEXT_PRIVATE_SMTP_FROM_ADDRESS

5. Create the database schema by running `npm run prisma:migrate-dev`

6. Run `npm run dev` in the root directory to start

7. Register a new user at http://localhost:3000/signup

---

- Optional: Seed the database using `npm run prisma:seed -w @documenso/prisma` to create a test user and document.
- Optional: Create your own signing certificate.
  - To generate your own using these steps and a Linux Terminal or Windows Subsystem for Linux (WSL), see **[Create your own signing certificate](./SIGNING.md)**.

### Run in Gitpod

- Click below to launch a ready-to-use Gitpod workspace in your browser.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/documenso/documenso)

### Run in DevContainer

We support DevContainers for VSCode. [Click here to get started.](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/documenso/documenso)

### Video walkthrough

If you're a visual learner and prefer to watch a video walkthrough of setting up Documenso locally, check out this video:

[![Watch the video](https://img.youtube.com/vi/Y0ppIQrEnZs/hqdefault.jpg)](https://youtu.be/Y0ppIQrEnZs)

## Docker

We provide a Docker container for Documenso, which is published on both DockerHub and GitHub Container Registry.

- DockerHub: [https://hub.docker.com/r/documenso/documenso](https://hub.docker.com/r/documenso/documenso)
- GitHub Container Registry: [https://ghcr.io/documenso/documenso](https://ghcr.io/documenso/documenso)

You can pull the Docker image from either of these registries and run it with your preferred container hosting provider.

Please note that you will need to provide environment variables for connecting to the database, mailserver, and so forth.

For detailed instructions on how to configure and run the Docker container, please refer to the [Docker README](./docker/README.md) in the `docker` directory.

## Self Hosting

We support a variety of deployment methods, and are actively working on adding more. Stay tuned for updates!

> Please note that the below deployment methods are for v0.9, we will update these to v1.0 once it has been released.

### Fetch, configure, and build

First, clone the code from Github:

```
git clone https://github.com/documenso/documenso.git
```

Then, inside the `documenso` folder, copy the example env file:

```
cp .env.example .env
```

The following environment variables must be set:

- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `NEXT_PUBLIC_WEBAPP_URL`
- `NEXT_PUBLIC_MARKETING_URL`
- `NEXT_PRIVATE_DATABASE_URL`
- `NEXT_PRIVATE_DIRECT_DATABASE_URL`
- `NEXT_PRIVATE_SMTP_FROM_NAME`
- `NEXT_PRIVATE_SMTP_FROM_ADDRESS`

> If you are using a reverse proxy in front of Documenso, don't forget to provide the public URL for both `NEXTAUTH_URL` and `NEXT_PUBLIC_WEBAPP_URL` variables!

Now you can install the dependencies and build it:

```
npm i
npm run build:web
npm run prisma:migrate-deploy
```

Finally, you can start it with:

```
cd apps/web
npm run start
```

This will start the server on `localhost:3000`. For now, any reverse proxy can then do the frontend and SSL termination.

> If you want to run with another port than 3000, you can start the application with `next -p <ANY PORT>` from the `apps/web` folder.

### Run as a service

You can use a systemd service file to run the app. Here is a simple example of the service running on port 3500 (using 3000 by default):

```bash
[Unit]
Description=documenso
After=network.target

[Service]
Environment=PATH=/path/to/your/node/binaries
Type=simple
User=www-data
WorkingDirectory=/var/www/documenso/apps/web
ExecStart=/usr/bin/next start -p 3500
TimeoutSec=15
Restart=always

[Install]
WantedBy=multi-user.target
```

### Railway

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/bG6D4p)

### Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/documenso/documenso)

### Koyeb

[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?type=git&repository=github.com/documenso/documenso&branch=main&name=documenso-app&builder=dockerfile&dockerfile=/docker/Dockerfile)

## Elestio

[![Deploy on Elestio](https://elest.io/images/logos/deploy-to-elestio-btn.png)](https://elest.io/open-source/documenso)

## Troubleshooting

### I'm not receiving any emails when using the developer quickstart.

When using the developer quickstart, an [Inbucket](https://inbucket.org/) server will be spun up in a docker container that will store all outgoing emails locally for you to view.

The Web UI can be found at http://localhost:9000, while the SMTP port will be on localhost:2500.

### Support IPv6

If you are deploying to a cluster that uses only IPv6, You can use a custom command to pass a parameter to the Next.js start command

For local docker run

```bash
docker run -it documenso:latest npm run start -- -H ::
```

For k8s or docker-compose

```yaml
containers:
  - name: documenso
    image: documenso:latest
    imagePullPolicy: IfNotPresent
    command:
      - npm
    args:
      - run
      - start
      - --
      - -H
      - '::'
```

### I can't see environment variables in my package scripts.

Wrap your package script with the `with:env` script like such:

```
npm run with:env -- npm run myscript
```

The same can be done when using `npx` for one of the bin scripts:

```
npm run with:env -- npx myscript
```

This will load environment variables from your `.env` and `.env.local` files.

## Repo Activity

![Repository Activity](https://repobeats.axiom.co/api/embed/622a2e9aa709696f7226304b5b7178a5741b3868.svg)
