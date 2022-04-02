import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    // const { email, expenses, currencies } = this.props;
    const { email } = this.props;
    const initialExpense = 0;
    const initialCurrency = 'BRL';
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
          {initialExpense}
        </h2>
        <h2
          data-testid="header-currency-field"
        >
          {initialCurrency}
        </h2>
      </header>
    );
  }
}

const mapStateToProps = (store) => ({
  email: store.user.email,
  currencies: store.wallet.currencies,
  expenses: store.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  // currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps)(Header);
