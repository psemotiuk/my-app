import './App.css';
import Profile from "./components/Profile";
import {addUser} from "./redux/state";


function App(props) {
  return (
    <div className='App'>
      <h1>my app</h1>
      <Profile state={props.state} addUser={props.addUser} updateNewPostText={props.updateNewPostText} />
    </div>
  );
}

export default App;
