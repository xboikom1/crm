import { NextResponse } from 'next/server';
import { Company } from '@/src/lib/api';
import { getDb } from '@/src/lib/mongodb';

export async function GET() {
  const db = await getDb();
  const companies = await db
    .collection<Company>('companies')
    .find({}, { projection: { _id: 0 } })
    .toArray();

  return NextResponse.json(companies);
}
