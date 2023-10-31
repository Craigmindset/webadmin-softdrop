export default function useToken(){
    function getToken(){
        let tokenString = localStorage.getItem('softdropAdminToken');
        let adminToken = JSON.parse(tokenString)

        return adminToken;
    }

    let token = getToken()

    function saveToken(authToken){
        localStorage.setItem('softdropAdminToken', JSON.stringify(authToken))
    }

    function deleteToken(){
        localStorage.removeItem('softdropAdminToken')
    }
    return { token, saveToken, deleteToken }
}