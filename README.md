## General information:

Project made using React, NextJS, TypeScript and Chakra UI in order to create a login form.

It's a responsive interface to create a user, login and recover your password.

The recovery password is not actually a feature, it's just simulates the flow in order to call some service to do that.

The account created is saved on a file in the server, the password is encrypted before it is saved and the same encrypt algorithm is used to verify the user on login.

User example for testing purposes (it's case sensitive):
- Login: Test
- Password: 123

You need to set your .env file to run the application, set with the URL your server starts, example:
- NEXT_PUBLIC_API_NEXT_URL=http://localhost:3000

## 🛠 Technologies

- [React](https://react.dev/)
- [Next.JS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ChakraUI](https://chakra-ui.com/)

## 🚀 Getting Started

First, clone the repository

```bash
git clone https://github.com/gwollmann04/LoginForm.git
```

Then, enter the project folder and install the dependencies with yarn

```bash
cd LoginForm && yarn
```

Create an `.env` file in the root of the project based on the `.env-example` file

After installation, run the dev environment

```bash
yarn dev
# ou
npm run dev
```

Go to [http://localhost:3000](http://localhost:3000) to see your application in the browser.
