import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Message from './Components/Message/Message';
import Profile from './Components/Profile/Profile';
import Users from './Components/Users/Users';
import News from './Components/News/News';
import Photo from './Components/Photo/Photo';
import Video from './Components/Video/Video';
import Music from './Components/Music/Music';
import FriendList from './Components/Friend/friendList'

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Menu />
        <div className='content'>
          <Route exact path="/" render={() => <Profile name="Vladimir Parfenov" status="Hello World!" postData={props.state.postData} postText={props.state.postText} addPost={props.store.addPost.bind(props.store)} onPostChange={props.store.onPostChange.bind(props.store)}/>} />
          <Route path="/profile" render={() => <Profile name="Vladimir Parfenov" status="Hello World!" postData={props.state.postData} postText={props.state.postText} addPost={props.store.addPost.bind(props.store)} onPostChange={props.store.onPostChange.bind(props.store)}/>} />
          <Route path="/message" render={() => <Message messageData={props.state.messageData} friendsData={props.state.friendsData} messageText={props.state.messageText} addMes={props.store.addMes.bind(props.store)} onMessageChange={props.store.onMessageChange.bind(props.store)}/>} />
          <Route path="/friend" render={()=> <FriendList friendsData={props.state.friendsData}/>} />
          <Route path="/users" render={() => <Users />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/photo" render={() => <Photo />} />
          <Route path="/video" component={Video} />
          <Route path="/music" render={() => <Music musicData={props.state.musicData} addMusic={props.store.addMusic}/>} />
        </div>
      </BrowserRouter>
      {/* https://learn-reactjs.ru/training-project/routing - про маршрутизацию
      https://reactrouter.com/web/api/BrowserRouter - документация по BrowserRouter( на английском, пусть потихоньку привыкают)
      https://reactrouter.com/web/api/Route - про Route 
      route exact 
      browser rout hash*/}

    </div>
  );
}

export default App;