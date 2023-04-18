export const login = (data) => {
    return {
        url: `http://localhost:8090/api/login`,
        method: 'POST',
        data,
    }
}
/*export const logout = () => {
    return {
        url: `/api/auth/logout`,
        method: 'POST',
    }
}

export const register = (data) => {
    return {
        url: `/api/auth/register`,
        method: 'POST',
        data,
    }
}*/