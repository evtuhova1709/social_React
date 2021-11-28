import profileReducer from "./profile-reducer";
import dialogsReducer from './dialogs-reducer';
import friendsReducer from './friends-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello!How are you?', likesCount: 12 },
                { id: 2, message: 'My name is Liza! Nice to meet you;)', likesCount: 52 }
            ],
            newPostText: 'Напишите новый пост'

        },
        dialogsPage: {
            message: [
                { id: 1, text: 'Привет!Как дела?' },
                { id: 2, text: 'Может погуляем сегодня?' },
                { id: 3, text: 'Добрый вечер))' },
            ],
            dialogs: [
                { id: 1, name: 'Александр Войтов' },
                { id: 2, name: 'Дмитрий Крупеня' },
                { id: 3, name: 'Лидия Ахметова' },
                { id: 4, name: 'Всеволод Властный' }
            ],
            newMessageBody: ''

        },
        friends: [
            { id: 1, name: "Кристина", img: "https://klike.net/uploads/posts/2018-11/1543310674_2.jpg" },
            { id: 2, name: "Оля", img: "https://klike.net/uploads/posts/2019-06/1561009159_3.jpg" },
            { id: 3, name: "Аня", img: "https://intrigue.dating/wp-content/uploads/2020/09/32626-62-819x1024.jpg" }
        ],
    },
    _renderEntireTree() {
        console.log('State изменен');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.friends = friendsReducer(this._state.friendsPage, action);

        this._renderEntireTree(this._state);
    }
}











export default store;
window.store = store;