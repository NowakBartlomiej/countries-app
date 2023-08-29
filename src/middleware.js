import { NextResponse } from 'next/server';

const middleware = (request) => {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-url', request.url);

    const header = requestHeaders.get('x-url')

    console.log()
    console.log(header)
    console.log()

    return NextResponse.next({
        request: {
          headers: requestHeaders,
        }
      });
}

export default middleware