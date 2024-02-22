import { NextRequest,NextResponse } from "next/server";
import { getSession, updateSession } from "./lib";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// }