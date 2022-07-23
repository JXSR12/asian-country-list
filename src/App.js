import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import SearchPage from './pages/SearchPage/SearchPage';
import DetailPage from './pages/DetailPage/DetailPage';
import BookmarksPage from './pages/BookmarksPage/BookmarksPage';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-dark bg-primary fixed-bottom mt-5 justify-content-left">
          <div className="container">
            <Link to="/" className="navbar-brand font-weight-bold">AsianCountryList</Link>
              <Link to="/" className="nav-item text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
</svg></Link>
              <Link to="/search" className="nav-item text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></Link>
              <Link to="/bookmarks" className="nav-item text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmarks-fill" viewBox="0 0 16 16">
  <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z"/>
  <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1H4.268z"/>
</svg></Link>
          </div>
          
        </nav>

        <Routes>
          <Route exact path='/detail/:code' element={<DetailPage/>}></Route>
          <Route exact path='/search' element={<SearchPage/>}></Route>
          <Route exact path='/bookmarks' element={<BookmarksPage/>}></Route>
          <Route exact path='/' element={<HomePage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

