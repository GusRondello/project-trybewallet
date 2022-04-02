import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWalletCurrency } from '../actions';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      description: '',
    };
  }

  componentDidMount() {
    const { action } = this.props;
    action();
  }

    handleInputText = ({ target }) => {
      const { name, value } = target;

      this.setState({
        [name]: value,
      });
    }

    render() {
      const { currencies } = this.props;
      const { valor, description } = this.state;
      return (
        <form>
          <label htmlFor="valor">
            Valor:
            <input
              type="number"
              data-testid="value-input"
              name="valor"
              value={ valor }
              onChange={ this.handleInputText }
            />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select
              name="moeda"
              data-testid="currency-input"
              id="moeda"
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
          <label htmlFor="metodo">
            Método de Pagamento:
            <select
              name="metodo"
              data-testid="method-input"
            >
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
              <option value="dinheiro">Dinheiro</option>
            </select>
          </label>
          <label htmlFor="tag">
            Categoria:
            <select
              name="tag"
              data-testid="tag-input"
            >
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              data-testid="description-input"
              name="description"
              value={ description }
              onChange={ this.handleInputText }
            />
          </label>
        </form>
      );
    }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  action: () => dispatch(fetchWalletCurrency()),
});

Form.propTypes = {
  action: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
