import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getGreatting } from '../redux/greatting/greattingSlice';

function Greeting() {
  const greatting = useSelector((store) => store.greatting);
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getGreatting());
  }, [dispatch]);

  return <h2>This is a random greeting: {greatting.message.greatting}</h2>;
}

export default Greeting;
