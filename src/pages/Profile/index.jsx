import React from "react";
import DefaultProfile from "./DefaultProfile";
import BusinessProfile from "./BusinessProfile";

function Profile (){
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user.role);
    return user.role === 'USER_BUSINESS' ? (
        <BusinessProfile/>
    ) : (
        <DefaultProfile/>
    )
}

export default Profile;