import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Dada Benjamin",
        bio: "A software developer with a passion for coding.",
        imgSrc: "public/new.jpg",
        profession: "Software Engineer"
      },
      shows: false,
      mountedTime: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { Person, shows, mountedTime } = this.state;
    return (
      <div className="App" style={{ textAlign: "center", justifyItems: "center"}}>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div>
            <img src={Person.imgSrc} alt="Profile" style={{ width: "200px",  borderRadius: "52%"}} />
            <h1>{Person.fullName}</h1>
            <p>{Person.bio}</p>
            <h2>{Person.profession}</h2>
          </div>
        )}
        <div>
          <h3>Component Mounted Time: {mountedTime} seconds</h3>
        </div>
      </div>
    );
  }
}

export default App;
