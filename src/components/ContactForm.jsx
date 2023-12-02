// Make sure to run npm install @formspree/react

import { useForm, ValidationError } from '@formspree/react';


const  ContactForm = () => {
  const [state, handleSubmit] = useForm("moqodgdq");
  if (state.succeeded) {
      return <div className='contact-form'><p>شكرا لتواصلك معنا</p></div>;
  }
  return (
      <div className='contact-form'>
        <p>تواصل معنا</p>
      <form onSubmit={handleSubmit}>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='البريد الإلكتروني'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='الرسالة'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        إرسال
      </button>
    </form>
    </div>
  );
}

export default ContactForm;