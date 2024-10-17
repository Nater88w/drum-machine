import './App.css';
import Button from './button.js';
import { OnSwitch,Volume,Bank,Input,} from './button.js';
import {useState} from 'react';

const musicFile1 = {
  'Heater 1':'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
  'Heater 2':'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
  'Heater 3': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
  'Heater 4': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
  'Clap': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
  'Open-HH': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
  'Kick-n-Hat': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
  'Kick': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
  'Closed-HH': 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3'
};

document.addEventListener('keydown',addKey);
function addKey(e){
  const key = e.key.toUpperCase();
  if(document.getElementById(key)!==null){
  const button = document.getElementById(key);
  button.play();
  }
  
};

function App() {
  const [disabled,setIsDisabled]=useState(false);
  const [bank,setIsBank]=useState(false);
  const [text,setText]=useState('drum');
 

  return (
    <div id='drum-machine' className='container'>
      <div className='board'>
        <div id='display2'>
          <Button setText={setText} id='Heater 1' disabled={disabled} file={musicFile1['Heater 1']} display='Q'/>
          <Button setText={setText} id='Heater 2' disabled={disabled} file={musicFile1['Heater 2']} display='W' />
          <Button setText={setText} id='Heater 3' disabled={disabled} file={musicFile1['Heater 3']} display='E'/>
          <Button setText={setText} id='Heater 4' disabled={disabled} file={musicFile1['Heater 4']} display='A' />
          <Button setText={setText} id='Clap' disabled={disabled} file={musicFile1['Clap']} display='S' />
          <Button setText={setText} id='Open-HH' disabled={disabled} file={musicFile1['Open-HH']} display='D' />
          <Button setText={setText} id='Kick-n-Hat' disabled={disabled} file={musicFile1['Kick-n-Hat']} display='Z'/>
          <Button setText={setText} id='Kick' disabled={disabled} file={musicFile1['Kick']} display='X'/>
          <Button setText={setText} id='Closed-HH' disabled={disabled} file={musicFile1['Closed-HH']} display='C'/>
          
        </div>
        <div className='switches'>
          <OnSwitch isDisabled={disabled} setChecked={(e)=>setIsDisabled(e)} />
          <Input text={text} bank={bank}/>
          <Volume />
          <Bank bank={bank} setBank = {(e)=>setIsBank(e)} />
        </div>
     </div>
    </div>
  );
}

export default App;

