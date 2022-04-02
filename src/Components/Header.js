import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;

    const exchangeValue = expenses.map((moeda) => {
      const { currency } = moeda;
      const cotacao = moeda.exchangeRates[currency].ask;
      return moeda.value * cotacao;
    });

    const totalExpenses = exchangeValue.reduce((acc, cur) => acc + cur, 0);
    return (
      <header>
        <h2
          data-testid="email-field"
        >
          {`Email: ${email}`}
        </h2>
        <h2
          data-testid="total-field"
        >
          {totalExpenses.toFixed(2)}
        </h2>
        <h2
          data-testid="header-currency-field"
        >
          BRL
        </h2>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Header);
