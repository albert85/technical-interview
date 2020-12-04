
import React from 'react'
import { useHistory } from 'react-router-dom';

const withHOC = (Component) => () => {
  const history = useHistory();

  const token = localStorage.getItem('token');

  if(!token){
    return history.push('/');
  }
  return <Component />
}

export default withHOC;
