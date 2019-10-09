import React  from 'react'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'

import { Card,NoInternet } from '../../components'

function NewsList() {
    return (
        <div>NewsList</div>
    )
}

const stateToProps = (state) => {
    console.log(state)
    return {
        state
    }
}

export default NewsList
