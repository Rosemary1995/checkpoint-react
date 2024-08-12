import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate software developer.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Software Engineer'
      },
      show: false,
      intervalTime: 0
    };
    this.timer = null;
  }

  componentDidMount() {
    // Start interval timer when the component mounts
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        intervalTime: prevState.intervalTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear interval timer when the component unmounts
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  render() {
    const { person, show, intervalTime } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? 'Hide' : 'Show'} Profile
        </button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since component mounted: {intervalTime} seconds</p>
      </div>
    );
  }
}

export default App;
