import UmbracoFormFieldCondition from "./umbracoFormFieldCondition.type";
import UmbracoFormFieldsetContainer from "./umbracoFormFieldsetContainer.type";

type UmbracoFormFieldSet = {
	id: string,
	caption: string,
	condition: UmbracoFormFieldCondition
	columns: UmbracoFormFieldsetContainer[]
}

export default UmbracoFormFieldSet;