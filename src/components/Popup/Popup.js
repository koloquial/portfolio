import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Modal, Alert } from 'react-bootstrap';
import Loading from '../Loading';

const Popup = ({ show, setShow }) => {

    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [alertMSG, setAlertMSG] = useState('');

    useEffect(() => {
        if(alertMSG){
            setTimeout(() => setAlertMSG(''), 2000);
        }
    }, [alertMSG])

    const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true);

      console.log('form current', form.current)
  
      emailjs.sendForm(
          process.env.REACT_APP_SERVICE_ID, 
          process.env.REACT_APP_TEMPLATE_ID, 
          form.current, 
          process.env.REACT_APP_PUBLIC_KEY
          )
        .then((result) => {
            console.log(result.text);
            setLoading(false);
            setAlertMSG('Message sent.');
            

        }, (error) => {
            console.log(error.text);
        });
    };

  return (
        <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {alertMSG !== '' ? <Alert>
          {alertMSG}
        </Alert> : <></>}
            {!loading ?
                <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' name='user_name' />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' name='user_email' />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control type='textarea' name='message' />
                    </Form.Group>
                    <br />
                    <button className='border-gradient' type='submit'>Send</button>
                </Form>
            : <Loading message={'Sending...'} />}
            
        </Modal.Body>
      </Modal>
  );
}

export default Popup;