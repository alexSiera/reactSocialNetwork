export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ContactsProfileType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosProfileType = {
    large: null | string
    small: null | string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsProfileType
    photos: PhotosProfileType
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosProfileType
}