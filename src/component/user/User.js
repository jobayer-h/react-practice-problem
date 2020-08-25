import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus} from '@fortawesome/free-solid-svg-icons';
import './User.css';
const User = (props) => {
    const {name , income , pic} = props.user;
    const buttonhandler = props.button;
    return (
        <div className="main">
            <div className="picture">
                <div className="picture-box">
                    <img src={pic} alt=""/>
                </div>
            </div>
            <div className="info">
                <div className="info-box">
                    <h3>Name : {name}</h3>
                    <h4>Monthly Income : {income}</h4>
                    <button onClick={() => buttonhandler(props.user)}><FontAwesomeIcon icon={faUserPlus} /> add Friend</button>
                </div>
            </div>
        </div>
    );
};

export default User;