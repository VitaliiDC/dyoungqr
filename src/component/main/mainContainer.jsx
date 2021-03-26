import React from 'react'
import {connect} from 'react-redux'
import Main from './main'
import './main.css'
import {sendMailThunk} from '../../redux/main'

const MainContainer = (props) => {
    return (
        <Main {...props} />
    )
}

const mapState = (state) => ({

})

const mapDispatch = {sendMailThunk}

export default connect(mapState, mapDispatch)(MainContainer)