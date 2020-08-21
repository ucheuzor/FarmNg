import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
  <section id="hero" style={{ backgroundImage: `url(${props.img})` }}>
    <div className="hero-container">
      <div className="text-white">
        <h1 id="hero-text">{props.title}</h1>
        <h3 className="text-right hero-sub"> {props.color ? props.subtitle : props.subtitle}</h3>
        {props.showButton
          ? <Link className="btn btn-success btn-xl text-uppercase" id='btn-link' to={props.link}> {props.buttonText}</Link> : null
        }
      </div>
    </div>
  </section>
);

export default Header;
