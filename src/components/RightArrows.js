import React from 'react'

const RightArrow = () => {
    return (
        <div className="nextArrow" onClick={props.goToNextCard}>
            <p className='text-2'>Next</p>
        </div>
    )
}

export default RightArrow