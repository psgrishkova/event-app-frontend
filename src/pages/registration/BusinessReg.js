import React from "react";
import SubmitButton from "./SubmitButton";
import Registration from "./Registration";

export default function DefReg(){
    let companyName = React.createRef();

    function showData(){
        console.log(companyName.current.value)
    }

    return(
        <div className="form-group">
            <Registration/>
            <div className="form-group">
                <label>Название компании</label>
                <input type="text" className="form-control" placeholder="CompanyName" ref={companyName} />
            </div>

            <div className="form-group">
                <label>Город</label>
                <input type="text" className="form-control" placeholder="City" />
            </div>

            <div className="form-group">
                <label>Адрес</label>
                <input type="text" className="form-control" placeholder="Address" />
            </div>
            
            <div>
                <button type="submit" className="btn btn-primary btn-block" onClick={showData}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </div>
        </div>
    )
}