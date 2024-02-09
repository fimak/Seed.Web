import Link from './link';
import { CSSProperties, useState } from 'react';
import { FlexibleLinkModel } from '../../../lib/umbraco/types/flexibleLinkModel.type';
import isLocal from 'common/util/isLocal';
import UmbracoModal from '@components/dialogs/umbracoModal';

export type FlexibleLinkRenderModel = {
    link: FlexibleLinkModel,
    className?: string,
    style?: CSSProperties,
    children?: React.ReactNode
}

export default function FlexibleLink({ link, children, className, style }: FlexibleLinkRenderModel) {
    const [modalId, setModalId] = useState('');
    const replaceEmphasizedHelper = (labelData: React.ReactNode) => {
        if (typeof (labelData) === 'string') {
            const parts = labelData.split('**');
            return parts.map((part, index) =>
                index % 2 === 1 ? <span key={index} className="emphasize">{part}</span> : part)
        }
        return labelData;
    }
    const replaceEmphasized = (labelData: React.ReactNode) => {
        if (!labelData) {
            return '';
        }
        if (typeof (labelData) === 'string') {
            return replaceEmphasizedHelper(labelData);
        }
        else if (Array.isArray(labelData)) {
            return labelData.map(part =>
                replaceEmphasizedHelper(part)
            )
        }
        return labelData;
        
    }
    const label = replaceEmphasized(children || link.label);
    const isModalTrigger = !!link.attributes.modalid;
    var handleClick = !!link.attributes.onClick ? () => Function(link.attributes.onClick as string)() : undefined;
    if (isModalTrigger) {
        handleClick = () => {
            setModalId(link.attributes.modalid as string);
        };
    }
    var classResult = className;
    if (link.attributes.href && isLocal(link.attributes.href)) {
        link.attributes.href = link.attributes.href.replace(/^.*\/\/[^\/]+/, '');
    }
    var attributeCopy = {...link.attributes};
    if (link.attributes.class) {
        classResult += ' ' + link.attributes.class;
        delete attributeCopy.class;
    }
    if (link.attributes['noLink'] ===  'true') {
        return (
            <span className={classResult}>{label}</span>
        )
    }
    if (link.newTab || !link.attributes['href'] || !link.attributes['href'].startsWith('/')) {
        return (
            <>
                <a className={classResult} {...attributeCopy} style={style} onClick={handleClick} target="_blank">{label}</a>
                <UmbracoModal modalId={modalId} setter={setModalId} />
            </>
        )
    }
    else {
        if (handleClick) {
            return (
                <>
                    <a className={classResult} style={style} onClick={handleClick}>{label}</a>
                    <UmbracoModal modalId={modalId} setter={setModalId} />
                </>
            )
        }
        else {
            return (
                <Link href={link.attributes['href']} className={classResult} style={style}>{label}</Link>
            )
        }
    }
}