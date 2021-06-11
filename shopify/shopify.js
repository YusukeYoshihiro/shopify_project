import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'fabe-ecommerce.myshopify.com',
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_TOKEN
});

export default client;

