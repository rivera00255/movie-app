import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Main from './components/page/Main';
import PopularList from './components/page/PopularList';
import Detail from './components/page/Detail';
import Footer from './components/layout/Footer';
import Search from './components/page/Search';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movie' element={<PopularList data='movie' />} />
          <Route path='/movie/:id' element={<Detail data='movie' />} />
          <Route path='/tv' element={<PopularList data='tv' />} />
          <Route path='/tv/:id' element={<Detail data='tv' />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
