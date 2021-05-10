import React from 'react'
import './Profile.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert'

const Profile = () => {

    let deleteA=(id)=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                /* aca debe estar la logica que elimina la cuenta */
                swal("Your account has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your account is safe!");
            }
          });
    }


    const initialValues ={
        name:'',
        lastName:'',
        email:''
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string()
        .required('Requiered'),
        lastName: Yup.string()
        .required('Requiered'),
        email: Yup.string()
        .email('Please enter valid email')
        .required('Required'),
    })
    const onSubmit=(values)=>{
        /* aca debe estar la logica del inicio de sesion */
        console.log(values);
    }
    return (
        <div className="d-flex justify-content-center align-items-center h-max">
            <div className="form-container-box">
                <Formik
                initialValues={initialValues} 
                onSubmit={onSubmit} 
                validationSchema={validationSchema}
                >
                    {({errors, touched})=>(
                        <Form>
                            <h2 className="text-center">Profile</h2>
                            <Field 
                                className="form-control" 
                                placeholder="Name" 
                                type="text" 
                                name="name"
                            />
                            {errors.name && touched.name ? <div className="error-message">{errors.name}</div> : null}
                            <br/>
                            <Field 
                                className="form-control" 
                                placeholder="Last Name" 
                                type="text" 
                                name="lastName"
                            />
                            {errors.lastName && touched.lastName ? <div className="error-message">{errors.lastName}</div> : null}
                            <br/>
                            <Field 
                                className="form-control" 
                                placeholder=" Email"
                                type="text" 
                                name="email"
                            />
                            {errors.email && touched.email ? <div className="error-message">{errors.email}</div> : null}
                            <br/>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary" type="submit">Save changes</button>
                            </div>
                            <br/>
                        </Form>
                    )}
                </Formik>
                            <div className="d-flex justify-content-center">
                                <button 
                                    className="btn btn-danger" 
                                    onClick={(e) => deleteA(1, e)}
                                >Delete Account</button>
                            </div>
            </div>
        </div>
    )
}

export default Profile