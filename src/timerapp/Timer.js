import {Component} from 'react';
class Timer extends Component {
  state = {
    seconds: 0,
  };

  interval = {};

  //   tick = ()=> {
  //     this.setState({
  //         seconds: this.state.seconds+1
  //     })
  //   }
  componentWillUnmount = ()=>{
      clearInterval(this.interval)
  }

  componentDidMount = () => {
    this.interval = setInterval(
      () =>
        this.setState({
          seconds: this.state.seconds + 1,
        }),
      1000
    );
  };

  render() {
    return <div>Seconds Elasped: {this.state.seconds}</div>;
  }
}

export default Timer
