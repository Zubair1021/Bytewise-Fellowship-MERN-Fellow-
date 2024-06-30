
import React,{useEffect,useState}from 'react';
import './App.css';
import HOC from './HOC';


const UserList = ({data}) => {
    let renderUsers = data.map((user) => {
        return (
            <div key={user.id}>
                <p>
                    <strong>{user.name}</strong>
                </p>
            </div>
        );
    });
    return(

          <div className="Userlist">
            <div> {renderUsers}</div>
            </div>

    );


};
const SearchUser = HOC(UserList,'users');

export default SearchUser;