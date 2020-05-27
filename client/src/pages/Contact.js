import React from "react";


function Contact() {


  return (
    <div className="container">
      <h3 style={{ textAlign: "center" }}>Contact</h3>
      <hr />
      <br />
      <p className="text-center w-responsive mx-auto mb-5">
        We want your feedback, please let us know how we're doing!
      </p>
      <div className="row">
          <form>
          <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate" />
          <label for="icon_prefix">First Name</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" className="validate" />
          <label for="icon_telephone">Telephone</label>
        </div>
      </div>
      <div class="row">
      <div className="input-field col s6">
          <i className="material-icons prefix">mail</i>
          <input id="icon_mail" type="tel" className="validate" />
          <label for="icon_mail">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">mode_edit</i>
          <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
          <label for="icon_prefix2">Message</label>
        </div>
       
      </div>
      
      {/* <a className="waves-effect waves-light btn">Send</a> */}
          </form>
      </div>
    </div>
  );
}

export default Contact;
