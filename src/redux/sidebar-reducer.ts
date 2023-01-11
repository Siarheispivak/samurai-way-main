type FriendsType = {
    id: number
    name: string
    src: string
}
export type SideBarType = {
    friends: Array<FriendsType>
}
export type SidebarActionsType = {}

let initialState = {
    friends: [
        {id: 1, name: 'Dimych', src: 'http://surl.li/dxldh'},
        {id: 2, name: 'Andrey', src: 'http://surl.li/dxldl'},
        {id: 3, name: 'Sveta', src: 'http://surl.li/dxldm'},
    ]

}

const sidebarReducer = (state:SideBarType = initialState,action:SidebarActionsType) => {


    return state
};

export default sidebarReducer;