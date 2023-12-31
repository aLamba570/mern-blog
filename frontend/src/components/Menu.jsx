
import {useContext} from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import {URL} from '../url'


const Menu = () => {
    const {user} = useContext(UserContext);
    const {setUser} = useContext(UserContext);

    const logout = async () => {
        try{
            const res = await axios.get(`${URL}/api/auth/logout`, {withCredentials: true});
            console.log(res.data);
            setUser(null);
        }
        catch(err){
            console.error(err);
        }
    }


    
    return (
        <div className="bg-black w-[200px] flex flex-col items-start absolute top-12 rounded-md p-4 right-8 space-y-4">
            {!user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">Login</h3>}
            {!user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">Register</h3>}
            {user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">Profile</h3>}
            {user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">Write</h3>}
            {user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">My Blogs</h3>}
            {user && <h3 onClick={logout} className="text-white text-sm hover:text-gray-500 cursor-pointer">Logout</h3>}
        </div>
    )
}

export default Menu