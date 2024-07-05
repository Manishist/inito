import './App.css';
import Header from './components/Header';
import ImgBox from './components/ImgBox';
import Mainpage from './components/Mainpage';
import Mainpage1 from './components/Mainpage1';
import NewPage from './components/NewPage';
import ImgCards from './components/ImgCards';
import GridUi from './components/GridUi';
import Comments from './components/Comments';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{position: 'relative'}}>
      <Header/>
      <Mainpage/>
      <Mainpage1/>
      <ImgBox/>
      <NewPage/>
      <ImgCards/>
      <GridUi/>
      <Comments/>
      <Footer/>
    </div>
  );
}

export default App;
