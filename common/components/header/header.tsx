import { FlexibleLinkModel } from '@lib/umbraco/types/flexibleLinkModel.type';
import styles from './header.module.scss';
export type BasicLink = {
    label: string,
    url: string
}
export type HeaderModel = {
    logo: string,
    secondaryLinks: BasicLink[],
    mainLinks: BasicLink[],
    startTransparent?: boolean
}

export default function Header(model: HeaderModel) {
    return (
        <p>Implement header.</p>
    )
}

// import Image from 'next/image';
// import styles from './header.module.scss';
// import InlineList from '../inline-list/inline-list';
// import FlexibleLink from '../links/flexibleLink';
// import Link from '../links/link';
// import { CommonData } from '../../../lib/umbraco/types/commonData.type';
// import { getAbsoluteMediaUrl } from '../../../lib/umbraco/util/helpers';
// import { useState } from 'react';
// import HamburgerToggle from './hamburgerToggle';
// import DropdownLink from '@components/links/dropdownLink';
// import SearchBox from '@components/searchBox/searchBox';
// import LanguageSelector, { CultureOption } from '@components/languageSelector/languageSelector';
// import { useRouter } from 'next/router';
// import PageCultureInfo from '@lib/umbraco/types/pageCultureInfo';
// import isLocal from 'common/util/isLocal';
// import isLocalExplicit from 'common/util/isLocaleExplicit';
// import BasicDialog from '@components/dialogs/basicDialog';

// export type HeaderModel = {
//     data: CommonData,
//     startTransparent: boolean
// }

// export default function Header({data, startTransparent}: HeaderModel) {
//     const [open, setOpen] = useState(false);
//     const [searchOpen, setSearchOpen] = useState(false);
//     const router = useRouter();

//     const toggleOpen = () => {
//         setOpen(!open);
//     }

//     const closeMenu = () => {
//         setOpen(false);
//     }

//     const childCultures = data.homeCultures.map<CultureOption>(item => {return {culture: item.culture, label: item.label}});

//     const handleCultureChange = function(culture : string) {
//         var url = data.cultures.find(item => item.culture === culture)?.url;
//         if (!url) {
//             url = data.homeCultures.find(item => item.culture)?.url;
//         }
//         if (url) {
//             if (isLocalExplicit(url, router.locale)) {
//                 const uri = new URL(url);
//                 router.push(uri.pathname);
//             }
//             else {
//                 location.href = url;
//             }
//         }
//     }

//     return (
//         <>
//             <header className={styles.header + (open ? ' ' + styles.menuOpen : '') + (data.secondaryLinks ? ' ' + styles.hasSecondary : ' ' + styles.noSecondary)}>
//                 <div className={`${styles.container} grid-container`}>
//                     <div className={styles.logoContainer}>
//                         <Link href={data.homeUrl} className={styles.logo}>
//                             <Image src={getAbsoluteMediaUrl(data.logo.url)} fill={true} alt={data.logo.name} />
//                         </Link>
//                     </div>
//                     <div className="hide-for-xxlarge hide-for-print">
//                         <HamburgerToggle className={styles.hamburgerToggle} active={open} toggle={toggleOpen} />
//                     </div>
//                     <div className={styles.main + ' hide-for-print'}>
//                         <div className={styles.links}>
//                             {data.secondaryLinks && 
//                                 <div className={styles.secondaryLinks}>
//                                     <InlineList restrict="xxlarge" className={styles.secLinks + ' narrow'}  divider={true} items={data.secondaryLinks.map(item =>
//                                         <DropdownLink className={styles.dropdownLink} {...item} />
//                                     )} />
//                                     {childCultures && childCultures.length > 1 &&
//                                         <LanguageSelector className={styles.cultures} cultures={childCultures} onChange={handleCultureChange} />
//                                     }
//                                     {!!data.searchPlaceholder && data.searchTarget &&
//                                         <div className={styles.searchContainer + ' show-for-xxlarge'}>
//                                             <a className={styles.searchButton + " bmg-icon bmg-icon-search"} onClick={() => setSearchOpen(!searchOpen)}></a>
//                                             <BasicDialog className={styles.alertDialog} open={searchOpen} sx={{
//                                                 '.MuiDialogContent-root': {
//                                                     padding: '0',
//                                                 },
//                                                 '.MuiDialog-paper': {
//                                                     borderRadius: '25px',
//                                                     backgroundColor: 'transparent'
//                                                 }
//                                             }} onClose={() => setSearchOpen(false)}>
//                                                 <SearchBox autoFocus={true} onSubmit={() => setSearchOpen(false)} className={styles.searchBox} placeholder={data.searchPlaceholder} targetPage={data.searchTarget} />
//                                             </BasicDialog>
//                                         </div>
//                                     }
//                                 </div>
//                             }
//                             <div className={styles.mainLinks}>
//                                 <InlineList restrict="xxlarge" gutterSize={2} items={data.mainLinks.map(item =>
//                                     <DropdownLink className={styles.dropdownLink} {...item} />
//                                 )}/>
//                                 {data.buttons &&
//                                     <div className={styles.buttonsContainer}>
//                                         <InlineList items={data.buttons.map((item, index) =>
//                                             <FlexibleLink className={"button buttonSmall" + (index % 2 === 1 ? " purpleButton" : "")} link={item} />
//                                         )}/>
//                                     </div>
//                                 }
//                                 {!!data.searchPlaceholder && data.searchTarget &&
//                                     <SearchBox className={styles.mobileSearch + ' hide-for-xxlarge'} autoFocus={true} onSubmit={() => setOpen(false)} placeholder={data.searchPlaceholder} targetPage={data.searchTarget} />
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={styles.overlay} onClick={closeMenu}></div>
//             </header>
//             <div className={styles.spacer + (startTransparent ? '' : ' ' + styles.active)}></div>
//         </>
//     )
// }
