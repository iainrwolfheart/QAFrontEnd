import React from 'react';
import '../placestogo.css';
import tacobell from '../assets/tacobell.jpg';
import oscars from '../assets/oscars.jpg';
import cinebar from '../assets/cinebar.jpg';
import luigis from '../assets/luigis.jpg';

function placestogo () {
    return (
        <div>
        <h1 className="placesheader">Places to go</h1>
        <h3 className="places1">Luigi's</h3>
        <a href="https://www.luigisrestaurant.com"><img className="luigis" src={luigis} style={{height:200, width:300}}></img></a>
        <p className="luigidesc"> Luigi's is a restaurant serving <br></br>only the finest italian food. <br></br>It opened up in 2014 and has<br></br> been growing ever since.<br></br> Buon Appetito! <br></br><br></br>T: 01249652213</p>
        <h3 className="places2">Taco Bell</h3>
        <a href="https://www.tacobell.com"><img className="tacobell" src={tacobell} style={{height:200, width:300}}></img></a>
        <p className="tacobelldesc"> Taco Bell has had innovation on its mind <br></br>since Glen Bell started serving tacos at<br></br> the first location in 1962 in California. <br></br>Since then, they’ve grown to be a culture-centric brand that provides craveable,<br></br> affordable Mexican-inspired food with<br></br> bold flavors.<br></br><br></br>T: 01249989557</p>
        <h3 className="places3">Cinebar</h3>
        <a href="https://www.blueroomcinebar.com/"><img className="cinebar" src={cinebar} style={{height:200, width:300}}></img></a>
        <p className="cinebardesc"> Cinebar is a modern cocktail <br></br>bar located next to QA Cinemas. <br></br>Those who have a cinema <br></br>ticket can benefit <br></br>from reduced prices!<br></br><br></br> T: 01249882197</p>
        <h3 className="places4">Oscar's</h3>
        <a href="https://www.oscars.com"><img className="oscars" src={oscars} style={{height:200, width:300}}></img></a>
        <p className="oscardesc">Oscar's is a music bar with<br></br> a design focussed on the arts. <br></br>There are live performances every<br></br> Friday and Saturday.<br></br> <br></br>T: 01249491154</p>
        <br></br>
        </div>
    )
}

export default placestogo;