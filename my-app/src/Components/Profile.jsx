import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function Profile() {

  const [profile, SetProfile] = useState('');

  const params = useParams();

  const prodId = params.id;

  useEffect(async() => {
  
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let text = await response.json();

   let info = text.find(p=>p.id == prodId)

    SetProfile(() => 
      <div className="Profile">
        <div>Name</div>
        <input type="text" readOnly placeholder={info.name}></input>
        <div>User name</div>
        <input type="text" readOnly placeholder={info.username}></input>
        <div>E-mail</div>
        <input type="text" readOnly placeholder={info.email}></input>
        <div>Street</div>
        <input type="text" readOnly placeholder={info.address.street}></input>
        <div>City</div>
        <input type="text" readOnly placeholder={info.address.city}></input>
        <div>Zip code</div>
        <input type="text" readOnly placeholder={info.address.zipcode}></input>
        <div>Phone</div>
        <input type="text" readOnly placeholder={info.phone}></input>
        <div>Website</div>
        <input type="text" readOnly placeholder={info.website}></input>
        <div>Comment</div>
        <input type="text" className="comment"></input>
      </div>
    );
  });

  function Edit(){
    let input = document.querySelectorAll('input');
    console.log(input);
    for (let element of input){
      element.removeAttribute("readOnly");
    }
  }

  return (
    <div className="full">
      <div className="container">
        <h2 className="userprofile">User profile</h2>
        <button onClick={Edit} className="Edit">Edit</button>
        {profile}
      </div>
    </div>
  );
}

export default Profile;