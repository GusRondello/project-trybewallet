import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { userEmailRequest } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
  }

  handleInputText = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleLogin= () => {
    const { history, action } = this.props;
    const { email } = this.state;
    action(email);
    return history.push('/carteira');
  }

  render() {
    const { email, senha } = this.state;
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    // regex validação e-mail: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const senhaMin = 6;

    const validarInputs = regexEmail.test(email) && senha.length >= senhaMin;

    return (
      <div>
        <input
          type="text"
          data-testid="email-input"
          placeholder="E-mail"
          name="email"
          value={ email }
          onChange={ this.handleInputText }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          name="senha"
          value={ senha }
          onChange={ this.handleInputText }
        />
        <button
          type="button"
          disabled={ !validarInputs }
          onClick={ this.handleLogin }
        >
          Entrar
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  action: (email) => dispatch(userEmailRequest(email)),
});

Login.propTypes = {
  history: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
