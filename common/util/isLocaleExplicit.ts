export default function isLocalExplicit(url: string, locale?: string) {
    if (url.startsWith('/')) {
        return true;
    }
    switch (locale) {
        // case '6f237a1d-d7f5-4357-8026-516ec32dd0db/en-us':
        //     return url.indexOf('www.healthpartnersplans.com') > -1;
        // case '6f237a1d-d7f5-4357-8026-516ec32dd0db/es':
        //     return url.indexOf('es.healthpartnerspans.com') > -1;
        case 'e4b76e59-2444-4eed-90ff-0fa8bbbaad3f/en-us':
            return url.indexOf('medicare.healthpartnersplans.com') > -1;
        case 'e4b76e59-2444-4eed-90ff-0fa8bbbaad3f/es':
            return url.indexOf('es.medicare.healthpartnersplans.com')
        default:
            return url.startsWith('/') || (url.indexOf('localhost:') > -1 || url.indexOf('.azurewebsites.net') > -1 || url.indexOf('.azurestaticapps.net') > -1|| url.indexOf('jeffersonhealthplans.com') > -1 || url.indexOf('.azurefd.net') > -1)
    }
}