<img src="https://github.com/ikbalarslandev/hamampass/blob/main/apps/web/public/readme/banner.png" alt="Hamampass Logo">

<p align="center" style="margin-top: 20px">
  <p align="center">
  The Open Source Crowdsourcing platform for hamams
  <br>
    <a href="https://www.hamampass.com"><strong>Learn more »</strong></a>
    <br />
    <br />
    <a href="https://discord.com/invite/JaTangRns8">Discord</a>
    ·
    <a href="https://www.hamampass.com">Website</a>
    ·
    <a href="https://github.com/ikbalarslandev/hamampass/issues">Issues</a>
    ·
    <a href="https://github.com/users/ikbalarslandev/projects/4">Upcoming Releases</a>
    ·
    <a href="https://github.com/users/ikbalarslandev/projects/5">Roadmap</a>
    ·
    <a href="https://www.figma.com/design/W590gcvMFCnCUse0GyKBES/Hamampass">Figma Design</a>
    ·
    <a href="https://tr.linkedin.com/company/hamampass">Linkedin</a>
  </p>
</p>

<p align="center">
   <a href="https://discord.com/invite/JaTangRns8"><img src="https://img.shields.io/badge/Discord-hamampass/discord-%235865F2" alt="Join Documenso on Discord"></a>
   <a href="https://github.com/ikbalarslandev/hamampass/stargazers"><img src="https://img.shields.io/github/stars/ikbalarslandev/hamampass" alt="Github Stars"></a>
   <a href="https://github.com/ikbalarslandev/hamampass/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg" alt="License"></a>
   <a href="https://github.com/ikbalarslandev/hamampass/pulse"><img src="https://img.shields.io/github/commit-activity/m/ikbalarslandev/hamampass" alt="Commits-per-month"></a>
   <a href="CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg" alt="Contributor Covenant"></a>
</p>

## About Hamampass

Finding best hamams should be fast and easy. Hamampass is a crowdsourcing platform which means hamam owners have full access to all the updates and hamam customers has review power which gives them ability to react .

Join us in creating the next generation of open trust infrastructure.

## Community and Next Steps 🎯

We're currently working on a core functionality of the app so Hamampass can be more intuitive to use and robust to develop upon.

- Check out the first source code release in this repository and test it.
- ⭐ the repository to help us raise awareness.
- Join the [Discord server](https://discord.com/invite/JaTangRns8) for any questions and getting to know to other community members.
- Fix or create [issues](https://github.com/ikbalarslandev/hamampass/issues), that are needed for the first production release.

## Contributing

- To contribute, please see our [contribution guide](https://github.com/ikbalarslandev/hamampass/blob/main/CONTRIBUTING.md).

## Flow Chart
<img src="https://github.com/ikbalarslandev/hamampass/blob/main/apps/web/public/readme/flow.jpg" alt="Flow chart">


## Tech Stack

<p align="left">
  <a href="https://www.typescriptlang.org"><img src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square" alt="TypeScript"></a>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="NextJS"></a>
  <a href="https://prisma.io"><img width="122" height="20" src="http://made-with.prisma.io/indigo.svg" alt="Made with Prisma" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss" alt="Tailwind CSS"></a>
</p>

- [Typescript](https://www.typescriptlang.org/) - Language
- [Next.js](https://nextjs.org/) - Framework
- [Prisma](https://www.prisma.io/) - ORM
- [Tailwind](https://tailwindcss.com/) - CSS
- [shadcn/ui](https://ui.shadcn.com/) - Component Library
- [Auth.js](https://authjs.dev/) - Authentication
- [Maps Javascript Api](https://developers.google.com/maps/documentation/javascript/overview) - Maps api
- [Google OAuth2](https://developers.google.com/identity/protocols/oauth2) - OAuth
- [Neon](https://neon.tech/) - database
- [web-push](https://www.npmjs.com/package/web-push) - Push notification
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

4. Set the following environment variables

   - AUTH_SECRET
   - NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
   - AUTH_GOOGLE_ID
   - AUTH_GOOGLE_SECRET
   - DATABASE_URL
   - BASE_URL
   - VAPID_PUBLIC_KEY
   - VAPID_PRIVATE_KEY

5. Create the database schema by running `npx prisma migrate dev`

6. Run `npm run dev` in the root directory to start

---

## Repo Activity

![Repository Activity](https://repobeats.axiom.co/api/embed/ae2915b25357dd085de08a32e539e8321b17ac65.svg)

This work is licensed under a
[Creative Commons Attribution-NonCommercial 4.0 International License][cc-by-nc].

[cc-by-nc]: https://creativecommons.org/licenses/by-nc/4.0/
