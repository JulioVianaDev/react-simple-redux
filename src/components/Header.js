import classes from './Header.module.css';
import { AuthActions } from '../store';
import { useDispatch } from 'react-redux';
const Header = () => {
  const dispatch = useDispatch();
  const Logout = ()=>{
    dispatch(AuthActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={Logout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
