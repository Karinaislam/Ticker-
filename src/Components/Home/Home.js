import React, { Component } from "react";
import Display from "../Display/Display";
import "./Home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providers: [],
      latestData: [],
      index:1
    };
  }
  componentDidMount() {
    this.setState({ providers: this.getDummyData() });
    setInterval(() => {
        const current = this.state.providers;
        this.setState({ providers: this.getDummyData() });
        console.log("new data");
    }, 10000);
  }
  getDummyData() {
    const freshData = [];
    for (let i = 0; i < 15; i++) {
      freshData.push({
        id: i + 1,
        url: "",
        price: 11 * Math.random(),
        change: Math.random()
      });
    }
    return freshData;
  }
  render() {
    return (
      <div className="ticker-wrap">
        <div className="ticker">
          {this.state.providers.map(provider => (
            <Display
              key={provider.id}
              data={provider}
              className="ticker__item"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
