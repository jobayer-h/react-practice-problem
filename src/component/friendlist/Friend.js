import React from 'react';
import './Friend.css';
const Friend = (props) => {
    const friends = props.allfriends;
    let totalIncome = 0;
    friends.map(friend => {
        totalIncome = totalIncome + Number(friend.income);
    })
    return (
        <div>
            <div className="friendlist">
                <h1>Friend added: {friends.length}</h1>
                <h2>All Friends total income: {totalIncome}</h2>
            </div>
        </div>
    );
};

export default Friend;