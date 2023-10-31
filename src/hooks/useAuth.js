import { useState } from "react";
import { loginAdmin } from "../api/auth";
import useToken from "./useToken";
import useUser from "./useUser";

export default function useAuth(){
    let { saveToken, deleteToken } = useToken()
    let { removeUser } = useUser()
    let [errorAuth, setErrorAuth] = useState({error: false, message: ""})

    async function login(payload){
        let adminPayload = await loginAdmin(payload);
        if(adminPayload.error) {
            setErrorAuth({error: true, message: adminPayload.message})
            return 
        }
        saveToken(adminPayload.token);
    }

    function logout(){
        deleteToken()
        removeUser()
    }

    return { login, logout, errorAuth }
}