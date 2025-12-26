import { NextRequest, NextResponse } from 'next/server';
import { Company } from '@/src/lib/api';
import { getDb } from '@/src/lib/mongodb';

export async function GET(
  request: NextRequest,
  context: { params: { id: string } },
) {
  const db = await getDb();
  const id = context.params.id;

  const company = await db
    .collection<Company>('companies')
    .findOne({ id }, { projection: { _id: 0 } });

  if (!company) {
    return NextResponse.json({ message: 'Not found', id }, { status: 404 });
  }

  return NextResponse.json(company);
}
