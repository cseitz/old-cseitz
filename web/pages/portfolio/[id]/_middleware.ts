import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    const { nextUrl } = req;
    const { pathname, search } = nextUrl;
    // console.log(pathname);
    const tokens = pathname.split('/').filter(o => o.length > 0);
    // console.log(tokens);
    if (!tokens.includes('demo'))
        return NextResponse.next();
    const demo = tokens.indexOf('demo') + 1;
    const pre = tokens.slice(0, demo);
    const post = tokens.slice(demo);
    // console.log('oof', pre, post);
    const iframe = '/' + pre.join('/') + '/' + encodeURIComponent(post.join('/') + search);
    console.log(iframe);
    return NextResponse.rewrite(iframe)
}