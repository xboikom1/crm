import { NextResponse } from 'next/server';
import { Company } from '@/src/lib/api';
import { getDb } from '@/src/lib/mongodb';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } },
) {
  const db = await getDb();
  const url = new URL(_request.url);
  const id = params?.id ?? url.pathname.split('/').pop() ?? '';

  const company = await db
    .collection<Company>('companies')
    .findOne({ id }, { projection: { _id: 0 } });

  if (!company) {
    return NextResponse.json({ message: 'Not found', id }, { status: 404 });
  }

  return NextResponse.json(company);
}
