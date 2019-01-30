import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      from: "",
      to: "",
      factor: 70,
      flour: "durum"
    }
  } // end of constructor

  flourChange = (event) => {
    this.setState({flour: event.target.value});
    switch (event.target.value) {
      case "durum":
        this.setState({factor: 70}, this.flourEffect);
        break;
      case "puolikarkea":
        this.setState({factor: 60}, this.flourEffect);
        break;
      case "pizzajauho":
        this.setState({factor: 80}, this.flourEffect);
        break;
      default:
    }
    this.flourEffect();
  }
  fromChange = (event) => {
    this.setState({from: event.target.value});
    this.setState({to: (event.target.value/this.state.factor).toFixed(2)});
  }
  toChange = (event) => {
    this.setState({to: event.target.value});
    this.setState({from: (event.target.value*this.state.factor).toFixed(0)});
  }
  flourEffect = () => {
    this.setState({to: (this.state.from/this.state.factor).toFixed(2)});
  }


  render() {

    const flourSelect = () =>{
      return (
        <div className="flour-select">
          <select value={this.state.flour} onChange={this.flourChange}>
            <option value="durum">Durum</option>
            <option value="puolikarkea">Puolikarkea</option>
            <option value="pizzajauho">Pizzajauho</option>
          </select>
        </div>
      )
    }

    const volume = () =>{
      return(
        <div className="volume">
          <input min="0" max="100000" type="number" value={this.state.to} onChange={this.toChange}></input>
        </div>
      )
    }
    const weight = () =>{
      return(
        <div className="weight">
          <input min="0" max="100000" type="number" value={this.state.from} onChange={this.fromChange}></input>
        </div>
      )
    }

    return (
      <div className="flour-conversion"> {/*MASTER DIV*/}
        <h1>Flour mass/volume converter</h1>
        <table>
          <thead>
            <tr>
              <td><h2>Grams</h2></td>
              <td><h2>Flour</h2></td>
              <td><h2>Deciliters</h2></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{weight()}</td>
              <td>{flourSelect()}</td>
              <td>{volume()}</td>
            </tr>
          </tbody>
        </table>
      </div> // MASTER DIV
    )
  }
}

export default App;
