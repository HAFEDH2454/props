import React, { Component } from 'react';
import PropTypes from 'prop-types';
function _profile(props)

{
    
 return (<div style={{color:"blue",textAlign:"center",marginTop:"5%"}}>presente par le fonction <u> profile()</u>: {props.profi}</div>);
}
export  function _handleName (props)
{
    return (<div style={{backgroundColor: "lightblue",textAlign:"center",color:"black"}}>le nom de l'utilisateur presente par fonction <u> handleName()</u> : {props.profi}</div>);
}
_profile.prototype={
    fullName:"tapez votre nom", 
    bio:"tapez votre bio",
    profession:"tapez votre profession"
};

_handleName.prototype={
    props:PropTypes.string
}
_profile.prototype={
    props:PropTypes.string
}
export default _profile;

