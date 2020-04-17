import axios from 'axios';
import { PhotosProfileType, ProfileType, UserType } from '../types/types';
export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10,
}
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'abed2ab8-bf99-446c-a8e5-087db1f9035f',
    },
});
type GetUsersType = {
    items: Array<UserType>;
    totalCount: number;
};
export const usersAPI = {
    getUsers: async (pageNumber = 1, pageSize = 10): Promise<GetUsersType | undefined> => {
        try {
            const res = await instance.get(`users?page=${pageNumber}&count=${pageSize}`);
            return res.data;
        } catch (e) {
            console.log(e);
        }
    },

    subscribe: async (userId: number): Promise<UpdateStatusType | undefined> => {
        try {
            const subscribeStatus = await instance.post(`follow/${userId}`);
            return subscribeStatus.data.resultCode;
        } catch (e) {
            console.log(e);
        }
    },
    unSubscribe: async (userId: number): Promise<UpdateStatusType | undefined> => {
        try {
            const subscribeStatus = await instance.delete(`follow/${userId}`);
            return subscribeStatus.data.resultCode;
        } catch (e) {
            console.log(e);
        }
    },
};
type UpdateStatusType = {
    resultCode: number;
    messages: string[];
    data: object;
};
export const profileAPI = {
    getUserProfile: async (userId = 2): Promise<ProfileType | undefined> => {
        try {
            const profile = await instance.get(`profile/${userId}`);
            return profile.data;
        } catch (e) {
            console.log(e);
        }
    },
    getStatus: async (userId = 2): Promise<string | undefined> => {
        try {
            const userStatus = await instance.get(`profile/status/${userId}`);
            return userStatus.data;
        } catch (e) {
            console.log(e);
        }
    },
    updateStatus: async (newStatus: string): Promise<UpdateStatusType | undefined> => {
        try {
            return await instance.put(`profile/status`, {
                status: newStatus,
            });
        } catch (e) {
            console.log(e);
        }
    },
    savePhoto: async (photoFile: File): Promise<PhotosProfileType | undefined> => {
        try {
            const formData = new FormData();
            formData.append('image', photoFile);
            return await instance.put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (e) {
            console.log(e);
        }
    },
    saveProfileData: async (profileData: ProfileType): Promise<UpdateStatusType | undefined> => {
        try {
            return await instance.put(`profile`, {
                ...profileData,
            });
        } catch (e) {
            console.log(e);
        }
    },
};
type MeResponseDataType = {
    id: number;
    email: string;
    login: string;
};
type MeResponseType = {
    data: MeResponseDataType;
    resultCode: ResultCodesEnum;
    messages: Array<string>;
};
type LoginResponseType = {
    data: { userId: number };
    resultCode: ResultCodesEnum | ResultCodeForCaptcha;
    messages: Array<string>;
};
type GetCaptchaUrlType = {
    url: string;
};
export const authAPI = {
    getAuthMe: async (): Promise<MeResponseType | undefined> => {
        try {
            const response = await instance.get<MeResponseType>(`auth/me`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
    login: async (
        email: string,
        password: string,
        rememberMe = false,
        captcha: null | string = null,
    ): Promise<LoginResponseType | undefined> => {
        try {
            const response = await instance.post<LoginResponseType>(`/auth/login`, {
                email,
                password,
                rememberMe,
                captcha,
            });
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
    logOut: async (): Promise<number | undefined> => {
        try {
            const response = await instance.delete<{ resultCode: number }>(`/auth/login`);
            return response.data.resultCode;
        } catch (e) {
            console.log(e);
        }
    },
};
export const securityAPI = {
    getCaptcha: async (): Promise<GetCaptchaUrlType | undefined> => {
        try {
            return await instance.get(`security/get-captcha-url`);
        } catch (e) {
            console.log(e);
        }
    },
};
