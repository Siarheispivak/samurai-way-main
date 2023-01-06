import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {AllActionsType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

type MyPostsContainerType = {
    dispatch: (action: AllActionsType) => void
}

const MyPostsContainer = (props: MyPostsContainerType) => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                const state = store.getState()
                let addPost = () => {
                    props.dispatch(addPostAC());
                }
                let onPostChange = (text: string) => {
                    props.dispatch(updateNewPostTextAC(text))
                }
                return (
                    <MyPosts updateNewPostText={onPostChange}
                             addPost={addPost}
                             posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;
