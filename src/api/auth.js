const baseurl = "https://softdrop.onrender.com"

async function loginAdmin(payload){
    try{
        let response = await fetch(baseurl+"/auth/admin/login", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
    
        let data = response.json();
    
        return data;
    }catch(err){
        return {error: true, message: err.message}
    }
}

export { loginAdmin }