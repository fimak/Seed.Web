import Banner from '@components/grid/controls/widgets/banner/banner';
import Text from '@components/grid/controls/widgets/text/text';
import PinnedLinks from '@components/grid/controls/widgets/pinnedLinks/pinnedLinks';
import Layout from '@components/layout/layout';
import { WidgetModel } from '@lib/umbraco/types/widgetModel.type';
import { HomeContent } from 'content/home';
import React from 'react';
import TextColumns from '@components/grid/controls/widgets/textColumns/textColumns';
import Carousel from '@components/grid/controls/widgets/carousel/carousel';
import Slideshow from '@components/grid/controls/widgets/slideshow/slideshow';
import Hotspots from '@components/grid/controls/widgets/hotspots/hotspots';
import VideoScroll from '@components/grid/controls/widgets/videoScroll/videoScroll';
import Feed from '@components/grid/controls/widgets/feed/feed';
import DealerSearch from '@components/grid/controls/widgets/dealerSearch/dealerSearch';
import Cta from '@components/grid/controls/widgets/cta/cta';

export const Home: React.FC = () => {
  return (
    <Layout>
        <Banner {...HomeContent.banner!.imageLeftAligned as WidgetModel} />
        <PinnedLinks {...HomeContent.pinnedLinks!.bottom as WidgetModel} />
        <Text {...HomeContent.text!.theFinest as WidgetModel} />
        <TextColumns {...HomeContent.textColumns!.thinDivider as WidgetModel} />
        <Carousel {...HomeContent.carousel!.boats as WidgetModel} />
        <Text {...HomeContent.text!.aboveTheRest as WidgetModel} />
        <Slideshow {...HomeContent.slideshow!.standard as WidgetModel} />
        <Hotspots {...HomeContent.hotspots!.standard as WidgetModel} />
        <TextColumns {...HomeContent.textColumns!.featuresAndCapabilities as WidgetModel} />
        <VideoScroll {...HomeContent.videoScroll!.standard as WidgetModel} />
        <Feed {...HomeContent.feed!.blog as WidgetModel} />
        <Text {...HomeContent.text!.knowledge as WidgetModel} />
        <DealerSearch {...HomeContent.dealerSearch!.standard as WidgetModel} />
        <Cta {...HomeContent.cta!.flyIn as WidgetModel} />
        <Carousel {...HomeContent.text!.text as WidgetModel} />
    </Layout>
  );
};
