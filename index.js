const express = require("express");
const { connectToMongoDB } = require("./connect");
const path = require("path");
const urlRoute = require("./routes/url");
const staticRoute =require("./routes/staticRouters");

const app = express();
const PORT = 8001;
//mongodb://localhost:127.0.0.1/short-url27017

connectToMongoDB("mongodb://127.0.0.1/27017short-url").then(() =>
  console.log("Mongodb connected")
).catch((e) =>
console.log("Mongodb not connected",e)
)
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/url", urlRoute);
app.use("/",staticRoute);


app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
