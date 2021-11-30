import React from 'react';

class App extends React.Component {
  render() {
    return(
    <div>
      <h1>GIT HUB INFORMATIC</h1>
      <div className='github-handle'>$GITHUB-HANDLE 
      <span>
        <form>
          <input placeholder='S-E-A-R-C-H'/>
          <button>LOOKUP a USER.</button>
        </form>
      </span>
      </div>

      <div className='user-infos'>
        <img src='' alt='user $GETUSERAVI'></img>
        <span>-     Full Nahme</span>
        <p>username $FROM_USERNAME</p>
        <p>TOTAL REPOS: $NUMREPOS</p>
        <p>TOTAL FOLLOWERS: $NUMFOLLOWERS</p>
      </div>

      <div className='followers-array'>FOLLOWERS FOLLOWERS FOLLOWERS</div>

    </div>
    );
  }
}

export default App;
