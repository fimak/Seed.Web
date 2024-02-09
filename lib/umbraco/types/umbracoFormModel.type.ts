import UmbracoFormField from "./umbracoFormField.type";
import UmbracoFormPage from "./umbracoFormPage.type";

type UmbracoFormModel = {
    id: string,
    indicator: string,
    name: string,
    cssClass: string,
    nextLabel: string,
    previousLabel: string,
    submitLabel: string,
    disableDefaultStylesheet: boolean,
    fieldIndicationType: number,
    hideFieldValidation: boolean,
    messageOnSubmit: string,
    showValidationSummary: boolean,
    goToPageUrlOnSubmit: string,
    pages: UmbracoFormPage[]
}

export default UmbracoFormModel;