import React from "react";
import SubmitButton from "./SubmitButton";
import Registration from "./Registration";

export default function DefReg(){
    return(
        <div className="form-group">
            <Registration/>
            <div className="form-group">
                <label>Имя пользователя</label>
                <input type="text" className="form-control" placeholder="Name" />
            </div>

            <div className="form-group">
                <label>Город</label>
                <input type="text" className="form-control" placeholder="City" />
            </div>

            <div className="form-group">
                <label>Дата рождения</label>
                <input type="date" className="form-control" placeholder="bDay" />
            </div>
            <SubmitButton/>
        </div>
    )
}