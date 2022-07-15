# 🌥 SkyComment
SkyComment is a fully decentralized comments widget implemented and designed for the [Skynet](https://skynetlabs.com/) Community, lets visitors leave comments on your website with their MySky identity.

### Why SkyComment?
Basically, for commenting on any website, you need to have a Facebook or Google accounts, or sometimes you need to register a new account with a new username/password which may have a few problems:

1. All the un/pw is controlled by Google, Facebook, or some others and your security hugely depends on them.
2. Most people still have weak passwords, so hackers can still brute-force and gain the access to the accounts.

Would it be better if everyone could have a private key (PK) and use that PK to sign in to a lot of services which is way more secure than the password? The good news is, that has now happened with the power of Skynet and you can now start using your MySky account to sign in and comment on any website that embedded an SkyComment's widget.

### Features
- Open source 🌍
- Sign-in with your non-custodial MySky accounts (No Facebook, Google, or Twitter accounts needed 🙅‍♀️)
- LaTex supported for commenting 🧮
- Everything is stored and hosted on Skynet decentralized infrastructure 💽

## Contribution
### Setting up project
1. Clone this repository
```sh
git clone git@github.com:chunza2542/skycomment.app.git
```
2. Install dependencies
```sh
yarn # or npm install
```
3. Setup frontend environment variables
```
cd packages/react-app && cp .env.example .env && vim .env
```
4. Start react-app (frontend)
```
yarn react-app:start
```
5. Experiment and develop your AWESOME 😎 features

### Tech stack
- Frontend: React, Antd, Skynet Browser JS.
- Backend: Skynet Hosting, Skynet Handshake, MySky & DAC.

---

Crafted with 🧡 by [@chunza2542](https://twitter.com/chunza2542)
