import { useRef } from 'react';

import { setUser } from '../../store/slice/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const Form = ({ title }) => {
  const emailRef = useRef();
  const passRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const auth = getAuth();
    const action =
      title === 'login'
        ? signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passRef.current.value
          )
        : createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passRef.current.value
          );
    action
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/');
      })
      .catch(() => alert('Invalid user!'));
  };

  return (
    <form onSubmit={handleSubmit} className='auth-form'>
      <input type='email' ref={emailRef} placeholder='email' />
      <input type='password' ref={passRef} placeholder='password' />
      <button type='submit'>{title}</button>
    </form>
  );
};

export { Form };
