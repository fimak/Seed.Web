export type UmbracoNode = {
    name: string,
    id: number,
    key: string,
    url: string,
    urlSegment: string,
    contentTypeAlias: string,
    createDate: Date,
    updateDate: Date
    properties: NodeJS.Dict<any>
}