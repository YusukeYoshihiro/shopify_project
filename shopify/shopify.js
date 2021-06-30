import Client from 'shopify-buy';
// https://shopify.github.io/js-buy-sdk
const client = Client.buildClient({
  domain:'fabe-ecommerce.myshopify.com',
  // storefrontAccessToken is not secret 
  // https://fabe-ecommerce.myshopify.com/admin/apps/private/320306479269
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_TOKEN
});

export default client;