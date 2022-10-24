import 'bootstrap/dist/css/bootstrap.min.css';
import './drum.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
//import {bankToggleOff} from '../Redux/slice';
import {useSelector} from 'react-redux';
import { useState, useEffect} from 'react';

export const DrumMachine = () =>{
    
   const arrBank1 = useSelector((state)=>state.playNow.map(loop=>loop));
   const arrPiano = useSelector((state)=>state.playPiano.map(loop=>loop));
   const [switchOn, switchOff] = useState(false);
   const [bank, setBank] = useState(false);

   useEffect(()=>{
        function handle(event){
            if(bank===false){
                 arrBank1.map(keys2=>{
                    for(let i = 0; i<keys2["value"].length; i++){                          
                        if((event.key.toUpperCase()=== keys2["value"][i])){     
                            handlePlay(keys2["value"],keys2["id"]);           
                        }
                        return mouseVol(keys2["value"][i])                
                    }return  []  
                })
            }else{
                arrPiano.map(keys=>{
                    for(let i = 0; i<keys["value"].length; i++){
                        if((event.key.toUpperCase() === keys["value"][i])){                 
                            handlePlay(keys["url"],keys["id"]);
                        }
                        return mouseVol(keys["url"])
                    }return []
                }) 
            }
        }
        
            document.addEventListener("keydown", handle);
        return ()=>{
            document.removeEventListener("keydown", handle);  
        }
    })

    const mouseVol = (loopId) =>{
        const a = document.getElementById("volume").value;
         document.getElementById(loopId).volume= (a/100);
    }
    //This function handles the display of the volume value
    const handleVolDisplay = () =>{
        const b = document.getElementById("volume").value;
        document.getElementById("display").innerText= `Volume: ${b}%`;
    }

    //This function changes or handles the bank switch toggle from drum kicks to piano
    const handleBankSwitch = () =>{
        setBank(!bank);
            if(bank===false){
                document.getElementById("bank1But").style.display="none";
                document.getElementById("bank2But").style.display="grid";
                document.getElementById("display").innerText= "Piano";
            }else{
                document.getElementById("bank1But").style.display="grid";
                document.getElementById("bank2But").style.display="none";
                document.getElementById("display").innerText= "Kicks";
            }
    }

   //This function handles the playing of the audios
    const handlePlay = (playId,showId) =>{
        if(switchOn === true){
            document.getElementById(playId).play();
            document.getElementById("display").innerText= showId;
        }       
    }
   //This function handles the display of the switch toggle
    const handleSwitch=()=>{
        switchOn===true?document.getElementById("switch").innerText = "OFF":
        document.getElementById("switch").innerText = "ON";
    }
    
    return(
        
        <Container fluid className='bigContainer'>
            <div  className='whitebg'>

                <div className="drum-container">
                    <div className='bothButtons' id="bank1But" >
                        {arrBank1.map(i=>{
                            return <div key={i.value}>
                                <Button id='button1' className="button"  onClick={()=>{handlePlay(i.value,i.id); mouseVol(i.value)}}>{i.value}</Button>
                                <audio src={i.url} id={i.value}></audio>
                            </div> 
                        })}
                    </div>
                    
                    <div className='bothButtons' id="bank2But" style={{display:"none"}}>
                        {arrPiano.map(j=>{                  
                            return <div key={j.value}>
                                <Button id='button2' className="button"   onClick={()=>{handlePlay(j.url,j.id); mouseVol(j.url)}} >{j.value}</Button>
                                <audio src={j.url} id={j.url}></audio>                
                            </div>                   
                        })}
                    </div>
                </div>

                <div className='drumControls'>

                    <br/><br/> 
                    <h3 id='switch'>OFF</h3> 

                    <label className='switch'>
                        <input type='checkbox' onClick={()=> { handleSwitch(); switchOff(!switchOn)}} />
                        <span className='slider'/>
                    </label>

                    <br/><br/>

                    <div id="display">Kicks</div>

                    <div className='slideContainer'>
                        <input type='range' min="0" max="100" className='slide' id='volume' onChange={()=>handleVolDisplay()} />
                    </div>

                    <br/>
                    <h3>Bank</h3> 

                    <label className='switch'>
                        <input type='checkbox' onClick={()=>handleBankSwitch()} />
                        <span className='slider' />
                    </label>

                    <br/>
                </div>
                
            </div>
        </Container>
    )
}