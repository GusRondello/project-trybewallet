import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      description: '',
      currencies: 'BRL',
    };
  }

    handleInputText = ({ target }) => {
      const { name, value } = target;

      this.setState({
        [name]: value,
      });
    }

    render() {
      const { valor, description, currencies } = this.state;
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
            Moeda:
            <select
              value={ currencies }
              name="moeda"
              data-testid="currency-input"
            >
              <option value="BRL">BRL</option>
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
const mapStateToProps = (dispatch) => ({
  action: (email) => dispatch(userEmailRequest(email)),
});

export default connect(mapStateToProps)(Form);
