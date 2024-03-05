
import './App.css';
import './Complements/Main&Footer/main&sidebar.css'
import './Complements/Footer/footer.css'

import Main from './Complements/Main&Footer/Main&Sidebar';
import Footer from './Complements/Footer/Footer';


function App() {
  return (
    <div className="container-body">

      <div className='header'>

      <p>Header</p>
      </div>
      <Main/>
      <Footer/>
      </div>
      
  );
}


export default App;


