export default function ErrorPage(){
    function reloadPage(){
        window.location.reload()
    }
    return(
        <div className="w-full text-center">
            <div>
                An Error occured
                <div className="cursor-pointer" onClick={reloadPage}>try Again</div>
            </div>
        </div>
    )
}