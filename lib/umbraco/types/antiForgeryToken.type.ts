type AntiForgeryToken = {
    requestToken?: string,
    cookieToken?: string,
    headerName?: string,
    formFieldName?: string
}

export default AntiForgeryToken;