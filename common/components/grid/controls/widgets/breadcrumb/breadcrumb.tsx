import InlineList from "@components/inline-list/inline-list";
import FlexibleLink from "@components/links/flexibleLink";
import IconLink from "@components/links/iconLink";
import { FlexibleLinkModel } from "@lib/umbraco/types/flexibleLinkModel.type";
import { IconLinkModel } from "@lib/umbraco/types/iconLinkModel.type";
import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import WidgetWrapper from "../widgetWrapper";
import styles from './breadcrumb.module.scss';
import React from "react";

export type BreadcrumbModel = {
    ancestors: FlexibleLinkModel[],
    currentName: string
}

export default function Breadcrumb(model: WidgetModel) {
    var data = model.content as BreadcrumbModel;
    return (
        <WidgetWrapper className="hide-for-small-only" model={model} styles={styles}>
            {data.ancestors && data.ancestors.length > 0 &&
                data.ancestors.map((link, index) => (
                    <React.Fragment key={link.label}>
                        {index > 0 &&
                            <span className={styles.divider}>&gt;</span>
                        }
                        <FlexibleLink link={link} />
                    </React.Fragment>
                ))
            }
            <span className={styles.divider}>&gt;</span>
            <span className={styles.current}>{data.currentName}</span>
        </WidgetWrapper>
    )
}