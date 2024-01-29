import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react';
import Login from '~/Pages/dangnhap';
import Home from './Pages/Home';
import Tracuusodu from './Pages/Home/Sidebar/Content';
import Tracuuquyen from './Pages/Home/Sidebar/Tracuuquyen';
import THQ from './Pages/Home/Sidebar/TCTTTHQ';
import TCQDH from './Pages/Home/Sidebar/TCQDH';
import Tracuusolenh from './Pages/Home/Sidebar/Tracuusolenh';
import GiaoDich from './Pages/Home/Sidebar/Giaodich';
import GDDK from './Pages/Home/Sidebar/GDDK';
import GDXN from './Pages/Home/Sidebar/GDXN';
import GDG from './Pages/Home/Sidebar/GDG';
import GDR from './Pages/Home/Sidebar/GDR';
import DGD from './Pages/Home/Sidebar/DGD';
function App( {selected}) {
  const [loggeIn, setLoggeIn]= useState(false)
  return (
    <Router>
      <div className='App'>
            <Routes>
              
             <Route path='/Login' element={<Login setLoggeIn={setLoggeIn}/>}/> 
               <Route path='/' element={loggeIn ? <Home/>: <Navigate to={'/Login'}/>}/>

              

        
              <Route path='/' element={<Home><Tracuusodu/></Home>} />
              <Route path='/TraCuuSoDu' element={<Home><Tracuusodu/></Home>} />
              <Route path='/TraCuuSoLenh' element={<Home><Tracuusolenh/></Home>}/>
              <Route path='/TraCuuQuyen' element={<Home><Tracuuquyen><THQ/></Tracuuquyen></Home>}/>
              <Route path='/Tracuuthongtinthuchienquyen' element={<Home><Tracuuquyen><THQ/></Tracuuquyen></Home>}/>
              <Route path='/Tracuuquyenduochuong' element={<Home><Tracuuquyen><TCQDH/></Tracuuquyen></Home>}/>

              <Route path='/QuanLy' element={<Home></Home>}/>
              <Route path='/DuyetGiaoDich' element={<Home><DGD/></Home>}/>

              <Route path='/GiaoDich' element={<Home><GiaoDich><GDDK/></GiaoDich></Home>}/>
              <Route path='/DKdatmuaCKthem' element={<Home><GiaoDich><GDDK/></GiaoDich></Home>}/>
              <Route path='/Xacnhanlenh' element={<Home><GiaoDich><GDXN/></GiaoDich></Home>}/>
              <Route path='/Kiguichungkhoan' element={<Home><GiaoDich><GDG/></GiaoDich></Home>}/>
              <Route path='/Rutchungkhoan' element={<Home><GiaoDich><GDR/></GiaoDich></Home>}/>

            </Routes>

      </div>
    </Router>
  )
}
 
export default App;
