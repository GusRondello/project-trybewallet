import React, { Component } from 'react';
import Form from '../Components/Form';
import Header from '../Components/Header';
import Table from '../Components/Table';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}

export default Wallet;
