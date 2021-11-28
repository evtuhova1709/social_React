import * as axios from 'axios';
import React from 'react';
import Preloaders from '../common/Preloaders/Preloaders';
import Users from './Users';
import { getUsers } from '../../API/api';


class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

       /*  this.props.togleIsFetching(true);

        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.togleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        }); */
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.togleIsFetching(true);

        getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.togleIsFetching(false);
                this.props.setUsers( data.items);
            });
    }
    render() {
        return <>
            {this.props.isFetching ?
                <Preloaders /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                togleFollowingProgress={this.props.togleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>


    }
}

export default UsersAPIContainer;