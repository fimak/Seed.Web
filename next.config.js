const { config } = require('process')
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const ContentSecurityPolicy = `
    default-src 'none';
    script-src * 'unsafe-inline' 'unsafe-eval';
    connect-src *;
    style-src * 'unsafe-inline';
    img-src * data: 'unsafe-eval';
    font-src * data: 'unsafe-eval';
    frame-src *;
    upgrade-insecure-requests;
    block-all-mixed-content;
    frame-ancestors 'none';
    form-action 'self';
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    trailingSlash: true,
    poweredByHeader: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.azurewebsites.net'
            },
            {
                protocol: 'https',
                hostname: 'i.ytimg.com'
            },
            {
                protocol: 'https',
                hostname: 'localhost'
            },
            {
                protocol: 'https',
                hostname: '**.azurefd.net'
            },
            {
                protocol: 'https',
                hostname: '**.jeffersonhealthplans.com'
            }
        ]
    },
    i18n: {
        locales: ['local'],
        defaultLocale: 'local',
        localeDetection: false,
        domains: [
            // {
            //     defaultLocale: '6f237a1d-d7f5-4357-8026-516ec32dd0db/en-us',
            //     domain: 'www.healthpartnersplans.com'
            // },
            // {
            //     defaultLocale: '6f237a1d-d7f5-4357-8026-516ec32dd0db/es',
            //     domain: 'es.healthpartnersplans.com'
            // },
        ]
    },
    compiler: {
        removeConsole: false
    },
    publicRuntimeConfig: {
        recaptchaKey: '6LdXfGMoAAAAAPEl1ZGzPeS-SMRoWlnqsQT71nZD'
    },
    headers: async() => {
        return [
            {
                source: '/:slug*',
                headers: [
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
                    }
                ]
            }
        ]
    }
}

module.exports = withBundleAnalyzer(nextConfig);
