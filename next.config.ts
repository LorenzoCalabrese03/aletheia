import type { NextConfig } from "next";

const nextConfig: NextConfig = {

};
module.exports = {
  assetPrefix: '/aletheia/',// Definisce un prefisso per il caricamento delle risorse statiche 
  basePath: '/aletheia',// Definisce un prefisso per tutte le rotte della tua applicazione. 
  async rewrites() {
    return [
      {
        source: '/aletheia/:path*',
        destination: '/:path*',
      },
    ];
  },  
};
export default nextConfig;
