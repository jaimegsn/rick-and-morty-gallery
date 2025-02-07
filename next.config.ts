import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    domains: ['rickandmortyapi.com'],
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off', // Desabilitar a regra do 'any'
    '@next/next/no-img-element': 'off' // Desabilitar a regra do 'img'
  }
}

export default nextConfig;
