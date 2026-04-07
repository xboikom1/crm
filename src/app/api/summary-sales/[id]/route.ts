import { NextResponse } from 'next/server';
import { SummaryStats } from '@/src/lib/types';
import { getDb } from '@/src/lib/mongodb';

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const db = await getDb();
  const doc = await db
    .collection<SummaryStats>('summary-stats')
    .findOne({ id }, { projection: { _id: 0 } });

  if (!doc) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(doc);
}
