import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'export',
  // Es posible que necesites añadir la siguiente línea por el componente <Image>
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
