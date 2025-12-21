import { NextResponse } from 'next/server';
import { Country } from '@/src/lib/api';
import { getDb } from '@/src/lib/mongodb';

export async function GET() {
  const db = await getDb();
  const countries = await db
    .collection<Country>('countries')
    .find({}, { projection: { _id: 0 } })
    .toArray();

  return NextResponse.json(countries);
}
