import React from "react";
import dynamic from "next/dynamic";
import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
const Accordion = dynamic(() => import("./widgets/accordion/accordion"));
const Banner = dynamic(() => import("./widgets/banner/banner"));
const Breadcrumb = dynamic(() => import("./widgets/breadcrumb/breadcrumb"));
const Carousel = dynamic(() => import("./widgets/carousel/carousel"));
const Cta = dynamic(() => import("./widgets/cta/cta"));
const Feed = dynamic(() => import("./widgets/feed/feed"));
const Text = dynamic(() => import("./widgets/text/text"));
const SearchResults = dynamic(() => import("./widgets/searchResults/searchResults"));
const Tabs = dynamic(() => import("./widgets/tabs/tabs"));


export default function Widget(model: WidgetModel) {
    switch (model.widget) {
        case "Carousel":
            return <Carousel {...model} />
        case "Cta":
            return <Cta {...model} />
        case "Feed":
            return <Feed {...model} />
        case "Banner":
            return <Banner {...model} />
        case "Breadcrumb":
            return <Breadcrumb {...model} />
        case "Accordion":
            return <Accordion {...model} />
        case "Text":
            return <Text {...model} />
        case "SearchResults":
            return <SearchResults {...model} />
        case "Tabs":
            return <Tabs {...model} />
        default:
            return <h3>Widget has not been added to widget component.</h3>
    }
}