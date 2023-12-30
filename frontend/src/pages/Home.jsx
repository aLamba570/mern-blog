import Footer from "../components/Footer";
import HomePost from "../components/HomePost";
import Navbar from "../components/Navbar";
import axios from "axios";
import { URL } from "../url";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
    // console.log(search);

    const fetchPosts = async () => {
        try {
          const res = await axios.get(`${URL}/api/posts/`+search);
          setPosts(res.data);
        } catch (err) {
          console.error(err);
        }
      };
      

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="px-8 px-[200px]">
        {posts.map((post) => {
          return <HomePost key={post._id} post={post} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default Home;
