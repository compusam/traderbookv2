import Stripe from "stripe";
const stripe_secret_key = 'sk_test_YHlLMEgJGHK069lmfus0wWJW';
export const stripe = new Stripe(stripe_secret_key, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2022-08-01",
  // Register this as an official Stripe plugin.
  // https://stripe.com/docs/building-plugins#setappinfo
  appInfo: {
    name: `Basejump App`,
    version: "0.1.0",
  },
});
