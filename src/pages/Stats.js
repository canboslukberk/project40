import React, { Component } from 'react';
import LineChart from '../components/LineChart';
import { Button } from 'react-bootstrap';
import Combobox from '../components/combobox/Main';

class Products extends Component {

  constructor() {
    super();
    this.state = {
      stats: [],
      type: 'Vaka',
      city: 'Hepsi'
    }
  }
  selectStyles = {
    control: provided => ({ ...provided, minWidth: 240, margin: 8 }),
    menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' }),
  };

  render() {
    return (
      <div className='display'>
        <Combobox onCityChange={this.onCityChange}></Combobox>
        <div className='chartButtons'>
          <Button variant="outline-primary" onClick={this.onClickCase}>Vaka</Button>{' '}
          <Button variant="outline-primary" onClick={this.onClickDeath}>Ölüm</Button>{' '}
          <Button variant="outline-primary" onClick={this.onClickRecover}>İyileşen</Button>{' '}
        </div>
        <div className='products'>
          <LineChart type={this.state.type} city={this.state.city} />
        </div>
      </div>
    );
  }

  onCityChange = (city) => {
    this.setState({
      city: city
    })
  }

  onClickCase = () => {
    this.setState({
      type: 'Vaka'
    })
  }

  onClickDeath = () => {
    this.setState({
      type: 'Vefat'
    })
  }

  onClickRecover = () => {
    this.setState({
      type: 'İyileşen'
    })
  }
}



export default Products;
