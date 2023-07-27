import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gigs from './pages/Gigs'
import Gig from './pages/Gig';
import Orders from './pages/Orders';
import MyGigs from './pages/MyGigs';
import Add from './pages/Add';
import Messages from './pages/Messages';
import Message from './pages/Message';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Register from './pages/Register';
import { Outlet } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider} from 'react-query'
const queryClient = new QueryClient()


const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div></div>
  )
}
const Layout = () => {
  return (
    <div className='app'>
      <ScrollToTop/>
      <Navbar />
    <div className=''>
        <Outlet/>
    </div>
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<Home/> ,
      },
      {
        path: "/gigs",
        element: <Gigs/>,
      },
      {
        path: "/gig/:id",
        element: <Gig/>,
      },
      {
        path: "/orders",
        element: <Orders/>,
      },
      {
        path: "/mygigs",
        element:<MyGigs/>,
      },
      {
        path: "/add",
        element:<Add/>,
      },
      {
        path: "/messages",
        element: <Messages/>,
      },
      {
        path: "/message/:id",
        element: <Message/>,
      },
      {
        path: "/signin",
        element:<Signin/>
      },
      {
        path: "/register",
        element:<Register/>
      }
    ],
      
  },
]);

const App = () => {
  return (
  <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
  </QueryClientProvider>
  );
}

export default App;
