
import './App.css';
import './main.css'
import './sidebar.css'
import './footer.css'

import Main from './Main';
import Sidebar from './Sidebar'
import Footer from './Footer';


function App() {
  return (
    <div className="container-body">

      <div className='header'>

      <p>Header</p>
      </div>
      <Main/><Sidebar/>
      <Footer/>
      </div>
      
  );
}


export default App;


