import React from 'react';
import User from './components/User';
import Follower from './components/Follower';

class App extends React.Component {
    
      state={
        currentUser: 'clairelist',
        user: {
          avatar_url: 'https://avatars.githubusercontent.com/u/89791952?v=4',
          html_url: 'https://github.com/clairelist',
          name: 'Claire List',
          login: 'clairelist',
          public_repos: 42,
          followers: 3

        },
        followers: [
          {
          login: 'jimjamesjimathy',
          avatar_url: 'https://avatars.githubusercontent.com/u/85250373?v=4',
          html_url: 'https://github.com/jimjamesjimathy'
          },
          {
            login: 'jimjamesjimathy',
            avatar_url: 'https://avatars.githubusercontent.com/u/85250373?v=4',
            html_url: 'https://github.com/jimjamesjimathy'
            },
            {
              login: 'jimjamesjimathy',
              avatar_url: 'https://avatars.githubusercontent.com/u/85250373?v=4',
              html_url: 'https://github.com/jimjamesjimathy'
              }
        ]
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

      <User user={this.state.user}/>
      <Follower followers={this.state.followers}/>

    </div>
    );
  }
}

export default App;
