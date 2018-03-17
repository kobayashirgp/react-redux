import React from 'react'
import Header from '../commom/template/header'
import Sidebar from '../commom/template/sidebar'
import Footer from '../commom/template/footer'
import Messages from '../commom/msg/messages'
export default props => (
    <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
             {props.children}
        </div>
        <Footer />
        <Messages />
    </div>
)