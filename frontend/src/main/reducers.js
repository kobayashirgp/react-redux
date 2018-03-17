import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../commom/tab/tabReducer'
import AuthReducer from '../auth/authReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'
const rootReducer = combineReducers({
    dashboard:  DashboardReducer,
    tab:TabReducer,
    billingCycle : billingCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth : AuthReducer
})

export default rootReducer