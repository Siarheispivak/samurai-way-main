import React from 'react';
import {StorePropsType} from "./redux/store";
import {RootReducerType} from "./redux/redux-store";

const StoreContext = React.createContext({} as StorePropsType)

export type ProviderType = {
    store: StorePropsType
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    console.log(props.store)
    return(
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContext;