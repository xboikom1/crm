import { Db, MongoClient } from 'mongodb';

const username = process.env.MONGO_DB_USERNAME;
const password = process.env.MONGO_DB_PASSWORD;
const collection = process.env.MONGODB_DB_COLLECTION || 'companies';

if (!username || !password) {
  throw new Error(
    'Missing MongoDB username or password environment variables.',
  );
}

export const getDb = async (): Promise<Db> => {
  const clientPromise = new MongoClient(
    `mongodb+srv://${username}:${password}@crm.yrses3h.mongodb.net/?retryWrites=true&w=majority`,
  );
  const client = await clientPromise;
  return client.db(collection);
};
