import * as axios from 'axios';
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "abed2ab8-bf99-446c-a8e5-087db1f9035f"
    }
});
export const usersAPI = {
    getUsers: async (pageNumber = 1, pageSize = 10) => {
        try {
            const res = await instance.get(`users?page=${pageNumber}&count=${pageSize}`);
            return res.data;
        } catch (e) {
            console.log(e)
        }
    },

    subscribe: async (userId) => {
        try {
            const subscribeStatus = await instance.post(`follow/${userId}`)
            return subscribeStatus.data.resultCode;
        }
        catch (e) {
            console.log(e)
        }
    },
    unSubscribe: async (userId) => {
        try {
            const subscribeStatus = await instance.delete(`follow/${userId}`);
            return subscribeStatus.data.resultCode;
        }
        catch (e) {
            console.log(e)
        }
    },
    getUserProfile: async (userId = 2) => {
        try {
            console.warn('Obsolete method. Please use profileAPI object')
            return profileAPI.getUserProfile(userId);
        }
        catch (e) {
            console.log(e)
        }
    },
};
export const profileAPI = {
    getUserProfile: async (userId = 2) => {
        try {
            const profile = await instance.get(`profile/${userId}`);
            return profile.data
        }
        catch (e) {
            console.log(e)
        }
    },
    getStatus: async (userId = 2) => {
        try {
            const userStatus = await instance.get(`profile/status/${userId}`);
            return userStatus.data
        }
        catch (e) {
            console.log(e)
        }
    },
    updateStatus: async (newStatus) => {
        try {
            const userStatus = await instance.put(`profile/status`, {
                status: newStatus
            });
            return userStatus;
        }
        catch (e) {
            console.log(e)
        }
    }
};
export const authAPI = {
    getAuthMe: async () => {
        try {
            const authData = await instance.get(`auth/me`);
            if(authData.data.resultCode === 0) return authData.data.data;
            return {};
        }
        catch (e) {
            console.log(e)
        }
    },
    login: async (email, password, rememberMe = false) => {
        try {
            return await instance.post(`/auth/login`, {
                email, password, rememberMe
            });
        }
        catch (e) {
            console.log(e)
        }
    },
    logOut: async () => {
        try {
            const response = await instance.delete(`/auth/login`);
            return response.data.resultCode
        }
        catch (e) {
            console.log(e);
        }
    }
};


