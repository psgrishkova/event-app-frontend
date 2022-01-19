import React from "react";
import Def from "./DefProfile";
import Bus from "./BusProfile";

function ViewProfile (){
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user.role);
    return user.role === 'USER_BUSINESS' ? (
        <Bus/>
    ) : (
        <Def/>
    )
}

export default ViewProfile;