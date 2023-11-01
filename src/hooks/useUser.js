import { useState, useEffect } from "react";
import { getUserProfile } from "../api/users";
import useToken from "./useToken";

export default function useUser(){
    let { token } = useToken();

    let [user, setUser] = useState(null)
    let [loadingUser, setLoadingUser] = useState(false)
    let [userError, setUserError] = useState({error: false, message: ""})
    
     async function getUser(){
        setLoadingUser(true)
        let userProfile = await getUserProfile(token);
        console.log(userProfile)
        if(userProfile.error){
            setUserError(userProfile)
            setLoadingUser(false)
            return
        }
        setUser(userProfile)
        setLoadingUser(false)
    }

    function removeUser(){
        setUser(null)
    }

    useEffect(()=>{
        getUser()
    }, [])

    return { user, removeUser, loadingUser, userError }
}