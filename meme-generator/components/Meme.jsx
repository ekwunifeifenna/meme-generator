import { useEffect } from "react"
import React, {useState} from "react"
import "../src/App.css"


function Meme(){


       // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")
        const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1c1uej.jpg"
    })


    const [allMemeImages, setAllMemeImages] = useState([])




    //Make an API call to get all the images
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")    //fetch the memes
        .then(res => res.json())  //parse the json
        .then(data => setAllMemeImages(data.data.memes)) //set the memes to the data received from json after the state changes

        
    },[])
    


 


    // The function to get the random image on the page 
    function getMemeImage(){

        const rand = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[rand].url

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
            <div className="meme--form">

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
            </div>

            
            
        </main>
    )

}
export default Meme