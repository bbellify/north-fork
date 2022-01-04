import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to='/specials'>Specials</NavLink>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/accommodations'>Accommodations</NavLink>
        <NavLink to='/weddings'>Weddings</NavLink>
        <NavLink to='/retreats'>Retreats</NavLink>
        <NavLink to='/meetings'>Meetings</NavLink>
        <NavLink to='/maps'>Maps</NavLink>
      </nav>
      <h1> On the North Fork </h1>
      <img src='https://i.ibb.co/2nzRS6P/IMG-0938.jpg' alt='horsies' width='50%' />
    </div>
  );
}

export default App;
