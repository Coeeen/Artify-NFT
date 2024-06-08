const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE_PASSWORD;
const app = require("./app");

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DATABASE CONNECTED");
  })
  .catch((err) => {
    console.error("DB CONNECTION ERROR:", err.message);
  });

app.listen(process.env.PORT, () => {
  console.log(`PORT START ON :${process.env.PORT}`);
});
