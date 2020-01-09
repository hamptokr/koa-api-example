# koa-api-example
This repository is an example Koa project

# Running the example server
1. Install Dependencies
  `npm install`
2. Create database
  `npx sequelize-cli db:create`
3. Run migrations
  `npx sequlize-cli db:migrate`
4. Seed database
  `npx sequlize-cli db:seed:all`
5. Send login request
  ```json
  {
      "username": "admin",
      "password": "1234"
  }
  ```