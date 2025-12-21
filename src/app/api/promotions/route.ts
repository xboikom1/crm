import { NextRequest, NextResponse } from 'next/server';
import { Promotion } from '@/src/lib/api';
import { getDb } from '@/src/lib/mongodb';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const companyId = searchParams.get('companyId');
  const filter: Partial<Promotion> = companyId ? { companyId } : {};

  const db = await getDb();
  const promotions = await db
    .collection<Promotion>('promotions')
    .find(filter, { projection: { _id: 0 } })
    .toArray();

  return NextResponse.json(promotions);
}
