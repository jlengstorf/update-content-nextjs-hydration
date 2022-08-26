import { MiddlewareRequest } from '@netlify/next';
import type { NextRequest } from 'next/server';

export async function middleware(nextRequest: NextRequest) {
  const middlewareRequest = new MiddlewareRequest(nextRequest);
  const response = await middlewareRequest.next();

  const newHeading = 'This headline was updated with no hydration errors!';
  const newDetails = `This response was updated from ${nextRequest.geo?.city}, ${nextRequest.geo?.country}`;

  response.replaceText('#title', newHeading);
  response.replaceText('#heading', newHeading);
  response.replaceText('#details', newDetails);

  response.setPageProp('heading', newHeading);
  response.setPageProp('details', newDetails);

  return response;
}
