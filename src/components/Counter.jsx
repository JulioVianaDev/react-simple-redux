import classes from './Counter.module.css';
import { useSelector ,useDispatch} from 'react-redux';
import { counterActions } from '../store';
// import { INCREMENT } from '../store';
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state=> state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter())
  };
  const IncrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const DecrementHandler =() => {
    dispatch(counterActions.decrement())
  };
  const IncreaseHandler = () => {
    dispatch(counterActions.increase(10) )// {type: UNIQUE_INDENTIFIER, payload: 10}
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && 
        <div className={classes.value}>{counter}</div>
      }
      <div>
        <button onClick={IncrementHandler}> Increment</button>
        <button onClick={IncreaseHandler}> Increase by 5</button>
        <button onClick={DecrementHandler}> Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
