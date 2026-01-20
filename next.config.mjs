import createMDX from "@next/mdx";

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  eslint: {
    ignoreDuringBuilds: true
  }
};

const withMDX = createMDX({
  extension: /\.mdx$/
});

export default withMDX(nextConfig);
