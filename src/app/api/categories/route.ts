import { NextResponse } from 'next/server';
import { Category } from '@/src/lib/api';
import { getDb } from '@/src/lib/mongodb';

export async function GET() {
  const db = await getDb();
  const categories = await db
    .collection<Category>('categories')
    .find({}, { projection: { _id: 0 } })
    .toArray();

  return NextResponse.json(categories);
}
