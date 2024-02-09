import { FlexibleLinkModel } from "./flexibleLinkModel.type";
import FooterLinks from "./footerLinks";
import { Hours } from "./hours.type";
import { IconLinkModel } from "./iconLinkModel.type";
import { ImageModel } from "./imageModel.type";
import { LinkWithChildren } from "./linkWithChildren.type";
import { LinkWithChildrenPlusToggle } from "./linkWithChildrenPlusToggle.type";
import PageCultureInfo from "./pageCultureInfo";

export type CommonData = {
    logo: ImageModel,
    lightLogo: ImageModel,
    secondaryLinks?: LinkWithChildren[],
    cultures: PageCultureInfo[],
    homeCultures: PageCultureInfo[],
    searchPlaceholder?: string,
    searchTarget?: string,
    socialLinks?: IconLinkModel[],
    mainLinks: LinkWithChildrenPlusToggle[],
    footerLinks?: FooterLinks[],
    footerButtons?: FlexibleLinkModel[],
    secondaryFooterLinks?: FlexibleLinkModel[],
    copyright?: string,
    footerText: string,
    lastUpdatedMessage?: string,
    homeUrl: string,
    homeId: number,
    culture: string,
    dictionaries: NodeJS.Dict<string>,
    gtmId: string,
    favicon: ImageModel,
    buttons?: FlexibleLinkModel[],
    theme?: string,
    sideText?: string
};