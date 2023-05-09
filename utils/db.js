// route.js

import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://marco:qArXItbXECsRAda6@cluster0.6hbio.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let dbPromise;


let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    await client.connect();
    const db = client.db("foren");
    cachedDb = db;
    return db;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}
