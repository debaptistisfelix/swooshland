import "./RogueBox.css";
import RogueLust from "./RogueLust";
import RogueRage from "./RogueRage";
import RoguePride from "./RoguePride";
import { useState, useEffect } from "react";


function RogueBox() {
    const [rogueOn, setRogueOn] = useState("RogueLust");
    const [index, setIndex] = useState(0);
    const array = ["RogueLust", "RogueRage", "RoguePride"];
    function changeRogue(model) {
        setRogueOn(model);
    }

    /*  useEffect(() => {
         const intervalId = setInterval(() => {
             setIndex(prevIndex => (prevIndex + 1) % array.length);
         }, 5000);
 
         return () => {
             clearInterval(intervalId);
         }
     }, [])
 
     useEffect(() => {
         setRogueOn(array[index])
     }, [index]) */






    return (
        <div className="RogueBox">
            {rogueOn === "RogueLust" && <RogueLust />}
            {rogueOn === "RogueRage" && <RogueRage />}
            {rogueOn === "RoguePride" && <RoguePride />}
            <div className="Rogue-btns">
                <span
                    style={{ backgroundColor: rogueOn === "RogueLust" && "rgba(255, 255, 255, 0.6)" }}
                    onClick={() => { changeRogue("RogueLust") }} className="Rogue-btn"></span>
                <span
                    style={{ backgroundColor: rogueOn === "RogueRage" && "rgba(255, 255, 255, 0.6)" }}
                    onClick={() => { changeRogue("RogueRage") }} className="Rogue-btn"></span>
                <span
                    style={{ backgroundColor: rogueOn === "RoguePride" && "rgba(255, 255, 255, 0.6)" }}
                    onClick={() => { changeRogue("RoguePride") }} className="Rogue-btn"></span>
            </div>
        </div>
    )
}

export default RogueBox;