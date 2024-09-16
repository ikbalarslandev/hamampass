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

   - AUTH_SECRET
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
