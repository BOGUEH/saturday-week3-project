import React from 'react'

export default function SignUp() {
    return (
        <div className="container">
            
            <div className="logo mt-5">
                <img src="./images/emergency-reporting-logo.svg" alt="logo" />
            </div>

            <div className="form">

                <h1> Log In</h1>
                <p> Welcome Back!</p>
                <form action="">
                    <input type="text" id=" name" placeholder="Name "/>
                    <input type="email" id=" email" placeholder="Email address "/>
                    <br />
                    <input type="password" id=" password" placeholder="Enter Password"/>
                    <input type="password" id=" confirmPassword" placeholder="Confirm Password"/>
                   
                    <p>forget password?</p>
                    <button>Log In</button>
                    <p>Don’t have an account? <a href="http://localhost:3000/signup">Sign Up</a> </p>
                </form>
                    
                        <div class="container">
                            <div class="row">
                                    <div class="col">
                                        <hr />

                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        Or continue with 
                                    </div>
                                <div class="col">
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div   className="smlogo d-flex justify-content-evenly ">
                                    <div class="col">
                                       

                                    </div>
                                    <div class="col d-flex justify-content-evenly">
                                    <img src="./images/Google.svg" alt="google icon" />
                                    <img src="./images/LinkedIn.svg" alt="LinkedIn icon" />
                                  <img src="./images/Twitter1.svg" alt="twitter icon" />

                                    </div>
                                <div class="col">
                                    
                                </div>
                            </div>
                        </div>

                       
                            
                            
                      
        
            </div>

        </div>
    )
}
