import React from "react";



function SubmitButton(){
    return(
        <div>
            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
            </p>
        </div>
    )
}

export default SubmitButton