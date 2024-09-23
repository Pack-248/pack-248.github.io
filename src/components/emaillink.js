import React from 'react';

const EmailLink = ({className,personName,personEmail}) => {
    console.log(personEmail);
    if(personEmail !== "" && personEmail !== null){
        return (<a className={className} href={'mailto://' + personEmail}>{personName}</a>)
    } else
    return (personName);
}

export default EmailLink;