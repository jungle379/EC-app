import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "ec-app", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "24ea5a95bc1b4b57aed48c0ff954cd394478",
});
