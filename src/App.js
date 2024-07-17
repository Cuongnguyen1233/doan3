
// import './App.css';
import { Outlet, Route, Routes, Link } from 'react-router-dom';
import Story from './Story';
import HMI from './HMI';
import AAC from './AAC';
import NMA from './NMA';
import JAC from './JAC';
import NZAC from './NZAC';
import SAC from './SAC';
import CAI from './CAI';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to='/'></Link>
          <Link to='/Story' className='menuItem'>home</Link>
          <Link to='/HMI' className="menuItem"></Link>
          <Link to='/AAC' className='menuItem'></Link>
          <Link to='/NMA' className="menuItem"></Link>
          <Link to='/JAC' className='menuItem'></Link>
          <Link to='/NZAC' className="menuItem"></Link>
          <Link to='/SAC' className='menuItem'></Link>
          <Link to='/CAI' className="menuItem"></Link>
          <Link to='/ÖAV' className="menuItem"></Link>
        </nav>
      </header>
      <section>
        <Routes>
          <Route path='/HMI' element={<HMI />} />
          <Route path='/Story' element={<Story />} />
          <Route path='/AAC' element={<AAC />} />
          <Route path='/NMA' element={<NMA />} />
          <Route path='/JAC' element={<JAC />} />
          <Route path='/NZAC' element={<NZAC />} />
          <Route path='/SAC' element={<SAC />} />
          <Route path='/CAI' element={<CAI />} />
          
        </Routes>
        <Outlet />
      </section>
    </div>
  );
}

export default App;
