import React from 'react'
import style from "./middle.module.css"

const Middle = () => {
    return (
        <div className={style.middle_container}>
            <h1>Well to simple project</h1>
            <h1 class="text-2xl font-bold underline">
                Hello world!
            </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quam quae voluptatum dolorem, ut nisi facere aliquam quo, beatae eius optio sint nostrum adipisci! Tempore vitae at nesciunt voluptatem illo.</p>
            <hr />
            <ul className='block list-none g-5 text-xl justify-center'>
                <li>sami</li>
                <li>esa</li>
                <li>shife</li>
                <li>bele</li>
                <li>dav</li>
            </ul>
        </div>
    )
}

export default Middle