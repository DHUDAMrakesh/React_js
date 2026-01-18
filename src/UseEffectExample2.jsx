import React, { useEffect, useState } from 'react'
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const UseEffectExample2 = () => {
    const [drinks, setDrinks] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [loader, setLoader] = useState(false)
    const [isError, setIsError] = useState({ status: false, msg: "" })
    const FetchingData = async (api) => {
        setLoader(true)
        try {
            const response = await fetch(api)
            const data = await response.json()
            console.log(data.drinks)
            setDrinks(Array.isArray(data.drinks) ? data.drinks : [])
            setLoader(false)
            setIsError({ status: false, msg: "" })
            if(!data.drinks){
                throw new Error("No drinks found")
          }

        } catch (error) {
            console.log(error)
            setLoader(false)
            setDrinks([])
            setIsError({ status: true, msg: error.message || "something went wrong" })

        }
    }
    useEffect(() => {
        if(!searchTerm.trim()){
            setDrinks([])
            setIsError({status:false,msg:""})
            return
        }
        const UpdatedURL = `${URL}${searchTerm}`
        FetchingData(UpdatedURL)
    }, [searchTerm])



    return (

        <div>
            <input type="text" name="search drinks" id="drinks" placeholder='search drinks' className='input' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}

            />
            <div className="count">
                Number of drinks available:{drinks.length}
            </div>
            {drinks.length === 0 && <h1>search your drinks  </h1>}
            {loader && <h2 className='loading'>Loading....</h2>}
            {!loader && isError.status && (
                <h3 className='error-msg'>{isError.msg}</h3>
            )}

            {!loader && !isError.status && <ul className='container'>
                {
                    drinks.map((eachobj) => {
                        const { idDrink, strDrink, strDrinkThumb } = eachobj
                        return (
                            <li key={idDrink}>
                                <img src={strDrinkThumb} alt={strDrink} />
                                <div className='text' >{strDrink}</div>
                            </li>
                        )
                    })
                }
            </ul>}

        </div>
    )
  
}

export default UseEffectExample2
