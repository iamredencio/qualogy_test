import Header from './Header';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app__body'>
        {/* <Sidebar/> */}
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;