import React from 'react'
import T from './t'
import {connect} from 'react-redux'
import './t.css'

const TContainer = props => {
    return (
        <T {...props} />
    )
}

const mapState = (state) => ({

})

const mapDispatch = {}

export default connect(mapState, mapDispatch)(TContainer)