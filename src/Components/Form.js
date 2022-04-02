import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWalletCurrency, getWalletExpenses } from '../actions';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { action } = this.props;
    action();
  }

    handleChange = ({ target }) => {
      const { name, value } = target;

      this.setState({
        [name]: value,
      });
    }

    handleExpenses = () => {
      const { saveExpenses } = this.props;
      saveExpenses(this.state);
      this.setState({
        value: '',
        description: '',
      });
    }

    render() {
      const { currencies } = this.props;
      const { value, description, currency, method, tag } = this.state;
      return (
        <form>
          <label htmlFor="value">
            Valor:
            <input
              type="number"
              data-testid="value-input"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              name="currency"
              data-testid="currency-input"
              id="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              {currencies.map((moeda) => (
                <option
                  value={ moeda }
                  key={ moeda }
                >
                  {moeda}
                </option>
              ))}
            </select>

          </label>
          <label htmlFor="method">
            Método de Pagamento:
            <select
              id="method"
              name="method"
              data-testid="method-input"
              value={ method }
              onChange={ this.handleChange }
            >
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
              <option value="Dinheiro">Dinheiro</option>
            </select>
          </label>
          <label htmlFor="tag">
            Categoria:
            <select
              id="tag"
              name="tag"
              data-testid="tag-input"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              data-testid="description-input"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            onClick={ this.handleExpenses }
          >
            Adicionar despesa
          </button>
        </form>
      );
    }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  action: () => dispatch(getWalletCurrency()),
  saveExpenses: (expenses) => dispatch(getWalletExpenses(expenses)),
});

Form.propTypes = {
  action: PropTypes.func.isRequired,
  saveExpenses: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
