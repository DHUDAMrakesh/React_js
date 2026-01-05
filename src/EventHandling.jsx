function EventHandling(){
const ClickHandler=(e,Fname) => {
        console.log("Button clicked",e,Fname);
    }

    return(
        <div>
            <button className="btn" onClick={function(e){
                return ClickHandler(e,"Rakesh")
            }}>Click me</button>
        </div>
    )
}
export default EventHandling;