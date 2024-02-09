import { CSSProperties } from 'react';
import { FlexibleLinkModel } from '../../../lib/umbraco/types/flexibleLinkModel.type';
import FlexibleLink from './flexibleLink';

export type CircleLinkOptions = {
    link: FlexibleLinkModel,
    stacked?: boolean,
    style?: CSSProperties
}

export default function CircleLink({ link, stacked, style }: CircleLinkOptions) {
    return (
        <FlexibleLink className={`circleLink${stacked ? ' stacked' : ''}`} style={style} link={link} />
    ) 
}