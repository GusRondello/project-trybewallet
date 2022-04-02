import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWalletCurrency } from '../actions';
import Header from '../Components/Header';

class Wallet extends Component {
  componentDidMount() {
    const { action } = this.props;
    action();
  }

  render() {
    return (
      <Header />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  action: () => dispatch(fetchWalletCurrency()),
});

Wallet.propTypes = {
  action: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
