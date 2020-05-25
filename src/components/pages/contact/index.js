import React, { useRef } from "react";
import "./style.css";

function Contact() {
    const namRef = useRef();
    const bodyRef = useRef();
    const emailRef = useRef();

    const submit = e => {
        e.preventDefault();
        let email = "benjamin.malkmus@outlook.com";
        let subject = namRef.current.value + "  " + emailRef.current.value ;
        let body = bodyRef.current.value;
        window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' +   body;

        namRef.current.value = "";
        bodyRef.current.value = "";
        emailRef.current.value="";


    }

    return (
        <div className="container contextCont">
        <div className="row">
            <div className="col-md-12">
                <h1 id ="contTitle">Contact</h1>
                <h5>Benjamin.Malkmus@outlook.com</h5>
            </div>
        </div>

        <form>
            <div className="form-group" id="subjectName">
                <label>Name</label>
                <input type="text" className="form-control" id="formname" ref = {namRef} placeholder="Joe Dirt"/>
            </div>

            <div className="form-group" id="subjectAdd">
                <label>Email address</label>
                <input type="email" className="form-control" id="formemail" ref = {emailRef} placeholder="joedirte@hemi.com"/>
            </div>

            <div className="form-group" id="mailBody">
                <label>Message</label>
                <textarea className="form-control" id="formmessage" ref = {bodyRef} rows="6"></textarea>
            </div>

        </form>
        <button className="btn btn-primary contact-button" id="submitMail" type="submit" onClick = {submit}>Submit</button>
    </div>
    )
}

export default Contact;