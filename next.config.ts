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

  async redirects() {
    return [
      {
        source: "/webmail",
        destination: "https://gcam1071.siteground.biz/webmail/mail/",
        permanent: false,
      },
    ];
  },
};

export default withPayload(nextConfig);