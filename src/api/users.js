const baseurl = "https://softdrop.onrender.com"

async function getUserProfile(token){
    try{
        let response = await fetch(baseurl+"/users/profile/0000001");
    
        let data = response.json();
        
        console.log("profile data:", data)
        return data
    }catch(err){
        console.log(err)
        return { error: true, message: err.message}
    }
}

export { getUserProfile }