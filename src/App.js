
import './App.css';
import './main.css'
import './sidebar.css'
import './footer.css'

import Main from './Main';
import Sidebar from './Sidebar'

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

function Footer(){

  return(

    <div className='footer'>
      <p>Footer</p>
    </div>


  )


}
export default App;


