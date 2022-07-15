import './App.css';
import Landing from './components/Landing';
import { auth } from './fbaseapp'
import { useAuthState } from 'react-firebase-hooks/auth'
import Chat from "./components/Chat"

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      { user ? <Chat/> : <Landing/> }
    </>
  );
}

export default App;
