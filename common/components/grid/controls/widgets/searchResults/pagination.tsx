import styles from './pagination.module.scss';

export type PaginationModel = {
    pages: number,
    page: number,
    onChange: (page: number) => void;
}

export default function Pagination({pages, page, onChange}: PaginationModel) {
    const pagination : number[] = [];
    for (var i=1; i<=pages; i++) {
        pagination.push(i);
    }
    if (pages < 2) {
        return <></>
    }
    return (
        <div className={styles.pagination}>
            {page > 1 &&
                <a onClick={() => onChange(page - 1)}>Previous</a>
            }
            <select onChange={(e) => onChange(parseInt(e.target.value))}>
                {pagination.map(i => {
                    return <option value={i} selected={i === page}>{i}</option>
                })}
            </select>
            {page < pages &&
                <a onClick={() => onChange(page + 1)}>Next</a>
            }
        </div>
    )
}