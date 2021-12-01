import React from 'react';

class Follower extends React.Component{
    render() {

        const {followers} = this.props;

        return(
            <div className='followers-array'>FOLLOWERS FOLLOWERS FOLLOWERS
            <img src='' alt='follower avi'></img>
            <p>$followerUsername</p>
            <p>$followerHTML_url</p>
            </div>
        )
    }
}

export default Follower;