import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form } from '../components/auth/Form';

function RegisterPage() {
  return (
    <div className='authPage'>
      <h2>Register</h2>
      <Form title='register' />
      <p>
        Have an account? <NavLink to='/login'>Login</NavLink>
      </p>
    </div>
  );
}

export default RegisterPage;
