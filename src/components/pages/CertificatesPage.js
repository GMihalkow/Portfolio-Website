import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './css/about.css';
import './css/certificates.css';

export class CertificatesPage extends Component {
    render() {
        const images = [
            {
              original: require('./img/cert.jpg')
            },
            {
                original: require('./img/cert.jpg')
              }
          ]

        return (
            <section>
                <section className="certificates-wrapper"> 
                    <section className="certificates-description">
                        <header>
                            <h2>Certification</h2>
                            <hr/>
                        </header>
                        <p>
                            These are my certificates from the Software University (<strong><a href="#">SoftUni</a></strong>) in Sofia, Bulgaria.
                        </p>
                    </section>
                    <section className="certificates-section">
                        <section class="gallery-container">
                            <ImageGallery items={images} showPlayButton={false} showThumbnails={false} />
                        </section>
                    </section>        
               </section>    
            </section>
        )
    }
}

export default CertificatesPage;