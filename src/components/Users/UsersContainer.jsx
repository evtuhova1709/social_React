import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, togleIsFetching ,togleFollowingProgress ,getUsersThunkCreator} from '../../redux/users-reducer';
import UsersAPIContainer from './UsersAPIContainer.jsx';



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
/* let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        togleIsFetching: (isFetching) => {
            dispatch(togleIsFetchingAC(isFetching))
        },
    }

}
 */
export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, 
    setTotalUsersCount, togleIsFetching,
    togleFollowingProgress,getUsers : getUsersThunkCreator
})(UsersAPIContainer)