import { defineApp } from "convex/server";
import kindeSync from "@sholajegede/kinde-sync/convex.config.js";

const app = defineApp();
app.use(kindeSync);

export default app;
