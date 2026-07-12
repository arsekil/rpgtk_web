import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(async function proxy(req) {}, {
  publicPaths: ["/", "/about", "/blog", "/contact", "/faq", "/sitemap"], // e.g. ["/api/public", "/blog", "/about"]
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp4)).*)",
  ],
};
