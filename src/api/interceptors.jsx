export const requestInterceptor = config => {
    const token = localStorage.getItem("_auth");
    if (token) {
        config.headers.authorization = `${token}`
    }
    return config;
}

export const responseInterceptor = response => {
    return response
}