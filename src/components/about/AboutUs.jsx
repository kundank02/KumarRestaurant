import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">At Kumar Restaurant, we take pride in offering a distinguished dining experience that is a testament to our passion for culinary excellence. Nestled in the heart of Delhi, our restaurant is renowned for its sophisticated ambiance, impeccable service, and an array of delectable dishes that delight the senses.
</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Steeped in a rich legacy of culinary excellence, Kumar Restaurant has been a prominent fixture in the dining scene since its inception. Established in 2001, our restaurant has continuously evolved, setting new standards of gastronomic innovation and becoming a beloved destination for discerning food enthusiasts.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
