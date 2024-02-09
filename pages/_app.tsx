import '../styles/globals.scss'
import type { AppProps } from 'next/app';
const NProgress = require('nprogress');
import { createContext, useContext, useEffect, useState } from 'react';
import { AzureAppInsights } from 'common/util/appInsights';
import LogLevel from '@lib/umbraco/types/logLevel.type';
import { log } from '@lib/umbraco/util/dataApi';

const RefererContext = createContext<string>('');

export const useRefererContext = () => {
    return useContext(RefererContext);
}

function MyApp({ Component, pageProps, router }: AppProps) {
    const [previousPage, setPreviousPage] = useState<string>('');

    useEffect(() => {
        const showProgress = () => {
            setPreviousPage(location.origin + router.asPath);
            NProgress.start();
        }
    
        const hideProgress = () => {
            NProgress.done();
        }
        if (!previousPage) {
            setPreviousPage(document.referrer);
        }
        router.events.on('routeChangeStart', showProgress);
        router.events.on('routeChangeComplete', hideProgress);
        router.events.on('routeChangeError', () => hideProgress);
        return () => {
            router.events.off('routeChangeStart', showProgress);
            router.events.off('routeChangeComplete', hideProgress);
            router.events.off('routeChangeError', hideProgress)
        }
    }, [previousPage, router])
    if (router.route.indexOf('[[...slug]]') === -1) {
        return <Component {...pageProps} />
    }
    try {
        return (
            <AzureAppInsights>
                <RefererContext.Provider value={previousPage}>
                    <Component {...pageProps}/>
                </RefererContext.Provider>
            </AzureAppInsights>
        )
    }
    catch(error) {
        log(JSON.stringify(error), LogLevel.Error);
        throw error;
    }
}

export default MyApp
