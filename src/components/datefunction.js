import React from 'react';

export default class datefunction extends React.Component{

    zerofunction(){
        let newDate = new Date()
      let date = newDate.getDate();
      let zero = '';
        if(date<10){
          zero='0';
        }
        else{
          zero='';
        }
        return zero;
      }
}