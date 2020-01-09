# koa-api-example
This repository is an example Koa project

# Running the example server
1. Install Dependencies
  ```bash
  npm install
  ```
2. Create database
  ```bash
  npx sequelize-cli db:create
  ```
3. Run migrations
  ```bash
  npx sequlize-cli db:migrate
  ```
4. Seed database
  ```bash
  npx sequlize-cli db:seed:all
  ```
5. Send login request
  ```json
  {
      "username": "admin",
      "password": "1234"
  }
  ```