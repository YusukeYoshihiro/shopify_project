import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'fabe-ecommerce.myshopify.com',
  storefrontAccessToken: '55319d07e423abf58f33330133f135b6'
});

export default client;

