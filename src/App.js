import { Fragment, useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./redux/apiSlice";

function App() {
  const users = useSelector(state => state.users.users)
  const counterRef = useRef(1)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchUser(counterRef.current))
  },[])

  const addUsers = () => {
    dispatch(fetchUser(++counterRef.current))
  }

  console.log(users)
  return (
    <Fragment>
      <Header/>
      <ProductList/>
      <button onClick={addUsers}>Add More User</button>
      <pre style={{color:'whitesmoke'}}>
        {JSON.stringify(users, undefined, 4)}
      </pre>
    </Fragment>
  );
}

export default App;
