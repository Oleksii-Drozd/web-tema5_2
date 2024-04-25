import React, { useState } from "react";
import memesData from "../memesData";
import "../Meme.css";

export default function Meme() {
    const [memeImage, setMemeImage] = useState("");
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [image, setImage] = useState("");

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const selectedMeme = memesArray[randomNumber];
        setMemeImage(selectedMeme.image);
        setImage(selectedMeme.image);
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    value={topText}
                    onChange={(e) => setTopText(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    value={bottomText}
                    onChange={(e) => setBottomText(e.target.value)}
                />
                <button className="form--button" onClick={getMemeImage}>
                    Generate Meme
                </button>
            </div>
            <div className="meme">
                {memeImage && <img src={memeImage} alt="Meme" />}
                <h2 className="meme--text top-text">{topText}</h2>
                <h2 className="meme--text bottom-text">{bottomText}</h2>
            </div>
        </main>
    );
}
