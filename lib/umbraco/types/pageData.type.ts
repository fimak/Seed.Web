import AntiForgeryToken from "./antiForgeryToken.type"
import { CommonData } from "./commonData.type"
import Redirect from "./redirect.type"
import { UmbracoNode } from "./umbracoNode.type"

export type PageData = {
    preview: boolean,
    redirect?: Redirect
    page: UmbracoNode,
    commonData: CommonData,
    modals: UmbracoNode[],
    antiForgeryToken: AntiForgeryToken
}