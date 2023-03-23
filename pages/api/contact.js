import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !email.includes('@') || !name || !message) {
      res.status(422).json({ message: 'Invalid input' });
    }

    try {
      const client = await MongoClient.connect(
        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ggqoqr6.mongodb.net/contactForm?retryWrites=true&w=majority`
      );
      const db = client.db();
      const result = await db.collection('messages').insertOne(req.body);
      client.close();
      res.status(201).json({ message: 'Sent successfully' });
    } catch (e) {
      res.status(500).json({ message: 'Could not connect to database' });
    }

    console.log({ email, name, message });
    res.status(201).json({ message: 'Sent successfully' });
  }
};

export default handler;
