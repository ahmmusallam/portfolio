import { NextResponse, type NextRequest } from 'next/server';

const COOKIE_NAME = 'tender-unlock';

export function middleware(req: NextRequest) {
  const token = process.env.TENDER_TOKEN;
  const cookie = req.cookies.get(COOKIE_NAME)?.value;
  if (token && cookie === token) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = '/unlock-tender';
  url.search = `?next=${encodeURIComponent(req.nextUrl.pathname)}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/case-study/tender-assist', '/case-study/tender-assist/:path*'],
};
