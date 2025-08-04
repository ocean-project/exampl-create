 import { Appmy,Appmydd,Appmylist,Appform } from './test.jsx'
function Contact() {
 return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, please fill out the form below.</p>
      
      <div className="contact-form-wrapper">
        <Appform />
      </div>
    </div>
  );
}

export default Contact;