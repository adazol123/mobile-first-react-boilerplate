import React from 'react'
import { buttons } from '../components/Button/buttons'


export const Components = () => {
   
    return (
        <div className=''>
            <div className="container-full flex-start-column flex-start-bottom-left  h-md p-xl"
                style={{ background: 'url(https://images.unsplash.com/photo-1623660128509-720fc7f90317?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)', backdropFilter: 'opacity(0.1)'}}
            >

                <h3 className='color-gray-100'>Button Components</h3>
                <p className='color-gray-300'>This are some button components</p>
            </div>
            <div className="px-lg my-xl">
            {buttons.map((button,index) => (
                <div key={index} className='flex-center flex-start-column w-sm gap-sm my-xl p-lg container-xs card'>
                {/* <h3 className='my-md'>{button.title}</h3> */}
                <p className='color-gray-500 my-md'>{button.title}</p>
                <button className={button.class}>{button.title}</button>
                </div>
            ))}
            </div>
        </div>
    )
}
