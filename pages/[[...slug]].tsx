import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Grid from '../common/components/grid/grid'
import Layout from '../common/components/layout/layout'
import { IParams } from '../common/types/iparams.type'
import { GridSection } from '../lib/umbraco/types/gridSection.type'
import { PageData } from '../lib/umbraco/types/pageData.type'
import { getPage, getPages, log } from '../lib/umbraco/util/dataApi'
import { createContext, useContext } from 'react'

export type PageModel = {
    data: PageData,
    locale: string,
    preview: boolean
}

const LocaleContext = createContext<string>('');

export const useLocaleContext = () => {
    return useContext(LocaleContext);
}

const Page: NextPage<PageModel> = ({data, locale, preview}) => {
    console.log('test');
    var bodyText = data.page.properties['bodyText'] as GridSection;
    return (
        <LocaleContext.Provider value={locale}>
            <Layout data={data} preview={preview}>
                <Grid content={bodyText} />
            </Layout>
        </LocaleContext.Provider>
    )
}

export const getStaticProps: GetStaticProps = async ({params, preview = false, locale}) => {
    const { slug } = params as IParams;
    var host = process.env['HOST'] || process.env['NEXT_PUBLIC_MEDIA_DOMAIN'];
    try {
        const data = await getPage(host + '/' + (slug ? slug.join('/') + '/' : ''), preview, locale);
        if (!data.page) {
            if (data.redirect) {
                return {
                    redirect: data.redirect
                }
            }
            return {
                notFound: true,
                revalidate: 10
            }
        }
        if (data.page.properties.redirectTo) {
            return {
                redirect: {
                    destination: data.page.properties.redirectTo.url,
                    permanent: false
                },
                revalidate: 10
            }
        }
        return {
            props: {
                data,
                locale,
                preview
            },
            notFound: !data || !data.page,
            revalidate: 10
        }
    }
    catch(error) {
        throw error;
    }
}

export const getStaticPaths: GetStaticPaths = async ({locales}) => {
    try {
        const pages = await getPages();
        return {
            paths: pages.map(item => {
                var slug = item.url.split('/');
                if (slug.length > 1 && !slug[slug.length - 1]) {
                    slug = slug.slice(1, slug.length - 1);
                }
                return {
                    params: { slug },
                    locale: item.locale
                };
            }).flat(),
            fallback: 'blocking'
        }
    }
    catch {
        return {
            paths: [],
            fallback: 'blocking'
        }
    }
}

export default Page
