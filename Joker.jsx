import { useEffect, useState } from "react";

export default function Joker(){
    let [joke, setJoke] = useState({});
    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke= async ()=>{
        let result = await fetch(URL);
        let jsonResult = await result.json();
        setJoke({setup: jsonResult.setup, punchline: jsonResult.punchline})
    }


    useEffect(()=> {
        async function getJoke(){
        let result = await fetch(URL);
        let jsonResult = await result.json();
        console.log(jsonResult)
        setJoke({setup: jsonResult.setup, punchline: jsonResult.punchline});
        }
    getJoke();

    }, []);


    return(
        <div>
            <h1>Joker!</h1>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}