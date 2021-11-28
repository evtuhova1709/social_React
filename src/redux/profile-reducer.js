const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_CONTENT = 'SET_USERS_CONTENT';

let initialState = {
    posts: [
        { id: 1, message: 'Hello!How are you?', likesCount: 12 },
        { id: 2, message: 'My name is Liza! Nice to meet you;)', likesCount: 52 }
    ],
    newPostText: 'Напишите новый пост',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        };
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USERS_CONTENT: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUsersContent = (profile) => ({ type: SET_USERS_CONTENT, profile })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default profileReducer;