import "./register.css"
import{useState} from 'react'
// import LoginPage from "./login"



export default function RegisterPage(){
    const initialStateErrors = {
        email:{required:false},
        password:{required:false},
        name:{required:false}
        // custom_error:null
    }
    const [errors,setErrors] = useState(initialStateErrors)

    const handleSubmit = (e) =>{
        e.preventDefault()
        let errors = initialStateErrors;
        let hasError = false;
        if(inputs.name == ""){
            errors.name.required = true;
            hasError = true;
        }
        if(inputs.email == ""){
            errors.email.required = true;
            hasError = true;
        }
        if(inputs.password == ""){
            errors.password.required = true;
            hasError = true;
        }
        if(!hasError){
            // sending register api requist
        }
        setErrors(errors);
    }

    const [inputs,setInputs] = useState({
        email:'',
        name:"",
        password:'',
    })

    const handleInput = (event) =>{
        setInputs({...inputs ,[event.target.name]:event.target.value})
    }

    // if (isAuthenticated()) {

    // }

    return(
    <section className = "register-block">
        <div className = "container">
            <div className = "row ">
                <div className = "col register-sec">
                    <h2 className = "text-center">Register Now</h2>
                    <form className = "register-form" onSubmit={handleSubmit} action="" >
                        <div className = "form-group">
                            <label htmlFor = "exampleInputEmail1" className = "text-uppercase">Name</label>
                            <input type="text" className = "form-control" onChange={handleInput} name="name" id="" />
                            {errors.name.required?
                                (<span className = "text-danger" >
                                Name is required.
                            </span>):null
                            }
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "exampleInputEmail1" className = "text-uppercase">Email</label>
                            <input type="text"  className = "form-control" onChange={handleInput} name="email" id="" />
                            { errors.email.required?
                                (<span className = "text-danger" >
                                Email is required.
                            </span>):null
                            }
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "exampleInputPassword1" className = "text-uppercase">Password</label>
                            <input  className = "form-control" type="password" onChange={handleInput} name="password" id="" />
                            { errors.password.required? 
                            (<span className = "text-danger" >
                                Password is required.
                            </span>):null
                            }
                        </div>
                        <div className = "form-group">
                            <input type="submit" className = "btn btn-login float-right"  value="Register" />
                        </div>
                        <div className = "clearfix"></div>
                        <div className = "form-group">
                            Already have account ? <a href="login"> Please Login </a>  
                        </div>
                        <p>hello welcome to my page</p>
                    </form>
                </div>
            </div>
        </div>
    </section>
)}