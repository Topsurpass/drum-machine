import { createSlice } from "@reduxjs/toolkit";

 const initialState = [
    {
      keyCode: 81,
      value: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },
    
    {
      keyCode: 87,
      value: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },
    
    {
      keyCode: 69,
      value: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },
    
    {
      keyCode: 65,
      value: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },
    
    {
      keyCode: 83,
      value: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },
    
    {
      keyCode: 68,
      value: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },
    
    {
      keyCode: 90,
      value: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },
    
    {
      keyCode: 88,
      value: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },
    
    {
      keyCode: 67,
      value: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' }];


      export const drumSlice2 = createSlice({
        name: 'drum2',
        initialState,
      
        reducers:{
      
         bank2ToggleOff:(state)=>{
          return state;
      
          }
        }
      })
      
      export const {bank2ToggleOff} = drumSlice2.actions;
      export default drumSlice2.reducer;