const initialState = [
    {
        id: 11351,
        img:
            'https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568252-stock-illustration-female-face-avatar-round-flat.jpg',
        name: 'Andrew',
    },
    {
        id: 1233,
        img:
            'https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568102-stock-illustration-female-face-avatar-round-flat.jpg',
        name: 'Alisa',
    },
    {
        id: 31312,
        img:
            'https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568116-stock-illustration-female-face-avatar-round-flat.jpg',
        name: 'Milka',
    },
] as Array<SidebarDataType>;
type SidebarDataType = {
    id: number | null;
    img: string;
    name: string;
};

export type InitialStateType = typeof initialState;
const sidebarReducer = (state = initialState, action: any): InitialStateType => {
    return state;
};
export default sidebarReducer;
