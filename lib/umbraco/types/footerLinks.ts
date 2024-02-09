import { FlexibleLinkModel } from "./flexibleLinkModel.type";

type FooterLinks = {
    topLink?: FlexibleLinkModel,
    labelOnlyTopLink: boolean,
    otherLinks?: FlexibleLinkModel[]
}

export default FooterLinks;