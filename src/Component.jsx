import react from "react";

const data=
[{ Title:"Movie Title1",
 imageUrl:"https://occ-0-3657-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQIf4ia4XTQUM8OaSuD8cAtSB-VFTZXMmsCr1wU54v5lhvjaUNIsYRQvMwr4WJcLEM3djPtw5cF7HH_PH3tGIS11Uabv4C1I1POkpROK3vxUwxoFLNOXkooh.jpg?r=c7c",
 description:"This is a brief description of the movie."},


{
    Title:"Movie Title2",
    imageUrl:"https://tse3.mm.bing.net/th/id/OIP.uHaqRdiMzWSMCR2LzsmhtQHaEZ?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:"This is a brief description of the movie2."
 },]
function Component() {

return (
<div className="movie">

    {
        data.map((eachobject)=>{
            return(
                <Movie 
              Title={eachobject.Title}
              imageUrl={eachobject.imageUrl}
              description={eachobject.description}
                />
            )
    }
            )
    }
        
</div>

)
}



const Movie=(props)=>{
    return(
        <div>
            <p>{props.Title}</p>
            <img src={props.imageUrl} alt="" />
            <p>{props.description}</p>
        </div>
    )}





export default Component;