import express from "express";
import routes from "./routes/index.mjs";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser("testtest"));
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.cookie("test", "test", { maxAge: 30000, signed: true });
  res.status(201).send({
    message: "Hello World",
  });
});
