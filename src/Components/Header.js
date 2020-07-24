import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <header style ={getStyle}>
            <h2>TodoList</h2>
            <Link style ={linkStyle} to ="/">Home</Link> | <Link style ={linkStyle} to ="/about">About</Link>
        </header>
    )
    
}
const linkStyle = {
    color:'#ffffff'
}
const getStyle = {
    textAlign:'center',
    display:'block',
    background:'#333',
    color:'#ffffff',
    border:'none'
}
export default header;