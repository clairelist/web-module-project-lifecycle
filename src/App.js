import React from 'react';
import User from './components/User';
import Follower from './components/Follower';

class App extends React.Component {
    
      state={
        currentUser: 'clairelist',
        user: {},
        followers: []
      }

  render() {
    return(
    <div>
      <h1>GIT HUB INFORMATIC</h1>
      <div className='github-search'> 
      <span>
        <form>
          <input placeholder='GitHobe Hnalde'/>
          <button>LOOKUP a USER.</button>
        </form>
      </span>
      </div>

      <User />
      <Follower />

    </div>
    );
  }
}

export default App;
