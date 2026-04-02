import { Db, MongoClient } from 'mongodb';

const username = process.env.MONGO_DB_USERNAME;
const password = process.env.MONGO_DB_PASSWORD;
const collection = process.env.MONGODB_DB_COLLECTION || 'companies';
const mongoUri = process.env.MONGODB_URI;

if (!username || !password) {
  throw new Error(
    'Missing MongoDB username or password environment variables.',
  );
}

export const getDb = async (): Promise<Db> => {
  const client = new MongoClient(mongoUri as string);
  return client.db(collection);
};
