import  { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req:NextRequest,ev:NextFetchEvent) {
  if(!req.url.includes("/api")) {
    if(!req.url.includes("/log-in") && !req.cookies.cookie_home){
       if(req.url.includes("/create-account")) return;
        console.log(req.cookies,req.url,"나하?")
        req.nextUrl.pathname = "/log-in";
        return NextResponse.redirect(req.nextUrl);
    }
  }
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
  }