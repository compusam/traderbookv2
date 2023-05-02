import { stripe } from "@/utils/admin/stripe";
import {
  upsertPriceRecord,
  upsertProductRecord,
} from "@/utils/admin/stripe-billing-helpers";

const stripe_secret_key = 'sk_test_YHlLMEgJGHK069lmfus0wWJW';
// check if stripe key is set, exit if not
if (!stripe_secret_key) {
  console.log("No Stripe key found, skipping sync");
  process.exit(0);
}

// first we pull all products from Stripe and insert them into the billing_products table
stripe.products
  .list()
  .then(async (products) => {
    for (const product of products.data) {
      await upsertProductRecord(product);
    }
  })
  .catch((e) => {
    console.log(e);
  });

// then we pull all prices from Stripe and insert them into the billing_prices table
stripe.prices
  .list()
  .then(async (prices) => {
    for (const price of prices.data) {
      await upsertPriceRecord(price);
    }
  })
  .catch((e) => {
    console.log(e);
  });
