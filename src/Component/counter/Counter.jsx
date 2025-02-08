import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../counter/counterSlice"; 

// const Counter = () => {
//   const count = useSelector((state) => state.counter);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => dispatch({type: 'counter/increment'})}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//       <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
//     </div>
//   );
// };



const Counter = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUser());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <div>
      <h1>User Details</h1>
      {user && (
        <div>
          <h2>{user.title}</h2>
          <p>{user.body}</p>
          <p>{user.userId}</p>
        </div>
      )}
    </div>

    







    </>
  );
};




export default Counter;
