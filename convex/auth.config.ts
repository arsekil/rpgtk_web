import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: process.env.NEXT_PUBLIC_KINDE_ISSUER_URL!,
      applicationID: process.env.NEXT_PUBLIC_KINDE_CLIENT_ID!,
    },
  ],
} satisfies AuthConfig;
