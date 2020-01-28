
// Describing the different ACTION NAMES available
export const ADD_NEWS = 'news/ADD_NEWS';
// Describing the shape of the app's slice of state

export interface NewsState {
    newsData: Array<newsData>
}
export interface newsData {
    id: number
    img: string,
    author: string,
    message: string
}
interface addNewsAC {
    type: typeof ADD_NEWS;
    payload: string;
}
export type NewsActionTypes = addNewsAC;
