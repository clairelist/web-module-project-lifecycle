import React from 'react';

class User extends React.Component{
    render(){
        return(
            <div className='user-infos'>
        <img src='https://avatars.githubusercontent.com/u/89791952?v=4' alt='user $GETUSERAVI'></img>
        
        <span className='userinfo-span'>

      <a target='_blank' href='https://github.com/clairelist'>
        <h2>Claire List</h2> 
      </a>

        <p>username $FROM_USERNAME</p>
        <p>TOTAL REPOS: $NUMREPOS</p>
        <p>TOTAL FOLLOWERS: $NUMFOLLOWERS</p>

        </span>
      </div>
        )
    }
}

export default User;