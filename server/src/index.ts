import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/schema";
import connectDB from "./config/db";
import { info } from "./chalk/chalk";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

connectDB();

app.listen(port, () => {
  console.log(
    info(`[api]: Server is running at http://localhost:${process.env.PORT}`)
  );
});
