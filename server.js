// Load environment variables from .env
require("dotenv").config();
const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const baseRoutes = require("./routes");

const PORT = process.env.PORT || 8080;

const app = new Koa();

app.use(bodyParser());
app.use(baseRoutes.routes());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
