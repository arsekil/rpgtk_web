import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: process.env.KINDE_ISSUER_URL!,
      applicationID: "convex",
    },
  ],
} satisfies AuthConfig;
