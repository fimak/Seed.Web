import UmbracoFormFieldCondition from "./umbracoFormFieldCondition.type";
import UmbracoFormFieldSet from "./umbracoFormFieldSet.type";

type UmbracoFormPage = {
    caption: string,
    condition: UmbracoFormFieldCondition,
    fieldsets: UmbracoFormFieldSet[]
}

export default UmbracoFormPage;