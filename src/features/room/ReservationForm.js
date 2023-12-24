import { useState } from "react";
import {Button,Modal,ModalHeader,ModalBody} from 'reactstrap';
import {Formik,Field,Form} from 'formik';
import {FormGroup,Label} from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import formImg from '../../app/assets/img/formImg.png'


const ReservationForm= ({roomId}) =>{
    const [modalOpen,setModalOpen]=useState(false);
    const handleSubmit =(values)=>{
        const room = {
            roomId: isNaN(parseInt(roomId)) ? null : parseInt(roomId),
            lastName: values.lastName,
            firstName: values.firstName,
            adress: values.adress,
            codeZip:values.codeZip,
            phoneNumber:values.phoneNumber,
            email:values.email,
            arrivalDate:values.arrivalDate,
            departureDate:values.departureDate,
            numberOfAdults:values.numberOfAdults,
            paymentMethod:values.paymentMethod,
        }
            console.log('room',room);
            setModalOpen(false)
        }

    return(
        <>
            <Button outline onClick={() => setModalOpen(true)}>
                <i className="fa fa-calendar fa-lg"/> Reservation
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={()=>setModalOpen(false)}>
                    Please complete the form below.
                </ModalHeader>
                <ModalBody>
                    <Formik initialValues={{
                        lastName: '',
                        firstName: '',
                        adress: '',
                        codeZip:'',
                        phoneNumber:'',
                        email:'',
                        arrivalDate:null,
                        departureDate:null,
                        numberOfAdults:'',
                        paymentMethod:'',
                    }}
                    onSubmit={handleSubmit}>
                        
                    <Form>
                    <div style={{ maxHeight: '400px', overflowY: 'auto', scrollbarWidth: 'thin' }}>
                        <img
                            src={formImg}
                            alt="Form Image"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                            <FormGroup>
                                <Label htmlFor='lastName'>
                                    Last name
                                </Label>
                                <Field
                                    name='lastName'
                                    placeholder='Your last Name'
                                    className='form-control'
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor='firstName'>
                                    First name
                                </Label>
                                <Field
                                    name='firstName'
                                    placeholder='Your first Name'
                                    className='form-control'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='adress'>
                                    Adress
                                </Label>
                                <Field
                                    name='adress'
                                    placeholder='Your adress'
                                    className='form-control'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='codeZip'>
                                    Zip Code 
                                </Label>
                                <Field
                                    name='codeZip'
                                    placeholder='Your zip Code'
                                    className='form-control'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='phoneNumber'>
                                    Phone Number
                                </Label>
                                <Field
                                    name='phoneNumber'
                                    placeholder='Your phone number'
                                    className='form-control'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='email'>
                                    Email
                                </Label>
                                <Field
                                    name='email'
                                    placeholder='Your email'
                                    className='form-control'
                                />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="arrivalDate">Arrival Date:</Label>
                                <Field name="arrivalDate">
                                {({ field, form }) => (
                                    <DatePicker
                                    selected={field.value}
                                    onChange={(date) => form.setFieldValue(field.name, date)}
                                    className="form-control"
                                    />
                                )}
                                </Field>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="departureDate">Departure Date:</Label>
                                <Field name="departureDate">
                                {({ field, form }) => (
                                    <DatePicker
                                    selected={field.value}
                                    onChange={(date) => form.setFieldValue(field.name, date)}
                                    className="form-control"
                                    />
                                )}
                                </Field>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='numberOfAdults'>
                                    Number Of Adult:
                                </Label>
                                <Field
                                    name='numberOfAdults'
                                    placeholder='number Of Adult'
                                    className='form-control'
                                />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='paymentMethod'>
                                    payment Method:
                                </Label>
                                <Field
                                    name='paymentMethod'
                                    as='select'
                                    className='form-control'
                                >
                                    <option>Select...</option>
                                    <option>check</option>
                                    <option>Paypal</option>
                                    
                                </Field>
                            </FormGroup>
                    </div>
                            <Button type='submit' color='gold'>
                                Submit
                            </Button>
                        </Form>

                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
    
    }




export default ReservationForm;