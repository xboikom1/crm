import { NextResponse } from 'next/server';
import { SummarySales } from '@/src/lib/api';
import { getDb } from '@/src/lib/mongodb';

export async function GET() {
  const db = await getDb();
  const sales = await db
    .collection<SummarySales>('summary-sales')
    .find({}, { projection: { _id: 0 } })
    .toArray();

  return NextResponse.json(sales);
}
