import Footer from "../components/Footer";
import HomePost from "../components/HomePost";
import Navbar from "../components/Navbar";


const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="px-8 px-[200px]">
            <HomePost/>
            <HomePost/>
            <HomePost/>
            <HomePost/>
            <HomePost/>
            <HomePost/>
        </div>
        <Footer/>
        </>
    );
}

export default Home;