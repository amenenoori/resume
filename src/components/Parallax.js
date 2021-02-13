import React, { Component } from "react";

import "./Parallax.css";

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = {
        parallaxData: [-5, 5, 2, 6, -2, -9, 6, -7, -5, 5, 2]
    }
  }
  // componentDidMount() {
  //   document.addEventListener("mousemove", (e) => {
  //     this.state.parallaxData.map((speed) => (
  //       this.setState({ 
  //         x: (window.innerWidth - e.pageX*speed)/100,
  //         y: (window.innerWidth - e.pageY*speed)/100,
  //         styles: `transform: translate(${this.state.x}px, ${this.state.y}px)`
  //       })
  //     ));
  //   });
  // }
  render() {
    return (
      <div className="parallax">
        {this.state.parallaxData.map((value, index) => (
          <img 
            src={`images/${index+1}.svg`} 
            data-speed={value} 
            className={`layer p${index+1}`}
            alt=""
            // style={this.state.styles}
          />
        ))}
      </div>
    );
  }
}

export default Parallax;
