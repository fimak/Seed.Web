import type { GetStaticProps, NextPage } from 'next'
import Grid from '../common/components/grid/grid'
import { GridSection } from '../lib/umbraco/types/gridSection.type'
import { getErrorPage } from '../lib/umbraco/util/dataApi'
import LayoutHardCoded from '@components/layout/layout'
import { IParams } from 'common/types/iparams.type'
import { HomeContent } from 'content/home'
import Banner from '@components/grid/controls/widgets/banner/banner'
import { WidgetModel } from '@lib/umbraco/types/widgetModel.type'

export type HardCodedPageModel = {
    locale: string,
}

const Home: NextPage<HardCodedPageModel> = ({locale}) => {
    return (
        <Layout>
            <Banner {...HomeContent.banner!.imageLeftAligned as WidgetModel}>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({params, preview = false, locale}) => {
    return {
        props: {
            locale
        },
        revalidate: 10
    }
}

export default Home
