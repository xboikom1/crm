import { NextResponse } from 'next/server';
import { SummaryStats } from '@/src/lib/api';
import { getDb } from '@/src/lib/mongodb';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } },
) {
  const db = await getDb();
  const doc = await db
    .collection<SummaryStats>('summary-stats')
    .findOne({ id: params.id }, { projection: { _id: 0 } });

  if (!doc) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(doc);
}
