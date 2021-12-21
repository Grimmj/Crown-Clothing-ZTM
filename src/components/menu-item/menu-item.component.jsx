import React from 'react'

const MenuItem = ({ title }) => (
    <div className="menu-item">
        <div className="content">
            <div className="title">
                {props.title}
            </div>
            <div className="subtitle">
                SHOP NOW
            </div>
        </div>
    </div>
);

export default MenuItem;