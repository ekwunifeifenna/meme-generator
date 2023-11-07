import React, {useState} from "react"
import memesData from "./memesData"

function Meme(){

    // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = useState({
        topText: "Top Text",
        bottomText: "Bottom Text",
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

    function handleChange(event){
        const {name, value} = event.target
        setMeme(previosMeme => ({
            ...previosMeme,
            [name]: value

        }))

    }



    return(
        <main>
            <form className="meme--form">

                <div className="form--inputs">

                <input 
                    type="text" 
                    className="form--text" 
                    placeholder="Enter top text" 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
 

                <input 
                    type="text"  
                    className="form--text" 
                    placeholder="Enter bottom text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                </div>

                <button 
                    className="form--button" 
                    onClick={getMemeImage}
                    >Generate new Image
                </button>


                <div className="meme">
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </form>

            
            
        </main>
    )

}
export default Meme