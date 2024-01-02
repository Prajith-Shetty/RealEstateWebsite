import { Suspense } from 'react';
import './App.css';
import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Properties from './pages/Properties/Properties';

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<Layout />}> 
      {/* Layout is used since we have header and footer same in all the pages */}
        <Route path='/' element={<Website />} />
        <Route path='/properties' element={<Properties />}/>
      </Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
