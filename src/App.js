import * as React from 'react';

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Root from './routs/Root';
import ErrorPage from './routs/ErrorPage';

import WeatherPage from './routs/WeatherPage';
import IndexPage from './routs/IndexPage';
import LoginPage from './routs/LoginPage';
import RegisterPage from './routs/RegisterPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Root />} errorElement={<ErrorPage />}>
        <Route errorElement={<ErrorPage />}>
          <Route index element={<IndexPage />} />
          <Route path='trips/:tripsID' element={<WeatherPage />} />
        </Route>
      </Route>
      <Route
        path='login'
        element={<LoginPage />}
        errorElement={<ErrorPage />}
      />
      <Route
        path='register'
        element={<RegisterPage />}
        errorElement={<ErrorPage />}
      />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
