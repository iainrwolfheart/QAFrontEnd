import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../GettingHere.css';
import QAExterior from '../assets/QAExterior.png';

const AnyReactComponent = ({ text }) => <div style={{color:'red'}}>{text}</div>;

class FindUs extends Component {
  static defaultProps = {
    center: {
      lat: 51.512535,
      lng: -1.768252,
    },
    zoom: 15
  };

  render() {
    return (
      <form>
        <div>
          <div>
            <h1 className="Ftext">Getting Here</h1>
            </div>
      <div className="Map" style={{height: '50vh', width: '50%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyBjilzhuj5WEPTloQBpD8vPv2O-idymCa4"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={51.512535}
            lng={-1.768252}
            text="QA Cinemas"
          />
        </GoogleMapReact>
      </div>
      <br></br>
      <div className="address">
        <h5 style={{color:'red'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Address </h5>
            <a>Whittingham Drive</a>
            <br></br>
            <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Swindon</a>
            <br></br>
            <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SN4 0QS</a>
            <br></br>
            <br></br>
            </div>
      <div>
      <a href='https://www.google.com/maps/dir/Swindon+Bus+Station,+New+Bridge+Cl,+Swindon+SN1+1HN/Alexandra+House,+Whittingham+Dr,+Wroughton,+Swindon+SN4+0QJ/@51.5372836,-1.7890592,13z/data=!3m1!4b1!4m16!4m15!1m5!1m1!1s0x48714447fc1b5611:0xb743f535c20ed43c!2m2!1d-1.7833392!2d51.5641985!1m5!1m1!1s0x487144d80350b131:0x430f7948ce834367!2m2!1d-1.772587!2d51.5124799!2m1!5e0!3e3'>
      <button type="button" className="DirButton">Get Directions By Bus</button></a>
      <br></br>
      <br></br>
      <h7 style={{color:'white'}}>150 Parking Spaces Available On-Site</h7>
      </div>
      <div className="exterior">
      <img src={QAExterior} style={{height:'50vh', width: '460px' }}></img>
      </div>
      </div>
      </form>
    );
  }
}
export default FindUs;