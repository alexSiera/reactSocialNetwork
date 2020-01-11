import * as axios from 'axios';
const baseUrl  = 'https://social-network.samuraijs.com/api/1.0'
export const getUsers = async (pageNumber = 1, pageSize = 10) => {
    try {
        const res = await axios.get(`${baseUrl}/users?page=${pageNumber}&count=${pageSize}`, {
            withCredentials: true
        });
        return res.data;
    } catch (e) {
        console.log(e)
    }
}

export const subscribe = async (userId) => {
    try {
        const subscribeStatus = await axios.post(`${baseUrl}/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY" : "abed2ab8-bf99-446c-a8e5-087db1f9035f"
            }
        })
        return subscribeStatus.data.resultCode;
    }
    catch (e) {
        console.log(e)
    }
}
export const unSubscribe = async (userId) => {
    try {
        const subscribeStatus = await axios.delete(`${baseUrl}/follow/${userId}`, {
            withCredentials: true,
            headers: {
                "API-KEY" : "abed2ab8-bf99-446c-a8e5-087db1f9035f"
            }
        });
        return subscribeStatus.data.resultCode;
    }
    catch (e) {
        console.log(e)
    }
}


export const getUserProfile = async (userId = 2) => {
    debugger
    try {
        const profile = await axios.get(`${baseUrl}/profile/${userId}`)
        return profile.data
    }
    catch (e) {
        console.log(e)
    }
}

export const getAuthMe = async () => {
    try {
        const authData = await axios.get(`${baseUrl}/auth/me`, {
            withCredentials: true
        })
        if(authData.data.resultCode === 0) return authData.data.data;
        return {};
    }
    catch (e) {
        console.log(e)
    }
}

