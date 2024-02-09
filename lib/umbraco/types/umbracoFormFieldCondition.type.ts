import UmbracoFormFieldConditionRule from "./umbracoFormFieldConditionRule.type";

type UmbracoFormFieldCondition = {
	id: string,
	enabled: boolean,
	actionType: number,
	logicType: number,
	rules: UmbracoFormFieldConditionRule[]
}

export default UmbracoFormFieldCondition;