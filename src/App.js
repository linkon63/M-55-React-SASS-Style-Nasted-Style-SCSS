import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header2 from './components/Header2/Header2';
import Header3 from './components/Header3/Header3';
import Sass from './components/Sass/Sass';

function App() {
  return (
    <div className='App'>
          {/* <Header></Header> */}
          <Sass></Sass>
          <Header2></Header2>
          <Header3></Header3>
          <Home></Home>
          <Footer></Footer>
    </div>
  );
}

export default App;
