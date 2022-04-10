import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((elemento) => {
            const { currency } = elemento;
            const cambio = elemento.exchangeRates[currency].name.split('/')[0];
            const cotation = elemento.exchangeRates[currency].ask;
            const conversion = elemento.value * cotation;
            return (
              <tr key={ elemento.id }>
                <td>{elemento.description}</td>
                <td>{elemento.tag}</td>
                <td>{elemento.method}</td>
                <td>{parseFloat(elemento.value).toFixed(2)}</td>
                <td>{cambio === 'Dólar Americano' ? 'Dólar Comercial' : cambio}</td>
                <td>{parseFloat(cotation).toFixed(2)}</td>
                <td>{parseFloat(conversion).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button type="button">Editar</button>
                  <button type="button">Excluir</button>
                </td>
              </tr>
            );
          })}

        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any),
}.isRequired;

export default connect(mapStateToProps)(Table);
