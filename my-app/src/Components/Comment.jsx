import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

function Block() {
  
    const [profile, SetProfile] = useState('');
    const [file, SetFile] = useState('');
  
    useEffect(async() => {
      
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      let text = await response.json();

      SetFile(text);

      SetProfile(text.map(information => 
        <div key={information.id} className="block">
            <h3>Full name: {information.name}</h3>
            <h3>City: {information.address.city}</h3>
            <h3>Company: {information.company.name}</h3> 
            <nav><Link to={`/profile/${information.id}`}>More</Link></nav>
        </div>
      ));
    }, []);
    
    useEffect(() => {
      if (file == '') return;
      SetProfile(file.map(information => 
        <div key={information.id} className="block">
            <h3>Full name: {information.name}</h3>
            <h3>City: {information.address.city}</h3>
            <h3 className="last">Company: {information.company.name}</h3> 
            <nav><Link to={`/profile/${information.id}`}>More</Link></nav>
        </div>
      ));
    });

    function Byname(){
      console.log(file);
      SetFile(file.sort(function (a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }));
    }

    function Bycity(){
      console.log(file);
      SetFile(file.sort(function (a, b) {
        let cityA = a.address.city.toUpperCase();
        let cityB = b.address.city.toUpperCase(); 
        if (cityA < cityB) {
          return -1;
        }
        if (cityA > cityB) {
          return 1;
        }
        return 0;
      }));
    }

  return (
    <div className="comments">
      <div className="buttons">
        <button onClick={Byname}>Sort by name</button>
        <button onClick={Bycity}>Sort by city</button>
      </div>
      <div className="Block">
        <h2>List of users</h2>
        {profile}
      </div>
    </div>
  );
}

export default Block;