import React ,{ Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../commom/template/contentHeader'
import Content from '../commom/template/content'
import Tabs from '../commom/tab/tabs'
import TabsHeader from '../commom/tab/tabsHeader'
import TabsContent from '../commom/tab/tabsContent'
import TabHeader from '../commom/tab/tabHeader'
import TabContent from '../commom/tab/tabContent'
import BillingCycleList from './billingCycleList'
import { init , create , update , remove } from './billingCycleActions'
import BillingCycleForm from './billingCycleForm'
class BillingCycle extends Component {
    componentWillMount(){
        this.props.init()
    }
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <BillingCycleList />
                            </TabContent> 
                            <TabContent id='tabCreate'>
                                <BillingCycleForm onSubmit={this.props.create} submitLabel='Incluir' submitClass='primary'/>
                            </TabContent> 
                            <TabContent id='tabUpdate'>
                                <BillingCycleForm onSubmit={this.props.update} submitLabel='Alterar' submitClass='info'/>
                            </TabContent> 
                            <TabContent id='tabDelete'>
                                <BillingCycleForm readOnly={true} onSubmit={this.props.remove} submitLabel='Excluir' submitClass='danger'/>
                            </TabContent> 
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({init , create, update , remove},dispatch)

export default connect(null,mapDispatchToProps)(BillingCycle)

