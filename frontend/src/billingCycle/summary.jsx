import React, { Component } from 'react';
import Grid from '../commom/layout/grid'
import Row from '../commom/layout/row'
import ValueBox from '../commom/widget/valueBox'

class Summary extends Component {
    render() {
        return (
            <Grid cols='12'>
                <fieldset>
                    <legend>Resumo</legend>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${this.props.credit}`} text='Total de Créditos'/>
                        <ValueBox cols='12 4' color='red'  icon='credit-card' value={`R$ ${this.props.debt}`} text='Total de Débitos'/>
                        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${this.props.credit - this.props.debt}`} text='Valor Consolidado'/>
                    </Row>
                </fieldset>
            </Grid>
        );
    }
}

export default Summary;