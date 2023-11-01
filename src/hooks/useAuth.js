import { useState } from "react";
import { loginAdmin } from "../api/auth";
import useToken from "./useToken";
import useUser from "./useUser";

export default function useAuth(){
    let { saveToken, deleteToken } = useToken()
    let { removeUser } = useUser()

    let [authLoading, setAuthLoading] = useState(false);
    let [errorAuth, setErrorAuth] = useState({error: false, message: ""})

    async function login(payload){
        setAuthLoading(true);
        console.log("loading...")
        let adminPayload = await loginAdmin(payload);
        console.log(adminPayload);
        if(adminPayload.error) {
            setErrorAuth({error: true, message: adminPayload.message})
            setAuthLoading(false)
            return 
        }
        saveToken(adminPayload.token);
        setAuthLoading(false)
    }

    function logout(){
        deleteToken()
        removeUser()
    }

    return { login, logout, errorAuth, authLoading }
}