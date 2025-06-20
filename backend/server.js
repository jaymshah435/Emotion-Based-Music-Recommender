require("dotenv").config();
const app = require("./app");
const connectDb = require("./config/connectDb");

const PORT = process.env.PORT;

// Connect to DB and start server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`The Server is running on http://localhost:${PORT}`);
  });
});