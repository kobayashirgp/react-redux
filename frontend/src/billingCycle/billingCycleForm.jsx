import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field , formValueSelector} from 'redux-form'
import labelAndInput from '../commom/form/labelAndInput'
import { init } from './billingCycleActions'
import ItemList from './itemList'
import Summary from './summary'
class BillingCycleForm extends Component {
    calculateSummary(){
        const sum = (t , v) => t + v

        return {
            sumOfCredits : this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts : this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }
    render() {
        const { handleSubmit ,readOnly , credits , debts} = this.props
        const { sumOfCredits , sumOfDebts } = this.calculateSummary()
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field readOnly={readOnly} name='name' component={labelAndInput} label='Nome' placeholder='Informe o nome' cols='12 4' />
                    <Field readOnly={readOnly} name='month' component={labelAndInput} label='Mês' placeholder='Informe o nome' cols='12 4'/>
                    <Field readOnly={readOnly} name='year' component={labelAndInput} label='Ano' placeholder='Informe o nome' cols='12 4'/>
                    <Summary credit={sumOfCredits} debt={sumOfDebts}/>
                    <ItemList list={credits} cols="12 6" readOnly={readOnly} field='credits' legend='Créditos'/>
                    <ItemList list={debts} cols="12 6" readOnly={readOnly} showStatus={true} field='debts' legend='Débitos'/>
                </div>
                
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
               
            </form>
        )
    }
}


 BillingCycleForm = reduxForm({form:'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm);
 const selector = formValueSelector('billingCycleForm')

 const mapStateToProps = state => ({
     credits : selector(state,'credits'),
     debts : selector(state,'debts')
    })
 const mapDispatchToProps = dispatch => bindActionCreators({init},dispatch)
 export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleForm)