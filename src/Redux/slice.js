import { createSlice } from "@reduxjs/toolkit";

    const initialState = [
        {
          keyCode: 81,
          value: "Q",
          id: 'Heater-1',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
        
        {
          keyCode: 87,
          value: "W",
          id: 'Heater-2',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
        
        {
          keyCode: 69,
          value: "E",
          id: 'Heater-3',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
        
        {
          keyCode: 65,
          value: "A",
          id: 'Heater-4',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
        
        {
          keyCode: 83,
          value: "S",
          id: 'Clap',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
        
        {
          keyCode: 68,
          value: "D",
          id: 'Open-HH',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
        
        {
          keyCode: 90,
          value: "Z",
          id: "Kick-n'-Hat",
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
        
        {
          keyCode: 88,
          value: "X",
          id: 'Kick',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
        
        {
          keyCode: 67,
          value: "C",
          id: 'Closed-HH',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }
        ];

               

export const drumSlice = createSlice({
    name: 'drum',
    initialState,

    reducers:{

     bankToggleOff:(state)=>{
      return state;
      }
      
    }
})

export const {bankToggleOff} = drumSlice.actions;
export default drumSlice.reducer;

