import { Db, MongoClient } from 'mongodb';

const mongoUri = process.env.MONGODB_URI;
const collection = process.env.MONGODB_DB_COLLECTION || 'companies';

if (!mongoUri) {
  throw new Error(
    'Missing MongoDB uri environment variable.',
  );
}

export const getDb = async (): Promise<Db> => {
  const client = new MongoClient(mongoUri as string);
  return client.db(collection);
};
