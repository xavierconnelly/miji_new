import { createClient } from 'microcms-js-sdk';
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from '$env/static/private';

console.log('Domain:', MICROCMS_SERVICE_DOMAIN);
console.log('Key:', MICROCMS_API_KEY?.slice(0, 5) + '...');

export const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
});