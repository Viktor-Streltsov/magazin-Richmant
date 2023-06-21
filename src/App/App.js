import Footer from '../components/footer/Footer';
import Header from '../components/header/Heder';
import Admin from '../pages/AdminPage/AdminPage';
import Main from '../pages/pageMain/MainPage';
import User from  '../pages/UserPage/UserPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      {/* <Main/> */}
      {/* <User/> */}
      <Admin/>
      <Footer/>
    </div>
  );
}

export default App;
