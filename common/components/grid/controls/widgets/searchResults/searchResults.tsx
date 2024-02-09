import { WidgetModel } from '@lib/umbraco/types/widgetModel.type';
import { useRouter } from 'next/router';
import { useSearch } from "@lib/umbraco/util/publicDataApi";
import WidgetWrapper from '../widgetWrapper';
import Pagination from './pagination';
import styles from './searchResults.module.scss';
import Link from 'next/link';
import Rte from '../../rte';
import { useCommonDataContext } from '@components/layout/layout';
import LoadingIndicator from '@components/loadingIndicator/loadingIndicator';
export type SearchResultsModel = {
    resultsMessage: string,
    pageSize: number,
    readMoreText?: string,
    noResultsMessage: string
}
export default function SearchResults(model: WidgetModel) {
    const {resultsMessage, pageSize, readMoreText, noResultsMessage} = model.content as SearchResultsModel;
    const commonData = useCommonDataContext();
    const router = useRouter();
    const page = parseInt((router.query.page || '1') as string);
    const {data, error, mutate } = useSearch(router.query.q as string, page, pageSize, commonData.homeId, commonData.culture);
    const setPage = (p : number) => {
        router.push({
            pathname: router.pathname,
            query: {...router.query, page: p}
        })
    };
    return <WidgetWrapper model={model} styles={styles}>
        {data && data.count === 0 && !!noResultsMessage &&
            <Rte text={noResultsMessage.replaceAll('[searchTerm]', router.query.q as string || '')} />
        }
        {data && data.count > 0 &&
            <>
                {!data && !error &&
                    <LoadingIndicator />
                }
                <h2 className="purpleText">{resultsMessage.replaceAll('[count]', data?.count + '').replaceAll('[searchTerm]', router.query.q as string || '')}</h2>
                <ul className="no-bullet">
                    {data?.items.map(item => (
                        <li className={styles.item}>
                            <Link className={styles.link} href={item.url}>
                                <h3 className="small-margin-bottom-1">{item.name}</h3>
                                {!!item.summary &&
                                    <p>{item.summary}</p>
                                }
                                {!!readMoreText &&
                                    <p className={styles.learnMore}>{readMoreText}</p>
                                }
                            </Link>
                        </li>
                    ))}
                </ul>
                <Pagination page={page} pages={data?.totalPages || 0} onChange={setPage} />
            </>
        }
    </WidgetWrapper>
}