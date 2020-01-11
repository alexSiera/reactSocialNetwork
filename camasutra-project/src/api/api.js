import * as axios from 'axios';

export const getUsers = async (pageNumber = 1, pageSize = 10) => {
    try {
        const baseUrl = 'https://social-network.samuraijs.com/api/1.0/users';
        const res = await axios.get(`${baseUrl}?page=${pageNumber}&count=${pageSize}`, {
            withCredentials: true
        });
        return res.data;
    } catch (e) {
        console.log(e)
    }
}

export const subscribe = async (userId) => {
    try {
        const baseUrl = 'https://social-network.samuraijs.com/api/1.0/follow/';
        const subscribeStatus = await axios.post(`${baseUrl}${userId}`, {}, {
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
        const baseUrl = 'https://social-network.samuraijs.com/api/1.0/follow/';
        const subscribeStatus = await axios.delete(`${baseUrl}${userId}`, {
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
    try {
        const baseUrl = 'https://social-network.samuraijs.com/api/1.0/profile';
        const profile = await axios.get(`${baseUrl}/${userId}`)
        return profile.data
    }
    catch (e) {
        console.log(e)
    }
}

export const getAuthMe = async () => {
    try {
        const baseUrl = 'https://social-network.samuraijs.com/api/1.0/auth/me';
        const authData = await axios.get(`${baseUrl}`, {
            withCredentials: true
        })
        if(authData.data.resultCode === 0) return authData.data.data;
        return {};
    }
    catch (e) {
        console.log(e)
    }
}
// const subscribe = async (userId) => {
//     try {
//         //this.props.toggleFetching(true);
//         const baseUrl = 'https://social-network.samuraijs.com/api/1.0/follow/';
//         const subscribeStatus = await axios.post(`${baseUrl}${userId}`,{},{
//             withCredentials: true,
//             headers: {
//                 "API-KEY" : "abed2ab8-bf99-446c-a8e5-087db1f9035f"
//             }
//         });
//         //if (subscribeStatus.data.resultCode !== 1)  follow(userId)
//         //this.props.toggleFetching(false);
//         //this.props.setUsers(users.data.items);
//         //this.props.setTotalUsersCount(users.data.totalCount);
//     }
//     catch (e) {
//         console.log(e)
//     }
// }

