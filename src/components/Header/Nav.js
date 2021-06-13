import React from 'react'
import { Theme } from '../Theme'
import { solarize } from '../asset-icons'

export const Nav = () => {
    return (
        <div className='flex-space-between-row p-md fixed-top nav-bg'>
            <h5>Boilerplate</h5>
            <Theme>{solarize}</Theme>
        </div>
    )
}
