import { connectToDatabase } from '../../utils/db';

export default async function handler(req, res) {
  const functionName = req.query.functionName;
  try {
    let data;

    // Determine which function to call based on the query parameter
    if (functionName === 'search') {
      data = await handleSearchRequest(req);
    } else if (functionName === 'clients') {
      data = await handleclientspaces(req);
    } else if (functionName === 'collections') {
      data = await handelcollections(req);
    }
     else {
      res.status(400).json({ error: 'Invalid function name' });
      return;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function handleSearchRequest(req) {
  if (req.method === 'GET') {
    const searchTerm = req.query.query;

    try {
      const db = await connectToDatabase();
      const collection = db.collection('spases');

      const results = await collection.aggregate([
        {
          $match: {
            Name: { $regex: searchTerm, $options: 'i' }
          }
        }
      ]).toArray();

      return results;
    } catch (error) {
      console.error('Error searching in the database:', error);
      throw error;
    }
  } else {
    throw new Error('Method Not Allowed');
  }
}

export async function handleclientspaces(req) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('spases');
      const allClients = await collection.find({}).toArray();
      return allClients;
    } catch (error) {
      console.error('Error fetching data from the database:', error);
      throw error;
    }
  } else {
    throw new Error('Method Not Allowed');
  }
}

export async function handelcollections(req) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('basic');
      const collections = await collection.find({}).toArray();
      return collections;
    } catch (error) {
      console.error('Error fetching data from the database:', error);
      throw error;
    }
  } else {
    throw new Error('Method Not Allowed');
  }
}