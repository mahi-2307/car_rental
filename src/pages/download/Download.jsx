import React from 'react'
import "./Download.scss"
import Img1 from "../../assets/Img1.png"
import Img2 from "../../assets/Img2.png"
function Download() {
    return (
      <>
        <section className="download-section">
          <div className="container">
            <div className="download-text">
              <h2>Download our app to get most out of it</h2>
              <p>
                Get the added features in our mobile app and be updated.
              </p>
              <div className="download-text__btns">
                <img alt="download_img" src={Img2} />
                <img alt="download_img" src={Img1} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

export default Download