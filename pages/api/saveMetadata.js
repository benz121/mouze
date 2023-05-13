import { MongoClient } from 'mongodb';


const saveMetadataHandler = async (req, res) => {
  try {
    console.log(req.body);
    const { files } = req.body;

    const client = new MongoClient("mongodb+srv://marco:qArXItbXECsRAda6@cluster0.6hbio.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    const db = client.db('foren');
    const collection = db.collection('files');

    // const fileMetadata = files.map((file) => ({
    //   fileName: file.name,
    //   fileSize: file.size,
    // }));

    await collection.insertMany(files);

    client.close();

    return res.status(200).json({ message: 'Metadata saved.' });
  } catch (error) {
    console.error('Metadata save error:', error);
    return res.status(500).json({ error: 'Server error.' });
  }
};

export default saveMetadataHandler;
