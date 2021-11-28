import React from 'react';
import Content from './Content';
import { setUsersContent } from '../../redux/profile-reducer';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ContentContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId=2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUsersContent(response.data);
            });
    }

    render() {
        return (
            <Content {...this.props} profile={this.props.profile} />
        );

    }


}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile

})
let WithUrlDataContainerComponent = withRouter(ContentContainer)
export default connect(mapStateToProps, { setUsersContent })(WithUrlDataContainerComponent);