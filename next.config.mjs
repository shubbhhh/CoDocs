/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    
    // This setting allows the custom server to handle WebSocket connections
    serverRuntimeConfig: {
        hostname: 'localhost',
        port: 3000,
      }, 
};

export default nextConfig;
