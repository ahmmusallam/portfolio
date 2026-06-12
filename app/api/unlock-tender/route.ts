import { NextResponse, type NextRequest } from 'next/server';

const COOKIE_NAME = 'tender-unlock';
const THIRTY_DAYS = 60 * 60 * 24 * 30;

export async function POST(req: NextRequest) {
  const expectedPin = process.env.TENDER_PIN;
  const token = process.env.TENDER_TOKEN;

  if (!expectedPin || !token) {
    return NextResponse.json(
      { ok: false, error: 'Gate is not configured' },
      { status: 500 },
    );
  }

  const body = await req.json().catch(() => null);
  const pin = body && typeof body.pin === 'string' ? body.pin : '';

  if (pin !== expectedPin) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: THIRTY_DAYS,
  });
  return res;
}
