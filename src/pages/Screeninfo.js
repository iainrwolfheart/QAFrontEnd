import React from 'react';
import '../Screeninfo.css';
import disabled from '../assets/disabled.png';
import threed from '../assets/3d.png';
import vip from '../assets/VIP.png';
import screen1 from '../assets/screen1final.png';
import screen2 from '../assets/screen2final.png';
import cinemascreen1 from '../assets/cinemascreen1.jpg';
import cinemascreen2 from '../assets/cinemascreen2.jpg';

function Screeninfo() {
    return (
        <div className="screens">
        <h1 className="screenone">Screen 1</h1>
        <img className="screen1" src={screen1} style={{height:400, width:400}}></img>
        <img className="cinemascreen1" src={cinemascreen1} style={{height:350, width:450}}></img>
        <img className="disabled1" src={disabled} style={{height:90, width:70}}></img>
        <img className="threed" src={threed} style={{height:90, width:70}}></img>
        <h1 className="screentwo">Screen 2 (Deluxe)</h1>
        <img className="screen1" src={screen2} style={{height:400, width:400}}></img>
        <img className="cinemascreen2" src={cinemascreen2} style={{height:350, width:450}}></img>
        <img className="disabled2" src={disabled} style={{height:90, width:70}}></img>
        <img className="vip" src={vip} style={{height:80, width:80}}></img>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
    )
}

export default Screeninfo;