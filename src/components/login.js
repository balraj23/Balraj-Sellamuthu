import "./login.css"
import{useState} from 'react'
import RegisterPage from "./register"

export default function LoginPage(){
    const initialStateErrors = {
        email:{required:false},
        password:{required:false},
    };
    const [errors,setErrors] = useState(initialStateErrors)

    const handleSubmit = (e) =>{
        e.preventDefault()
        let errors = initialStateErrors;
        let hasError = false;
        
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

    return(
        <section className ="login-block">
            <div className ="container">
                <div className ="row ">
                    <div className ="col login-sec">
                        <h2 className ="text-center">Login Now</h2>
                        <form className ="login-form" onSubmit={handleSubmit} action="">
                            <div className ="form-group">
                                <label htmlFor = "exampleInputEmail1" className ="text-uppercase">Email</label>
                                <input type="email"  className ="form-control" name="email"  id="" placeholder="email"/>
                                { errors.email.required?
                                (<span className = "text-danger" >
                                Email is required.
                                </span>):null
                                }
                            </div>
                            <div className ="form-group">
                                <label htmlFor = "exampleInputPassword1" className ="text-uppercase">Password</label>
                                <input  className ="form-control" type="password"  name="password" placeholder="password" id="" />
                                { errors.password.required? 
                            (<span className = "text-danger" >
                                Password is required.
                            </span>):null
                            }
                            </div>
                            <div className ="form-group">
                                <input  type="submit" className ="btn btn-login float-right"  value="Login"/>
                            </div>
                            <div className ="clearfix"></div>
                            <div className ="form-group">
                            Create new account ?  
                            <a href="/register">Please Register</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}