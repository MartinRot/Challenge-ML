import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ItemDetailPage from './pages/ItemDetailPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (

    <BrowserRouter > 
      <NavBar />
      <Routes>
        <Route path='/'>
          <Route index element={ <HomePage /> } />
          <Route path='/items' element={ <SearchPage /> } />
          <Route path='/items/:id' element={ < ItemDetailPage /> } />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
