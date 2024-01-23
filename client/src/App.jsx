import { Suspense, useState } from 'react';
import './App.css';
import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Properties from './pages/Properties/Properties';
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Property from './pages/Property/Property';
import { MantineProvider } from '@mantine/core';
import UserDetailContext from './context/UserDetailContext';

function App() {

  const queryClient = new QueryClient()
  const [userDetails,setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null
  })

  return (
    <UserDetailContext.Provider value={{userDetails, setUserDetails}}>
    <QueryClientProvider client = {queryClient}>
      <MantineProvider>
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<Layout />}> 
      {/* Layout is used since we have header and footer same in all the pages */}
        <Route path='/' element={<Website />} />
        <Route path='/properties'>
          <Route index element={<Properties/>} />
          {/* index is used if there is no propertyId then simply render the Properties page */}
          <Route path=':propertyId' element={<Property/>} />
          </Route>
      </Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
    </MantineProvider>
    <ToastContainer/>
    <ReactQueryDevtools initialIsOpen = {false}/>
    </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
