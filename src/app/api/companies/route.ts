import { NextResponse } from 'next/server';
import { Company } from '@/src/lib/api';
import { getDb } from '@/src/lib/mongodb';

export async function GET(req: Request) {
  const db = await getDb();
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title');

  const filter: Record<string, unknown> = {};
  if (title) {
    filter.title = { $regex: title, $options: 'i' };
  }

  const companies = await db
    .collection<Company>('companies')
    .find(filter, { projection: { _id: 0 } })
    .toArray();

  return NextResponse.json(companies);
}
