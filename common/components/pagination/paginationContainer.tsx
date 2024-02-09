import AlertDialog from "@components/dialogs/alertDialog"
import BasicDialog from "@components/dialogs/basicDialog"
import PaginatedContent from "@lib/umbraco/types/paginatedContent.type"
import { UmbracoNode } from "@lib/umbraco/types/umbracoNode.type"
import { GetBreakpointValue, ResponsiveValue } from "@lib/umbraco/util/helpers"
import { NextApiResponse } from "next/dist/shared/lib/utils"
import { ReactNode, useState } from "react"
import { SWRResponse } from "swr"

export type PaginationContainerModel<T> = {
    items: T[],
    page: number,
    pageSize: number,
    output: (item : T) => ReactNode[],
    mode: 'add' | 'replace',
    rows: ResponsiveValue<number>,
    initPage?: number
};

export default function PaginationContainer<T>(model: PaginationContainerModel<T>) {
    const size = GetBreakpointValue(model.rows);
    const [loading, setLoading] = useState(!!model.items);
    const [items, setItems] = useState<T[]>([]);
    const [page, setPage] = useState(model.page);
    const start = Math.max((model.page - 1) * model.pageSize, 0);

    const updateItems = (newItems: T[]) => {
        if (model.mode == 'add') {
            setItems(items.concat(newItems));
        }
        else {
            setItems(newItems);
        }
    }

    const getPage = (page: number) => {
        var result : T[] = [];
        if (start < model.items.length) {
            result = model.items.slice(start, Math.min(model.items.length - 1, start + model.pageSize))
        }
        updateItems(result);
        setPage(page);
    }
    getPage(model.initPage || 1);
    return (
        <>
            <div className={"grid-x grid-margin-x small-up-" + model.rows.small + " medium-up-" + model.rows.medium + " large-up-" + model.rows.large}>
                {items.map(item => 
                    <div className="cell">
                        {model.output(item)}
                    </div>
                )}
            </div>
        </>
    )
}