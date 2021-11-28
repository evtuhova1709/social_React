const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING';
const TOGLE_IS_FOLLOWIG_PROGRESS = 'TOGLE_IS_FOLLOWIG_PROGRESS';



let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }

        case TOGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGLE_IS_FOLLOWIG_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }



        default:
            return state;
    }
}

export const getUsersThunkCreator = (currentPage,pageSize) => {
    return (dispatch) => {
        dispatch(togleIsFetching(true));

        getUsers(currentPage, pageSize).then(data => {
            dispatch(togleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }

}




export const follow = (userId) => ({ type: 'FOLLOW', userId })
export const unfollow = (userId) => ({ type: 'UNFOLLOW', userId })
export const setUsers = (users) => ({ type: 'SET_USERS', users })
export const setCurrentPage = (currentPage) => ({ type: 'SET_CURRENT_PAGE', currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount })
export const togleIsFetching = (isFetching) => ({ type: 'TOGLE_IS_FETCHING', isFetching })
export const togleFollowingProgress = (isFetching, userId) => ({ type: 'TOGLE_IS_FOLLOWIG_PROGRESS', isFetching, userId })




export default usersReducer;