import React, { useRef } from 'react';
import classes from './ContactUs.module.css';

function ContactUs() {

  
        const titleRef = useRef('');
        const openingTextRef = useRef('');
        const releaseDateRef = useRef('');
      
        function submitHandler(event) {
          event.preventDefault();
      
          // could add validation here...
      
          const contact = {
            name: titleRef.current.value,
            emailId: openingTextRef.current.value,
            phoneNumber: releaseDateRef.current.value,
          };
      
          // props.onAddMovie(movie);
          addContactHandler(contact) ;
        }


        async function addContactHandler(contact) {
          const response = await fetch('https://react-http-110eb-default-rtdb.firebaseio.com/contact.json', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const data = await response.json();
          console.log(data);
         

        }
  return (
    <div className='h-100'>
          <div className="bg-secondary py-3 text-center " style={{ height: '200px' }}>
           <h1 className="text-white" style={{ fontSize: '100px' , fontFamily: 'Times New Roman, sans-serif'}}>The Generics</h1>
          </div>
<h3>Contuct Us</h3>

<form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Name</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Email Id:</label>
        <textarea rows='5' type='email' id='opening-text' ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>phone Number</label>
        <input type='number' id='date' ref={releaseDateRef} />
      </div>
      <button>Add</button>
    </form>
</div>
  )
}

export default ContactUs