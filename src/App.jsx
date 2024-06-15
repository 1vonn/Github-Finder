import  { useState } from 'react';
import Search from "./Components/Search";
import UserProfile from './Components/UserProfile';
import Repos from "./Components/Repos";
import Followers from './Components/Followers';
import Following from './Components/Following';
import './app.css';

function App() {
  const [username, setUsername] = useState('');

  return (
    <div className="App">
      <Search setUsername={setUsername} />
      {username && (
        <> 
        <div className='app-items'>
          <div className='app-pprofile'>
          <UserProfile username={username} />
          </div>
          <div className='app-username'>
        <Repos username={username} />
        <Followers username={username}/>
        <Following username={username}/>
        </div>
        </div>
      
        </>
      )}
    </div>
  );
}

export default App;
