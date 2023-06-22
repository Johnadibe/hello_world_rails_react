import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from "../store/greetings/greeting";

const Greeting = () => {
    const greeting = useSelector((state) => state.greeting.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGreeting());
    }, [dispatch]);
    
    return (
        <>
      {greeting[0] !== undefined && <h1>{greeting[0].message}</h1>}
      <button type="button" onClick={() => dispatch(fetchGreeting())}>Greet</button>
    </>
    );
}

export default Greeting;
