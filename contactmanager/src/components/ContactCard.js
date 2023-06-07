import React from 'react';
import person from "../images/person.png"

const CardContact = (props) =>{
    const {id, name, email} = props.contact;
    return (
        <div className='item'>
            <img className='ui avatar image' src={person} alt="person"></img>
                <div className='contact'>
                    <div className='header'>
                        {name}
                    </div>
                    <div >{email}</div>
                </div>
                <i className='trash alternate outline icon'
                style={{color:"red", marginTop:"7px"}}
                onClick={() => props.clickHandler(id)}></i>
            </div>
    );
}

export default CardContact;