import {useState,useEffect} from 'react';


export default function Button({display,disabled,file,id,setText}){
    //id = id.toUpperCase();
    return <button 
    onClick={(e)=>{const aud = e.target.children[0];aud.play();setText(e.target.id)}} 
    id={id} className='drum-pad' 
    disabled={disabled}>
    
    <audio id={display} className='clip' src={file}></audio>
    {display}
    </button>
}
export function OnSwitch({setChecked,isDisabled}){
    return (
    <div className='eachSwitch'>
        <a>Power</a>
        <label className="switch">
            <input value={isDisabled} onChange={()=>isDisabled?setChecked(false):setChecked(true)} type="checkbox"></input>
            <span className="slider round"></span>
        </label>
    </div>
    )
}
export function Input({bank,text}){
    const inputText = !bank ? 'Heater':'Smooth Piano Kit'
    return <div id='display' className='input'>{text}</div>
}
export function Volume(){
    return <input type='range' min={0} max={10}></input>
}
export function Bank({bank,setBank}){
    return (  
    <div className='eachSwitch'>
        <a>Bank</a>
        <label className="switch">
            <input value={bank} onChange={()=>setBank(!bank)} type="checkbox"></input>
            <span className="slider round"></span>
        </label>
    </div>
    )
}
