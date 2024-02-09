type PaginatedContent<T> = {
    count: number,
    totalPages: number,
    items: T[]
}
export default PaginatedContent