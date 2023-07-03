// if (process.env.NODE_ENV!== "production") {
//   require('dotenv').config();
// }

const { MongoClient } = require("mongodb");

const DB_URI = process.env.DB_URI;

const client = new MongoClient(DB_URI);

async function run() {
  try {
    await client.connect();

    await client.db("sample_airbnb").command({ ping: 1 });

    console.info(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
