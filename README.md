<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Wizybot Chatbot API

## Description
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

Wizybot is an AI-powered support and sales agent that uses Large Language Models (LLM) to generate responses to user queries. This API is built with **NestJS** and communicates with the OpenAI model to perform functions like product search and currency conversion.

## Features
- **Product Search**: The chatbot can search for products in a `ProductList.csv` file and return a list of relevant products.
- **Currency Conversion**: The chatbot can convert prices from one currency to another using the Open Exchange Rates API.

## Technologies Used
- **NestJS**: Backend framework for Node.js.
- **OpenAI API**: Used for generating chatbot responses with a language model.
- **Open Exchange Rates API**: Used to get currency exchange rates.
- **TypeScript**: Programming language for structure and typing.

## Prerequisites

1. **Node.js**: Required Node.js version 18 or above.
2. **OpenAI API Key**: You need an OpenAI API key to interact with OpenAI's language model.
3. **Open Exchange Rates API Key**: You need an API key to get the exchange rates.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/wizybot-chatbot-api.git
cd wizybot-chatbot-api


## Project setup

```bash
$ npm install

```
##Install dependencies

```bash
npm install @nestjs/axios axios openai csv-parser
npm install dotenv
npm install openai
```

## Set up Environment Variables
.env file in the root of the project,  add the following environment variables:

## Change de OpenAI API Key amd Exchange API Key
```.env
OPENAI_API_KEY=openai-api-key
EXCHANGE_API_KEY=exchange-api-key
```
## Change de model for OpenAI
```openai.service.ts
model: 'gpt-3.5-turbo',  // Change from 'gpt-4' to 'gpt-3.5-turbo'

```
## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Step-by-step guide for Postman:

1. Choose the request type as POST and enter the API URL http://localhost:3002/chatbot/query.

2. Go to the "Headers" tab and add Content-Type with the value application/json.

3. Go to the "Body" tab, select "raw", and choose JSON from the dropdown.

4. Paste the JSON payload in the body section.
   - {
  "query": "I am looking for a phone".
}
5. Click on "Send" to make the request.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Juan Diego Ospina Moreno](https://www.linkedin.com/in/jdiegomoreno8/)
- Email - jdiegomoreno8@gmail.com

This README should provide clear instructions for users who want to run or contribute to the project. Let me know if you'd like to adjust anything!

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
