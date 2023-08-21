import { HashRouter as Router, Route,Routes } from 'react-router-dom';

import Header from './components/header'
import Noteslistpage from './pages/noteslistpage'
import './App.css'
import NotePage from './pages/NotePage'


function App() {
  return (

      <div className='container dark'>
      <div className="app">
      <Header/>
      <Router>
      <Routes>
      <Route path='/' exact Component={Noteslistpage}></Route>
      <Route path='note/:id' Component={NotePage}> </Route> 

      </Routes>
      </Router>
      </div>


</div>
     
    
  );
}

export default App;
