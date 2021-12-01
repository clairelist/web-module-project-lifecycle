import React from 'react';

class User extends React.Component{
    render(){

        const {user} = this.props;

        return(
            <div className='user-infos'>
        <img src={user.avatar_url} alt='user $GETUSERAVI'></img>
        
        <span className='userinfo-span'>

      <a target='_blank' href={user.html_url}>
        <h2>Claire List</h2> 
      </a>

        <p>USERNAHME -- {user.login}</p>
        <p>TOTAL REPOS: {user.public_repos}</p>
        <p>TOTAL FOLLOWERS: {user.followers}</p>

        </span>
      </div>
        )
    }
}

export default User;