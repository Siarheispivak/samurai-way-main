import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'acf8157e-1772-4709-a579-ee81526643cd'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    }
}

export const profileAPI = {
    getProfile(userId:string){
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    getStatus(userId:number){
        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data
        })
    },
    updateStatus(status:string){
        return instance.put(`profile/status`, {status:status})
    }
}


export const followUnfollowAPI = {
    unFollowUser(userId: number) {

        return instance.delete(`follow/${userId}`).then(response => {
            return response.data;

        });
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data;

        })
    },


}

export const authAPI = {
    me(){
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    }
}




