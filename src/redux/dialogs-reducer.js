const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                message: [...state.message, { id: 4, text: body }]
            };
        default:
            return state;
    }
}
export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyActionCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}
export default dialogsReducer;