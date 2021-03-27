import React from 'react'
import {NavLink} from 'react-router-dom'

const T = (props) => {
    return (
        <div className="t">
            <div className="container">
                <div className="t__body">
                    <div className="t__done"><span></span></div>
                    <div className="main__subtitle t__subtitle">Дякуєм за твій відгук!</div>
                    <NavLink to="/" className="main__btn t__btn">Написати ще</NavLink>
                </div>
            </div>
        </div>
    )
}

export default T