import { useState } from "react";
import './Style_login.css';
function Login(){
  const[result,setresult]=useState([]);
  let api_data={
    "info": {
      "_postman_id": "134815b4-1407-4755-baea-64e85a1231f2",
      "name": "STORE ADMIN  TASK API",
      "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
      "_exporter_id": "19309472"
    },
    "item": [
      {
        "name": "AUTH",
        "item": [
          {
            "name": "Login",
            "request": {
              "method": "POST",
              "header": [],
              "body": {
                "mode": "formdata",
                "formdata": [
                  {
                    "key": "email",
                    "value": "abhinavsrivastav426+8@gmail.com",
                    "type": "text"
                  },
                  {
                    "key": "password",
                    "value": "aara@1234",
                    "type": "text"
                  }
                ]
              },
              "url": {
                "raw": "{{BASE}}Api_data/api/login/",
                "host": [
                  "{{BASE}}Api_data"
                ],
                "path": [
                  "api",
                  "login",
                  ""
                ]
              }
            },
            "response": []
          },
          {
            "name": "Log out",
            "request": {
              "method": "POST",
              "header": [
                {
                  "key": "Authorization",
                  "value": "25f5a68e41054add93d4e44155ce2079",
                  "type": "text"
                }
              ],
              "body": {
                "mode": "formdata",
                "formdata": []
              },
              "url": {
                "raw": "{{BASE}}Api_data/api/store-admin-log-out/",
                "host": [
                  "{{BASE}}Api_data"
                ],
                "path": [
                  "api",
                  "store-admin-log-out",
                  ""
                ]
              }
            },
            "response": []
          },
          {
            "name": "Store Reset Pasword",
            "request": {
              "auth": {
                "type": "noauth"
              },
              "method": "POST",
              "header": [
                {
                  "key": "Authorization",
                  "value": "c9d70673e4094068a729a4c15eafb983",
                  "type": "text"
                }
              ],
              "body": {
                "mode": "formdata",
                "formdata": [
                  {
                    "key": "store_email",
                    "value": "abhinavsrivastav421+1@gmail.com",
                    "type": "text"
                  },
                  {
                    "key": "current_password",
                    "value": "aara@1234",
                    "type": "text"
                  },
                  {
                    "key": "new_password",
                    "value": "aara@12345",
                    "type": "text"
                  }
                ]
              },
              "url": {
                "raw": "{{BASE}}store-reset-pasword/",
                "host": [
                  "{{BASE}}store-reset-pasword"
                ],
                "path": [
                  ""
                ]
              }
            },
            "response": []
          },
          {
            "name": "Store Forget Password",
            "request": {
              "auth": {
                "type": "noauth"
              },
              "method": "POST",
              "header": [
                {
                  "key": "Authorization",
                  "value": "c9d70673e4094068a729a4c15eafb983",
                  "type": "text"
                }
              ],
              "body": {
                "mode": "formdata",
                "formdata": [
                  {
                    "key": "store_email",
                    "value": "rjcode0@gmail.com",
                    "type": "text"
                  }
                ]
              },
              "url": {
                "raw": "{{BASE}}password-forget-email/",
                "host": [
                  "{{BASE}}password-forget-email"
                ],
                "path": [
                  ""
                ]
              }
            },
            "response": []
          }
        ]
      },
      {
        "name": "STORE CREATION / SIGN UP",
        "item": [
          {
            "name": "Store Creation",
            "request": {
              "method": "POST",
              "header": [],
              "body": {
                "mode": "formdata",
                "formdata": [
                  {
                    "key": "store_password",
                    "value": "aara@1234",
                    "type": "text"
                  },
                  {
                    "key": "business_sub_category_id",
                    "value": "1,2,3",
                    "description": "we hav to pass businesss sub cat data for store mapping",
                    "type": "text"
                  },
                  {
                    "key": "business_store_name",
                    "value": "First Techno  Solution 5",
                    "type": "text"
                  },
                  {
                    "key": "business_store_email",
                    "value": "abhinavsrivastav426+8@gmail.com",
                    "type": "text"
                  },
                  {
                    "key": "business_store_mobile_number",
                    "value": "7007970755",
                    "type": "text"
                  },
                  {
                    "key": "address",
                    "value": "Lucknow",
                    "type": "text"
                  },
                  {
                    "key": "state",
                    "value": "Utter Pradesh",
                    "type": "text"
                  },
                  {
                    "key": "city",
                    "value": "Lucknow",
                    "type": "text"
                  },
                  {
                    "key": "pincode",
                    "value": "228001",
                    "type": "text"
                  },
                  {
                    "key": "IFSC",
                    "value": "SBI00133",
                    "type": "text"
                  },
                  {
                    "key": "bank_name",
                    "value": "State Bank Of India",
                    "type": "text"
                  },
                  {
                    "key": "account_no",
                    "value": "6888232323",
                    "type": "text"
                  },
                  {
                    "key": "gst_number",
                    "value": "Sj4543",
                    "type": "text"
                  },
                  {
                    "key": "website",
                    "value": "www.monkeyweb.in",
                    "type": "text"
                  },
                  {
                    "key": "swift_code",
                    "value": "12234",
                    "type": "text"
                  }
                ]
              },
              "url": {
                "raw": "{{BASE}}super-admin-add-store-data-testing/",
                "host": [
                  "{{BASE}}super-admin-add-store-data-testing"
                ],
                "path": [
                  ""
                ]
              }
            },
            "response": []
          }
        ]
      }
    ]
  }
  const[email,setemail]=useState("");
  const[pass,setpass]=useState("");
 async function submtted()
  {
    let data=await fetch("http://localhost:5000/taking");
    data=await data.json();
    console.log(data);
    setresult(data);
  }

  const[check,setcheck]=useState("f");
  
  function logged()
  {
    let data=api_data.item[0].item[0].request.body.formdata;
  
    data.map((e)=>{
      if(e.key==pass && e.value==email )
      {
        setcheck("t");
      }
    })
    if(check=="t")
    {
      console.log("rigth");
    }
    else{
      alert("please check your email or password")
     
    }
    
  }
 
  return(
    <>
   
   <div class="box-form">
	<div class="left">
		<div class="overlay">
    <div class="searchh">
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link aa" href="/">DashBoard</a>
  </li>
  <li class="nav-item">
    <a class="nav-link aa" href="/signup">Signup</a>
  </li>
  <li class="nav-item">
    <a class="nav-link aa" href="/signin">Login</a>
  </li>
  <li class="nav-item">
    <a class="nav-link aa" href="/">profile</a>
  </li>
  <li class="nav-item bb">
  <button type="button" class="btn btn-primary">BUY NOW</button>
  </li>
</ul>
</div>
		<h4>INSPIRED BY THE FUTURE.</h4>
		<h3>THE VISION UI DASHBOARD</h3>
	
		</div>
	</div>
	
	
		<div class="right">
		<h4>Nice To See You </h4>
    <p>Enter you email and password</p>
		<div class="inputs">
			<input type="text" placeholder="user name" onChange={(e)=>{setemail(e.target.value)}}/>
			<br/>
			<input type="password" placeholder="password" onChange={(e)=>{setpass(e.target.value)}}/>
		</div>
			
			<br/><br/>
			
	<div class="remember-me--forget-password">
  <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Reminder me</label>
</div>
</div>
			
			<br/>
			<div class="d-grid gap-2">
  <button class="btn btn-primary" onClick={logged}>Signin</button>
  </div>
  <p class="foot">@2021 Made by Love with marketing ,blog</p>
	</div>
	
</div>
</>
  )
}

export default Login;