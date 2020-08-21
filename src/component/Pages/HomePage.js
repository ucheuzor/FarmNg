import React, { Component } from 'react';
import Header from '../Common/Header';
import img1 from '../Images/farmer.jpg';
import SectionA from '../Common/SectionA';
import Products from '../Common/Products';
import Statistics from '../Common/Statistcs';
import Footer from '../Common/Footer';
import Navigation from '../Common/Navigation';


export class HomePage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header
          subtitle={
            <h3>Join the platform and help achieve our<br />
            goal of Global farming practice</h3>
          }
          img = {img1}
          title='Feed the World'
          image={img1}
          link='/donate'
          buttonText='Fund a Farmer'
          showButton={true}
        />
        <SectionA />
        <Products />
        <Statistics />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
