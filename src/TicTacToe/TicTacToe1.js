import React, { useState } from 'react';
import circle from '../assets/circle1.png';
import cross from '../assets/cross.png';
import './TicTacToe.css';
import cross1 from './circle.png';

let data = ["","","","","","","","",""];
const TicTacToe1 = () => {
  let [count,setCount]= useState(0);
  let [lock,setLock]= useState(false);

  const toggle = (e,num)=>{
    if(lock) {
      return 0;
  
    }
    if(count%2===0){
      e.target.innerHtml=`<img src='${cross1}'>`;
      
      console.log('click cross')
      data[num]='x';
      setCount(++count);
      console.log(count);
      
      const val = num;
      console.log('cross',val);
      e.target.innerHtml=`<p>'${val}'</p>`
    }
    else{
      e.target.innerHtml=`<img src='${circle}'>`;
      console.log('click circle')
      data[num]='O';
      setCount(++count);
      console.log(count);
      const val = num;
      console.log('circle', val);
    }
  }
  const checkwin = () => {
    if(data[0]===data[1] && data[1]===data[2] && data[2]!=='')
      {
        won(data);
      }
      
  }
  const won = () => {
    setLock(true);
  }
  return (
    <div className='container'>
      <img src={cross} />
      <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>
      <div className='board'>
            <div className='row1'>
                <div className='boxes' onClick={(e)=>{toggle(e,0)}}>

                </div>
                <div className='boxes' onClick={(e)=>{toggle(e,1)}}>
                    
                </div>
                <div className='boxes' onClick={(e)=>{toggle(e,2)}}>
                    
                </div>
            </div>

            <div className='row2'>
                <div className='boxes' onClick={(e)=>{toggle(e,3)}}>

                </div>
                <div className='boxes' onClick={(e)=>{toggle(e,4)}}>
                    
                </div>
                <div className='boxes' onClick={(e)=>{toggle(e,5)}}>
                    
                </div>
            </div>
            <div className='row3'>
                <div className='boxes' onClick={(e)=>{toggle(e,6)}}>

                </div>
                <div className='boxes' onClick={(e)=>{toggle(e,7)}}>
                    
                </div>
                <div className='boxes' onClick={(e)=>{toggle(e,8)}}>
                    
                </div>
            </div>
      </div>
      <button className='reset'>Reset</button>
    </div>
  )
}

export default TicTacToe1
