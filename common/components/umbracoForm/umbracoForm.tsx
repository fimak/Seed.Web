import { TextField, TextFieldProps } from "@mui/material";
import UmbracoFormModel from "../../../lib/umbraco/types/umbracoFormModel.type";
import * as Yup from 'yup';
import { createElement, useContext, useRef, useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { LoadingButton } from "@mui/lab";
import UmbracoFormField from "../../../lib/umbraco/types/umbracoFormField.type";
import { DialogContext } from "../dialogs/dialogProvider";
import { submitForm } from "./formApi";
import { GlobalDialogContext } from "../dialogs/globalDialog";
import { useRouter } from "next/router";
import styles from './umbracoForm.module.scss';
import AlertDialog from "@components/dialogs/alertDialog";
import { useCommonDataContext, useCurrentPageContext } from "@components/layout/layout";
import { useIsDarkContext } from "@components/grid/grid";
import InlineList from "@components/inline-list/inline-list";
import getConfig from 'next/config'
import DependentDropdown, { PrevalueSet } from "./dependentDropdown";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import { Dayjs } from "dayjs";
import FileUpload, { FileUploadData } from "./fileUpload";
import Rte from "@components/grid/controls/rte";
import UmbracoFormFieldCondition from "@lib/umbraco/types/umbracoFormFieldCondition.type";
import Recaptcha from "./recaptcha";
import { parseMagicStrings } from "@lib/umbraco/util/helpers";
import { useRefererContext } from "pages/_app";
import { useFormik } from "formik";
import SubmitButton from "./submitButton";
import variables from '@styles/variables.module.scss';

export type UmbracoFormRenderModel = {
    form: UmbracoFormModel,
    theme?: string,
    externalData?: NodeJS.Dict<string>,
    successMessageModifier?: (message: string, values: NodeJS.Dict<any>) => Promise<string>
}

export default function UmbracoForm({form, theme, externalData, successMessageModifier} : UmbracoFormRenderModel) {
    const router = useRouter();
    const referer = useRefererContext();
    const { dictionaries } = useCommonDataContext();
    const { publicRuntimeConfig } = getConfig()
    var page = useCurrentPageContext();
    const [submitting, setSubmitting] = useState(false);
    const isDark = useIsDarkContext();
    const [alert, setAlert] = useState('');
    const formElement = useRef<HTMLFormElement>(null);
    const modalId = useContext(GlobalDialogContext);
    const { dispatch } = useContext(DialogContext);
    const validation: any = {};
    const defaults: NodeJS.Dict<any> = {};
    const conditionFields: NodeJS.Dict<string[]> = {};
    const mappings: NodeJS.Dict<string> = {};
    const validationFunctions: NodeJS.Dict<Function> = {};
    const getOperations = (condition: UmbracoFormFieldCondition) => {
        if (!condition) {
            return '';
        }
        const orLogic = condition.logicType === 1;
        var code = '';
        condition.rules.forEach((rule, index) => {
            if (index > 0) {
                code += orLogic ? " || " : " && ";
            }
            const fieldName = "field_" + rule.field.replaceAll('-', '');
            switch(rule.operator) {
                case 0:
                    code += '(' + fieldName + " + '') === '" + rule.value + "'";
                    break;
                case 1:
                    code += '(' + fieldName + " + '') !== '" + rule.value + "'";
                    break;
                case 2:
                    code += fieldName + " > " + rule.value;
                    break;
                case 3:
                    code += fieldName + " < " + rule.value;
                    break;
                case 4:
                    code += "(" + fieldName + " && " + fieldName + ".indexOf('" + rule.value + "') > -1)";
                    break;
                case 5:
                    code += "(" + fieldName + " && " + fieldName + ".indexOf('" + rule.value + "') === 0)";
                    break;
                case 6:
                    code += "(" + fieldName + " && " + fieldName + ".endsWith('" + rule.value + "'))";
                    break;
            }
        });
        return code;
    }

    const buildConditions = (field: UmbracoFormField, groupConditions?: string) => {
        var params = (conditionFields[field.id] as string[]).map(id => "field_" + id.replaceAll('-', ''));
        var code = getOperations(field.condition);
        if (groupConditions) {
            if (code) {
                code = '(' + code + ') && (' + groupConditions + ')'; 
            }
            else {
                code = groupConditions;
            }
        }
        if (!code) {
            code = 'true';
        }
        code = 'return ' + code + ';';
        var result = new Function(...params, code);
        validationFunctions[field.id] = result;
        return result;
    }
    const validateString = (yupString: Yup.StringSchema<string | null | undefined, Yup.AnyObject, undefined, "">, field: UmbracoFormField) => {
        if (field.pattern) {
            yupString = yupString.matches(new RegExp(field.pattern), field.patternInvalidErrorMessage);
        }
        if (field.settings && field.settings.maximumLength) {
            var maxLength = field.settings.maximumLength;
            yupString = yupString.max(parseInt(maxLength), 'Field must be less than {0} characters.'.replaceAll('{0}', maxLength))
        }
        if (field.required) {
            yupString = yupString.required(field.requiredErrorMessage);
        }
        else {
            yupString.optional();
        }
        return yupString;
    }
    const validateArray = (yupArray: Yup.ArraySchema<any[] | undefined, Yup.AnyObject, undefined, ''>, field: UmbracoFormField) => {
        if (field.settings && field.settings.maximumLength) {
            var maxLength = field.settings.maximumLength;
            yupArray = yupArray.max(parseInt(maxLength), 'Field must be less than {0} characters.'.replaceAll('{0}', maxLength))
        }
        if (field.required) {
            yupArray = yupArray.required(field.requiredErrorMessage);
        }
        else {
            yupArray.optional();
        }
        return yupArray;
    }
    const getDependencies = (condition: UmbracoFormFieldCondition) => {
        if (!condition || !condition.rules) {
            return [];
        }
        return condition.rules.map(rule => rule.field).filter((value, index, self) => self.indexOf(value) === index);
    }
    const arrayFields = [
        'fab43f20-a6bf-11de-a28f-9b5755d89593',
        '84a17cf8-b711-46a6-9840-0e4a072ad000'
    ]
    const dateFields = [
        'f8b4c3b8-af28-11de-9dd8-ef5956d89593',
        'e6f06817-b4f6-455c-825b-cc45a224e67e'
    ]
    const resourceTargets: string[] = [];
    form.pages.forEach(formPage => {
        formPage.fieldsets.forEach(fieldset => {
            var groupCondition = fieldset.condition?.rules && fieldset.condition.rules.length ? getOperations(fieldset.condition) : "";
            var groupDependencies = getDependencies(fieldset.condition);
            fieldset.columns.forEach(container => {
                container.fields.forEach(field => {
                    if (field.settings.defaultValue && field.settings.defaultValue.indexOf('[*') > -1) {
                        const placeholderCheck = /\[\*(\w+)\]/g;
                        var matches = Array.from(field.settings.defaultValue.matchAll(placeholderCheck));
                        for (const match of matches) {
                            const alias = match[1];
                            if (resourceTargets.indexOf(alias) === -1) {
                                resourceTargets.push(alias);
                            }
                        }
                    }
                    defaults[field.id] = field.settings && field.settings.defaultValue ? parseMagicStrings(field.settings.defaultValue, router, page, dictionaries, externalData, referer) : (dateFields.indexOf(field.type.id) > -1 ? null : '');
                    var isArray = arrayFields.indexOf(field.type.id) > -1;
                    var fieldDependencies = getDependencies(field.condition);
                    conditionFields[field.id] = groupDependencies.concat(fieldDependencies).filter((value, index, self) => self.indexOf(value) === index);
                    if (isArray) {
                        var yupArray = Yup.array();
                        if ((conditionFields[field.id] as string[]).length) {
                            yupArray = yupArray.when(conditionFields[field.id] as string[], {
                                is: buildConditions(field, groupCondition),
                                then: schema => validateArray(schema, field)
                            });
                        }
                        else {
                            yupArray = validateArray(yupArray, field);
                        }
                        validation[field.id] = yupArray;
                    }
                    else {
                        var yupString = Yup.string().nullable();
                        if ((conditionFields[field.id] as string[]).length) {
                            yupString = yupString.when(conditionFields[field.id] as string[], {
                                is: buildConditions(field, groupCondition),
                                then: schema => validateString(schema, field)
                            });
                        }
                        else {
                            yupString = validateString(yupString, field);
                        }
                        validation[field.id] = yupString;
                    }
                    var alias = field.alias;
                    if (field.type.id == '663aa19b-423d-4f38-a1d6-c840c926ef86') {
                        alias = 'g-recaptcha-response';
                    }
                    mappings[field.id] = alias;
                })
            })
        })
    });

    const formik = useFormik({
        initialValues: defaults,
        validationSchema: Yup.object().shape(validation),
        enableReinitialize: true,
        onSubmit: (values, {resetForm}) => {
            setSubmitting(true);
            var data : NodeJS.Dict<string> = {};
            const keys = Object.keys(values);
            keys.forEach(key => {
                if (mappings[key]) {
                    data[mappings[key] || ''] = values[key];
                }
            });
            submitForm(form.id, JSON.parse(JSON.stringify({values: data, contentId: page.key})))
                .then(response => {
                    if (response.status === 202) {
                        if (form.goToPageUrlOnSubmit) {
                            router.push(form.goToPageUrlOnSubmit);
                        }
                        else {
                            response.text()
                                .then(message => {
                                    if (modalId) {
                                        dispatch({
                                            id: modalId,
                                            action: 'close'
                                        });
                                    }
                                    if (successMessageModifier) {
                                        successMessageModifier(form.messageOnSubmit, values)
                                            .then(message => {
                                                setAlert(message);
                                                setSubmitting(false);
                                            })
                                    }
                                    else {
                                        setAlert(form.messageOnSubmit);
                                        setSubmitting(false);
                                    }
                                });
                        }
                        resetForm();
                    }
                    else if (response.status == 422) {
                        response.json()
                            .then(errors => {
                                if (errors.errors) {
                                    var errorList = '<li>' + Object.values(errors.errors).join('</li><li>') + '</li>';
                                    setAlert(`
                                        <h3>${errors.title}</h3>
                                        <ul>${errorList}</ul>                                
                                    `)
                                }
                                else {
                                    setAlert(`
                                        <h3>${errors.title}</h3>
                                        <p>${errors.detail}</p>                             
                                    `)
                                }
                            })
                        setSubmitting(false);
                    }
                    else {
                        response.text()
                            .then(error => {
                                setAlert(error);
                            });
                        setSubmitting(false);
                    }
                })
                .catch(error => {
                    setAlert(error.message);
                    setSubmitting(false);
                })
        }
    });
    const renderField = (field : UmbracoFormField) => {
        var placeholder = field.settings?.placeholder;
        if (placeholder && field.required) {
            placeholder += ' ' + form.indicator;
        }
        switch (field.type.id) {
            case '3f92e01b-29e2-4a30-bf33-9df5580ed52c': //Short Answer
            case 'be4ca708-c2a2-4eaa-bf3b-d7a6aef648f0': //Database Validated Textfield
                return <input id={field.id} className={styles.textField} name={field.id} placeholder={placeholder} type={field.settings.fieldType} value={formik.values[field.id]} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            case '0dd29d42-a6a5-11de-a2f2-222256d89593': //Dropdown
                return (
                    <select name={field.id} value={formik.values[field.id]} onChange={formik.handleChange}>
                        <option disabled value="">{parseMagicStrings(field.settings.selectPrompt || '', router, page, dictionaries, externalData, referer)}</option>
                        {field.preValues?.map(preValue =>
                            <option key={preValue.value} value={preValue.value}>{preValue.caption}</option>
                        )}
                    </select>
                )
            case '023f09ac-1445-4bcb-b8fa-ab49f33bd046': //Long Answer
                var numRows = field.settings['NumberOfRows'];
                return <textarea rows={numRows ? parseInt(numRows) : 3 }  id={field.id} className={styles.textArea} name={field.id} placeholder={placeholder} value={formik.values[field.id]} onChange={formik.handleChange} onBlur={formik.handleBlur}></textarea>
            case 'fab43f20-a6bf-11de-a28f-9b5755d89593': //Multiple Choice
                return field.preValues?.map((preValue, index) => 
                    <div key={'checkbox-' + field.id + '-' + index} className={styles.customCheckbox}>
                        <input id={field.id + '-' + index} type="checkbox" name={field.id} checked={formik.values[field.id]?.indexOf(preValue.value) > -1} value={preValue.value} onChange={formik.handleChange} />
                        <label htmlFor={field.id + '-' + index}>{preValue.caption}</label>
                    </div>
                )
            case 'd5c0c390-ae9a-11de-a69e-666455d89593':  //Checkbox
                return <div className={styles.customCheckbox}>
                    <input id={field.id} type="checkbox" name={field.id} checked={formik.values[field.id]} value={formik.values[field.id]} onChange={formik.handleChange} />
                    <label htmlFor={field.id}>{field.helpText || field.caption}</label>
                </div>
            case '6515fccd-3f6e-4b8c-b559-068dbc62ef2d': //Multi Checkbox with Columns
                const columns = parseInt(field.settings.columns || '1');
                const size = Math.ceil((field.preValues?.length || 0) / columns);
                const items = [];
                for (var i=0; i<columns; i++) {
                    items.push(field.preValues?.slice(i * size, (i + 1) * size));
                }
                return (
                    <div className={"grid-x grid-margin-x small-up-1 medium-up-" + columns}>
                        {items.map((column, columnIndex) => 
                            <div className="cell" key={'column-' + columnIndex}>
                                {column?.map((preValue, index) => {
                                    const innerIndex = (columnIndex * size) + index;
                                    return (
                                        <div key={'checkbox-' + field.id + '-' + innerIndex} className={styles.customCheckbox}>
                                            <input id={field.id + '-' + innerIndex} type="checkbox" name={field.id} checked={formik.values[field.id]?.indexOf(preValue.value) > -1} value={preValue.value} onChange={formik.handleChange} />
                                            <label htmlFor={field.id + '-' + innerIndex}>{preValue.caption}</label>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                );
            case 'f8b4c3b8-af28-11de-9dd8-ef5956d89593': //Date
            case 'e6f06817-b4f6-455c-825b-cc45a224e67e': //Date Picker With Defaults
                return <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                        className={styles.datepicker} 
                        slotProps={{
                            field: {
                                clearable: true
                            }
                        }} 
                        value={dayjs(formik.values[field.id]) || null} 
                        sx={{
                            '&.MuiFormControl-root': {
                                backgroundColor: variables.offWhite,
                                borderRadius: '.6875rem'
                            },
                            '.MuiInputBase-input': {
                                color: variables.blue,
                                fontWeight: 'bold'
                            },
                            '.MuiOutlinedInput-notchedOutline': {
                                borderRadius: '.6875rem'
                            }
                        }}
                        onChange={(value : Dayjs | null) => {console.log(value);formik.setFieldValue(field.id, value)}} />
                </LocalizationProvider>
            case '903df9b0-a78c-11de-9fc1-db7a56d89593': //Single Choice
                if (field.settings.displayHorizontally === "True") {
                    return (
                        <InlineList items={field.preValues?.map((preValue, index) => 
                            <div className={styles.customRadio}>
                                <input id={field.id + '-' + index} type="radio" name={field.id} checked={preValue.value === formik.values[field.id]} value={preValue.value} onChange={formik.handleChange} />
                                <label htmlFor={field.id + '-' + index}>{preValue.caption}</label>
                            </div>
                        ) || []} />
                    )
                }
                else {
                    return (
                        <ul className="no-bullet">
                            {field.preValues?.map((preValue, index) =>
                                <li className={styles.customRadio} key={'radio-' + index}>
                                    <input id={field.id + '-' + index} type="radio" name={field.id} checked={preValue.value === formik.values[field.id]} value={preValue.value} onChange={formik.handleChange} />
                                    <label htmlFor={field.id + '-' + index}>{preValue.caption}</label>
                                </li>
                            )}
                        </ul>
                    )
                }
            case '663aa19b-423d-4f38-a1d6-c840c926ef86': //reCAPTCHA v3
                return <Recaptcha siteKey={publicRuntimeConfig.recaptchaKey} id={field.id} scoreThreshold={parseFloat(field.settings.scoreThreshold || '.5')} onChange={(token : string) => formik.setFieldValue(field.id, token)} />
            case 'bd587dba-8d9b-46dd-aa89-2c714684f0cf': //Dependent Dropdown
                const options : PrevalueSet[] = JSON.parse(field.settings.options as string);
                return <>
                    <DependentDropdown name={field.id} required={field.required} value={formik.values[field.id]} onChange={formik.handleChange} inputvalue={formik.values[field.settings.inputField as string]} options={options} placeholder={parseMagicStrings(field.settings.promptForSelection || '', router, page, dictionaries, externalData, referer)} />
                </>
            case '84a17cf8-b711-46a6-9840-0e4a072ad000': //File Upload
                return (
                    <FileUpload required={field.required} multiple={field.fileUploadOptions.allowMultipleFileUploads} allowedExtensions={field.fileUploadOptions.allowedUploadExtensions} onChange={(value : FileUploadData[] | null) => {formik.setFieldValue(field.id, value)}}/>
                )
            case 'fb37bc60-d41e-11de-aeae-37c155d89593': //Password
                return <input id={field.id} className={styles.textField} name={field.id} type="password" placeholder={placeholder} value={formik.values[field.id]} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            case 'a72c9df9-3847-47cf-afb8-b86773fd12cd':  //Data Consent
                return <div className={styles.customCheckbox}>
                    <input id={field.id} type="checkbox" name={field.id} checked={formik.values[field.id]} value={formik.values[field.id]} onChange={formik.handleChange} />
                    <label htmlFor={field.id}>{field.settings.acceptCopy}</label>
                </div>
            case 'e3fbf6c4-f46c-495e-aff8-4b3c227b4a98':  //Headline and description
                return <>
                    {field.settings.caption && field.settings.captionTag &&
                        createElement(field.settings.captionTag, {}, parseMagicStrings(field.settings.caption, router, page, dictionaries, externalData, referer))
                    }
                    {field.settings.bodyText &&
                        <p>{parseMagicStrings(field.settings.bodyText, router, page, dictionaries, externalData, referer)}</p>
                    }
                </>
            case '1f8d45f8-76e6-4550-a0f5-9637b8454619':  //Rich text
                const text = parseMagicStrings(field.settings.html || '', router, page, dictionaries, externalData, referer)
                return <Rte text={text} />
            case 'da206cae-1c52-434e-b21a-4a7c198af877':  //Hidden
                return <input name={field.id} type="hidden" value={formik.values[field.id]} />
        }
    }

    return (
        <>
            <form className={styles.umbracoForm + (isDark ? ' ' + styles.darkBackground : '') + ' ' + styles[form.cssClass] + (theme ? ' ' + styles['theme' + theme] : '')} onSubmit={formik.handleSubmit} noValidate ref={formElement}>
                {form.pages.map((formPage, index) => (
                    <div key={"page-" + index} className={styles.page}>
                        {formPage.fieldsets.map(fieldset => {
                            var groupCondition = fieldset.condition?.rules && fieldset.condition.rules.length ? getOperations(fieldset.condition) : "";
                            if (groupCondition) {
                                var dependencies = getDependencies(fieldset.condition);
                                if (!((new Function(...dependencies.map(id => "field_" + id.replaceAll('-', '')), 'return ' + groupCondition))(...dependencies.map(id => formik.values[id])))) {
                                    return null;
                                }
                            }
                            return (
                                <div key={"fieldset-" + fieldset.id} className={styles.fieldset}>
                                    {!!fieldset.caption &&
                                        <h4>{fieldset.caption}</h4>
                                    }
                                    <div className="grid-x grid-margin-x">
                                        {fieldset.columns.map((container, index) => (
                                            <div key={"container-" + fieldset.id + '-' + index} className={styles.container + ' cell medium-' + container.width}>
                                                {container.fields.map(field => {
                                                    if (!buildConditions(field, groupCondition)(...(conditionFields[field.id] as string[]).map(id => formik.values[id]))) {
                                                        return null;
                                                    }
                                                    return (
                                                        <div key={"field-" + field.id} className={styles.field}>
                                                            {(field.settings.showLabel === "True" || field.type.id === 'f8b4c3b8-af28-11de-9dd8-ef5956d89593' || field.type.id === 'e6f06817-b4f6-455c-825b-cc45a224e67e') &&
                                                                <label className={styles.fieldLabel + (field.helpText ? ' ' + styles.noMargin: '')} htmlFor={field.id}>{field.caption} {field.required && <span className={styles.indicator}>{form.indicator}</span>}</label>
                                                            }
                                                            <div>
                                                                {!!field.helpText && field.type.id !== 'd5c0c390-ae9a-11de-a69e-666455d89593' &&
                                                                    <p>{field.helpText}</p>
                                                                }
                                                                {renderField(field)}
                                                                {formik.touched[field.id] && !!formik.errors[field.id] &&
                                                                    <p className={styles.error}>{formik.errors[field.id] as string}</p>
                                                                }
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
                <div className={styles.submitContainer}>
                    <SubmitButton loading={submitting}>{form.submitLabel}</SubmitButton>
                </div>
            </form>
            {alert &&
                <AlertDialog message={alert} />
            }
        </>
    )
}