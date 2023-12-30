import {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import {URL} from '../url';



export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser();
    }, [])


    const getUser = async () => {
        try{
            const response = await axios.get(`${URL}/api/auth/refetch`, {withCredentials: true});
            setUser(response.data);
        }
        catch(err){
            console.error(err);
        }
    }
    
    return (
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}