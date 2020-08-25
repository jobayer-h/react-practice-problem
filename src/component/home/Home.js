import React, { useState } from 'react';
import './Home.css'
import User from '../user/User';
import Friend from '../friendlist/Friend';
import fakeData from '../../fakeData/index';
const Home = () => {
    const [user, setUser] = useState(fakeData);
    const [friends, setFriend] = useState([]);
    
    const handelAddFriend = (friend) => {
        const newFriends =[...friends, friend]
        setFriend(newFriends);
    }

    
    return (
        <div className="main">
            <div className="user-area">
                {
                    user.map(singleUser => <User button={handelAddFriend} user ={singleUser}></User>)
                }
            </div>
            <div className="friendlist-area">
                <Friend allfriends = {friends}></Friend>
            </div>
        </div>
    );
};

export default Home;