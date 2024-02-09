import FileUploadOptions from "./fileUploadOptions.type";
import UmbracoFormAllowedUploadType from "./umbracoFormAllowedUploadType.type";
import UmbracoFormFieldCondition from "./umbracoFormFieldCondition.type"
import UmbracoFormsFieldType from "./umbracoFormsFieldType";

type UmbracoFormField = {
    id: string,
    caption?: string,
    helpText?: string,
    defaultValue?: string,
    placeholder?: string,
    cssClass: string,
    alias: string,
    required: boolean,
    requiredErrorMessage: string,
    pattern?: string,
    patternInvalidErrorMessage?: string,
    condition: UmbracoFormFieldCondition,
    preValues?: any[],
    settings: NodeJS.Dict<string>,
    type: UmbracoFormsFieldType,
    fileUploadOptions: FileUploadOptions
}

export default UmbracoFormField;