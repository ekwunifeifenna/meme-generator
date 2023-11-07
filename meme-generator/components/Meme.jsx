import React, {useState} from "react"
import memesData from "./memesData"

function Meme(){

    // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)


    // The function to get the random image on the page 
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const rand = Math.floor(Math.random()*memesArray.length)
        const url = memesArray[rand].url

        setMeme(previousMeme => ({
            ...previousMeme,
            randomImage: url 

        }))
        
        

    }



    return(
        <main>
            <form className="meme--form">

                <div className="form--inputs">

                <input type="text" className="form--text" placeholder="Enter top text"/>
 
                <input type="text"  className="form--text" placeholder="Enter bottom text"/>
                </div>

                <button className="form--button" onClick={getMemeImage}>Generate new Image</button>

                <img src={meme.randomImage} className="meme--image"/>
            </form>

            
            
        </main>
    )

}
export default Meme