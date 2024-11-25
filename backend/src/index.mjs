import express, { response } from "express";
import routes from "./routes/index.mjs";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import "./strategies/local-strategy.mjs";
import { configDotenv } from "dotenv";

configDotenv();
const app = express();
const corsOrigin = JSON.parse(process.env.CORS);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  cors({
    credentials: true,
    origin: corsOrigin,
  })
);
app.use(express.json()); // for parsing application/json
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60, // 1 hour
    },
    store: MongoStore.create({
      client: mongoose.connection.getClient(),
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);
app.get("/", (request, response) => {
  response.send("Hello World!");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
