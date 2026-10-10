import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  turbopack: {},

  serverExternalPackages: [
    "@payloadcms/db-postgres",
    "@payloadcms/drizzle",
    "drizzle-kit",
    "esbuild",
  ],
};

export default withPayload(nextConfig);