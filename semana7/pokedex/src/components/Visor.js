import React from 'react'
import PropTypes from 'prop-types'
import ActionButton from './ActionButton'
import SearchInput from './SeachInput'

export default function Visor(props) {
    const isVisorActive = props.isVisorActive

    const renderActionButton = () => {
        if (isVisorActive) {
            return(
                <SearchInput />
            )
        }
        return (
            <ActionButton action={ props.toggleVisor }/>
        )
    }
    return (
        <div
            className="visor"
            style={{ height: isVisorActive ? '420px' : '' }}>
            { renderActionButton() }
        </div>
    )
}

Visor.propTypes = {
    isVisorActive: PropTypes.bool.isRequired,
    toggleVisor: PropTypes.func.isRequired
}