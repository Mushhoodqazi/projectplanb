import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { SubscribeModel } from "./Models/Subscribe.js";
import { Planbmodel } from "./Models/Planb.js";

import { Console } from "console";
import { receiveMessageOnPort } from "worker_threads";

const app = express();

const url =
  "mongodb+srv://Bhatti:Bhatti123@cluster0.jdxry0y.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected..."));
app.listen(5000);

app.use(cors());
app.use(bodyParser.json({ exrended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// APIs

app.post("/Subscribe", async (req, res) => {
  const model = new SubscribeModel({ email: req.body.email });
  model
    .save()
    .then(() => {
      res.status(200).send({ response: "Added Successfully" });
    })
    .catch(() => {
      console.log(error);
      res.status(200).send({ response: "Not Added " });
    });
});

app.post("/Planb", async (req, res) => {
    console.log(req.body)
  const model = new Planbmodel({ UserName: req.body.UserName, Password:req.body.Password});
  model
    .save()
    .then(() => {
      res.status(200).send({ response: "Added Successfully" });
    })
    .catch(() => {
      console.log(error);
      res.status(200).send({ response: "Not Added " });
    });
});
