import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component{
    render() {

        const {followers} = this.props;

        return( 
            <div>
            {
            this.props.followers.map(followers => {
                return( <Follower followers={followers} />)
               
            })}
        
            </div>
        )
    }
}

export default FollowerList;