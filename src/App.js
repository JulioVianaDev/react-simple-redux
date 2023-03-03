import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import { useSelector } from 'react-redux';
function App() {

  const logado = useSelector(state=> state.auth.isAuthenticated);
  // console.log(logado)
  return (
    <>
      <Header/>
      {
        logado? <UserProfile/> :<Auth/>
      }
      
      <Counter />
    </>
  );
}

export default App;
