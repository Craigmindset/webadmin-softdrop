import { useState } from "react";
import { getUserProfile } from "../api/users";
import useToken from "./useToken";

export default async function useUser(){
    let { token } = useToken();
    let [user, setUser] = useState(await getUser())

    async function getUser(){
        if(!token) return null;
        if(user) return user;

        let userProfile = await getUserProfile(token);
        console.log(userProfile)
        if(userProfile.error){
            return null
        }
        return userProfile
    }

    async function removeUser(){
        setUser(null)
    }

    return { user, removeUser }
}