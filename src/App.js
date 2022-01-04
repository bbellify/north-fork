import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom'

// utils
// use this for private routes, see below
// import RequireAuth from './utils/RequireAuth'

// components
import Home from './components/Home'
import Accommodations from './components/Accommodations'
import Maps from './components/Maps'
import Retreats from './components/Retreats'
import Specials from './components/Specials'
import Weddings from './components/Weddings'


function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/specials'>Specials</NavLink>
        <NavLink to='/accommodations'>Accommodations</NavLink>
        <NavLink to='/weddings'>Weddings</NavLink>
        <NavLink to='/retreats'>Retreats</NavLink>
        <NavLink to='/maps'>Maps</NavLink>
      </nav>

      <Routes>
        <Route exact path ={'/'} element={<Home />}/>
        <Route path={'/specials'} element={<Specials />}/>
        <Route path={'/accommodations'} element={<Accommodations/>}/>
        <Route path={'/weddings'} element={<Weddings/>}/>
        <Route path={'/retreats'} element={<Retreats/>}/>
        <Route path={'/retreats'} element={<Retreats/>}/>
        <Route path={'/maps'} element={<Maps/>}/>
      </Routes>

      <footer>
        <h3>Website design by Bellwether</h3>
      </footer>
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