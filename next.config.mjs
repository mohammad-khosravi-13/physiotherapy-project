/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_PROJECT_NAME:
      process.env.NEXT_PUBLIC_PROJECT_NAME || "Physiotherapy Project",
  },
};
export default nextConfig;
