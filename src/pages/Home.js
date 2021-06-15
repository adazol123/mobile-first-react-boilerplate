import React from 'react'
import { Card } from '../components/Card/Card'

export const Home = () => {

    return (
        <div className='flex-center-column gap-sm test'>
            <h1 className='title'> Welcome!</h1>
            <p> Let's Code Together </p>
            <p className="text"></p>

            <Card >
                <h4  style={{color : 'var(--color-gray-700)'}}>Progressive Web Apps</h4>
                <p className='color-gray-500 my-md font-default'>An application software delivered through web, built using common web technologies including HTML, CSS and JavaScript. 🤪 </p>
                <button className='button-solid-md px-lg font-micro'>Docs</button>
            </Card>
            
            <Card >
                <h4 style={{color : 'var(--color-gray-700)'}}>API Routes</h4>
                <p className='color-gray-500 my-md font-default'>Optionally create API endpoints to provide backend functionality.
                🐶   </p>
                <button className='button-outline-md px-lg font-micro'>Docs</button>
            </Card>
            <Card >
                <h4 style={{color : 'var(--color-gray-700)'}}>API Routes</h4>
                <p className='color-gray-500 my-md font-default'>Optionally create API endpoints to provide backend functionality.
                🐶   </p>
                <button className='button-ghost-md px-lg font-micro'>Docs</button>
            </Card>

            <button className='button-ghost-md px-lg font-micro'>Docs</button>

            <Card >
                <h4 style={{color : 'var(--color-gray-700)'}}>API Routes</h4>
                <p className='color-gray-500 my-md font-default'>Optionally create API endpoints to provide backend functionality.
                🐶   </p>
                <button className='button-link-xs px-lg font-micro'>Docs</button>
            </Card>
            

            
        </div>
    )
}
