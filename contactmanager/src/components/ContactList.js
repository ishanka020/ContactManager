import React from 'react';
import CardContact from './ContactCard';

const ContactList =(props) =>{
    console.log(props);
    const deleteContactHandler=(id) =>{
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) =>{
        return(
            <CardContact contact={contact}  clickHandler={deleteContactHandler}/>
        )
            
    }
    )
    

    return(
        <div className='ui called list'>
            {renderContactList}
        </div>
    )
    }


export default ContactList;