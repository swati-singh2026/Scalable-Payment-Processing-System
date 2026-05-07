const razorpay = require("./razorpay");
const express = require("express");
require("dotenv").config();
console.log("Razorpay Test API Key:", process.env.RAZORPAY_TEST_KEY);
console.log("Razorpay Test Secret Key:", process.env.RAZORPAY_TEST_SECRET);
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
//Api-Test
app.get("/", (req, res) => {
  res.send("API is working fine!");
});
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb://swatisingh3002:swati3002@ac-ectl7bk-shard-00-00.lbwr9at.mongodb.net:27017,ac-ectl7bk-shard-00-01.lbwr9at.mongodb.net:27017,ac-ectl7bk-shard-00-02.lbwr9at.mongodb.net:27017/?ssl=true&replicaSet=atlas-4ix51k-shard-0&authSource=admin&appName=payment-cluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
    app.post("/create-order", async (req, res) => {
      try {
        const options = {
          amount: 50000,
          currency: "INR",
          receipt: "receipt#1",
        };
        const order = await razorpay.orders.create(options);
        res.json(order);
      } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ error: "Failed to create order" });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);
