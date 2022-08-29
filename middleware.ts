import type { NextRequest } from 'next/server';
import { MiddlewareRequest } from '@netlify/next';

export async function middleware(nextRequest: NextRequest) {
  // enable the advanced middleware features so we can modify the request
  const middlewareRequest = new MiddlewareRequest(nextRequest);
  const response = await middlewareRequest.next();

  // get details about where the request is being made from
  const geo = nextRequest.geo;
  const place = geo?.city
    ? `${geo.city}, ${geo.region}, ${geo.country}`
    : 'the world';

  const newHeading = `The best headlines in ${place}!`;
  const newDetails = `This response was updated from the edge.`;

  // update the text in the HTML (what was rendered through SSR)
  response.replaceText('#title', newHeading);
  response.replaceText('#heading', newHeading);
  response.replaceText('.details', newDetails);

  // update the page props (what was set in getStaticProps)
  response.setPageProp('heading', newHeading);
  response.setPageProp('details', newDetails);

  return response;
}
