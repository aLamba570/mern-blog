import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Profile from './pages/Profile';
import { UserContextProvider } from './context/UserContext';


const App = () => {



  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/posts/post/:id' element={<PostDetails />} />
          <Route path='/write' element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path='/profile/:id' element={<Profile />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </UserContextProvider>
  );
};

export default App;
