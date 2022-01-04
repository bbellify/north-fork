import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom'

// utils
// use this for private routes, see below
// import RequireAuth from './utils/RequireAuth'

// components
import Accommodations from './components/Accommodations'
import Maps from './components/Maps'
import Retreats from './components/Retreats'
import Specials from './components/Specials'
import Weddings from './components/Weddings'


function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to='/specials'>Specials</NavLink>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/accommodations'>Accommodations</NavLink>
        <NavLink to='/weddings'>Weddings</NavLink>
        <NavLink to='/retreats'>Retreats</NavLink>
        <NavLink to='/maps'>Maps</NavLink>
      </nav>
      <h1> On the North Fork </h1>
      <img src='https://i.ibb.co/2nzRS6P/IMG-0938.jpg' alt='horsies' width='50%' />

      <Routes>
        <Route path={'/specials'} element={<Specials />}/>
        <Route path={'/accommodations'} element={<Accommodations/>}/>
        <Route path={'/weddings'} element={<Weddings/>}/>
        <Route path={'/retreats'} element={<Retreats/>}/>
        <Route path={'/retreats'} element={<Retreats/>}/>
        <Route path={'/maps'} element={<Maps/>}/>
      </Routes>
    </div>
  );
}

export default App;



// <Route exact path={'/plants'} 
// element={
//   <RequireAuth redirectTo='/login'>
//     <PlantList/>
//   </RequireAuth>
// }
// use above for private routes