import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import NoMatch from './pages/no-match';
import Posts from './pages/posts';
import PostLists from './components/post-lists';
import Post from './components/post';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/posts' element={<Posts />}>
          <Route index element={<PostLists />}/>
          <Route path=':slug' element={<Post />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
