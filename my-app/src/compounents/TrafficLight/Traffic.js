import React from "react";
import Light from "../Light/Light"
import "./Traffic.css"
const Lights = {
    Red: 'red',
    Yellow: 'yellow',
    Green: 'green'
};
export default function Traffic (){
    const [lightOn,setLightOn] = React.useState(Lights.Green)
    const turnOnLight =()=>{
        if (lightOn ===Lights.Green){
            setLightOn (Lights.Yellow);
            return;
        }
        if (lightOn ===Lights.Yellow){
            setLightOn (Lights.Red);
            return;
        }
        if (lightOn ===Lights.Red){
            setLightOn (Lights.Green);
            return;
        }
    }
    return(
        <div>
        <div className="traffic-light">
     <Light color = {Lights.Red} isOn = {lightOn===Lights.Red}/>
     <Light color = {Lights.Yellow} isOn = {lightOn===Lights.Yellow}/>
     <Light color = {Lights.Green} isOn = {lightOn===Lights.Green}/>
        </div>
        <button onClick={turnOnLight}>Next</button>
        </div>
    )
}