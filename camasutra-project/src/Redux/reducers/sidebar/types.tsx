
// Describing the shape of the app's slice of state

export interface SidebarState {
    sidebarData: Array<sidebarData>
}
interface sidebarData {
    id: number,
    img: string,
    name: string
}

export type SidebarActionTypes = null;
