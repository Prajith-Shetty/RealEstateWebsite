import { Suspense } from 'react';
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

function App() {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client = {queryClient}>
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
    <ToastContainer/>
    <ReactQueryDevtools initialIsOpen = {false}/>
    </QueryClientProvider>
  );
}

export default App;
