import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DashBoard from './pages/DashBoard';
import MyProfile from './components/core/Dashboard/MyProfile';
import MyClient from './components/core/Dashboard/MyClient';
import PageNotFound from './components/common/PageNotFound';
import { useState } from 'react';
import {clientData} from './data/clientsData';

function App() {
  const[clientName,setClientName] = useState(clientData[0]);
  return (
    <div className="">
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route 
          element={
            <DashBoard clientName={clientName} setClientName={setClientName} />
          }
        >
          <Route path={"/dashboard/main"} element={<MyProfile />} />
          <Route path={"/dashboard/profile"} element={<MyProfile />} />
          <Route path={"/dashboard/client"} element={<MyClient clientName={clientName} setClientName={setClientName} />} />
          <Route path={"/dashboard/report"} element={<MyProfile />} />
          <Route path={"/dashboard/diet-plan"} element={<MyProfile />} />
          <Route path={"/dashboard/create-plan"} element={<MyProfile />} />
          <Route path={"/dashboard/chat"} element={<MyProfile />} />
          <Route path={"/dashboard/food"} element={<MyProfile />} />
          <Route path={"/dashboard/settings"} element={<MyProfile />} />
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;