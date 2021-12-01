import React from 'react';

class Follower extends React.Component{
    render(){
        const {followers} = this.props;
        return(
            <div className='followers-array'>FOLLOWERS FOLLOWERS FOLLOWERS
            <img src={followers.avatar_url} alt='follower avi'></img>
            <p>{followers.login}</p>
            <p>{followers.html_url}</p>
            </div>
        )
    }
}

export default Follower;