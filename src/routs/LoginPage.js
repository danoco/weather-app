import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form } from '../components/auth/Form';

function LoginPage() {
  return (
    <div className='authPage'>
      <h2>Login</h2>
      <Form title='login' />
      <p>
        or <NavLink to='/register'>Register</NavLink>
      </p>
    </div>
  );
}

export default LoginPage;
