import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { converteMoedas } from '../actions/';
import ListaMoedas from './ListaMoedas';

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.onValueChange = this.onValueChange.bind(this);
    this.onValueDeChange = this.onValueDeChange.bind(this);
    this.onValueParaChange = this.onValueParaChange.bind(this);
    this.envia = this.envia.bind(this);

    this.state = {
      de: '',
      para: '',
      valor: 0
    }
  }

  onValueChange(e) {
    this.setState({valor: e.target.value});
  }

  onValueDeChange(e) {
    this.setState({de: e.target.value});
  }

  onValueParaChange(e) {
    this.setState({para: e.target.value});
  }

  envia() {
    const dados = {
      de: this.state.de,
      para: this.state.para,
      valor: this.state.valor
    }

    this.props.converteMoedas(dados);
  }

  render() {
    return (
      <form>
        <div className='row justify-content-md-center'>
          <div className='input-group input-group-lg'>
            <input type='number' className='form-control' onChange={(e) => this.onValueChange(e)} />
          </div>
        </div>
        <div className='row form-group'>
          <div className='col-md-6'>
            <label htmlFor='formSelectDE'>De:</label>
            <ListaMoedas origem='de' onValueChange={this.onValueDeChange}/>
          </div>
          <div className='col-md-6'>
            <label htmlFor='formSelectPARA'>Para:</label>
            <ListaMoedas origem='para' onValueChange={this.onValueParaChange}/>
          </div>
        </div>
        <div className='row'>
          <button
            type='button'
            className='btn btn-primary btn-lg btn-block'
            onClick={this.envia}
          >
            Converter
          </button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({converteMoedas}, dispatch);
}

export default connect(null, mapDispatchToProps)(Formulario);