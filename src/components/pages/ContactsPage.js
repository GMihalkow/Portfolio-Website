import React, { Component } from 'react';
import SocialMediaButtons from '../partials/SocialMediaButtons';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
import './css/about.css';
import './css/contact.css';

export class ContactsPage extends Component {
    render() {
        
const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 42.698334, lng: 23.319941 }}
    >
      <Marker
        position={{ lat: 42.698334, lng: 23.319941 }}
      />
    </GoogleMap>
  ));
        return (
            <section>
                <section className="card">     
                    <ul className="contact-content">
                        <li><strong>Phone:</strong><span>0894321322</span></li>
                        <li><strong>Email:</strong><span>test@email.com</span></li>
                        <li><strong>Address:</strong><span>Sofia, Bulgaria</span></li>
                        <li><strong>Country:</strong><span>Bulgaria</span></li>
                    </ul>
                    <section className="map-wrapper">
                    <MapWithAMarker
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDZebBw7ztkes3eSXTsrvZCEN7zzj2tQho&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `20rem`, padding: `1rem` }} />}
                        containerElement={<div style={{ height: `20rem`, padding: `1rem` }} />}
                        mapElement={<div style={{ height: `100%`, padding: `5rem`, margin: `0 1rem`, width:`auto` }} />}
                    />
                    </section>
                    <SocialMediaButtons />
                </section>
            </section>
        )
    }
}

export default ContactsPage;