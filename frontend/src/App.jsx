
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/posts/post/:id' element={<PostDetails />} />
        <Route path='/write' element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        {/* Add more routes as needed */}
      </Routes>
      
    </Router>
  );
};

export default App;
