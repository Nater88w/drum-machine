import {useState} from 'react';

export default function Hello(){
const [seconds,setSeconds]=useState(0);
const [stopWatchInterval,setStopWatchInterval]= useState(null)
    let startTime;
    function startButton(){
       if(!stopWatchInterval){
        startTime = Math.floor((Date.now()/1000));
        setStopWatchInterval(setInterval(updateStopWatch,1000));
       
    }};
    function stopButton(){
       setStopWatchInterval(clearInterval(stopWatchInterval));
       
    };
    function updateStopWatch(){
        let now = Math.floor(Date.now()/1000);
        setSeconds(now-startTime)
    };
    function resetButton(){
        setStopWatchInterval(clearInterval(stopWatchInterval))
        setSeconds(0)
    };
    return (
        <>
        <div className='main'>
            <h3>Time since button click:{seconds}</h3>
        </div>
        <div className='button'>
            <button onClick={()=>{startButton()}}>start</button>
            <button onClick={()=>{stopButton()}}>stop</button>
            <button onClick={()=>{resetButton()}}>reset</button>
        </div>
        </>
    )
}