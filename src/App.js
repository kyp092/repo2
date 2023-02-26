import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';
import React , { useState } from 'react';


function App() {
  const [SignupmodelIsOpen,setSignupmodelIsOpen] = useState(false)
  const [LoginmodelIsOpen,setLoginmodelIsOpen] = useState(false)
  
  const handelSubmitform = Event => {
    alert('form submited successfull');
    Event.preventDefault();

  }
 
  return (
    <div className="App">
      <h1 className="App-header"> DIY EVENTS HUB </h1>
      <body className="App-body">
        <button className="Signupbutton" onClick={() => setSignupmodelIsOpen(true)}> SIGN UP </button>
        <button className="Loginbutton" onClick={() => setLoginmodelIsOpen(true)}> LOGIN </button>
        
          <Modal isOpen={SignupmodelIsOpen}>
          <body className="Signup-body"/>
          <button><a href='App.js'>Back</a></button>
          <h2> SignUp Model </h2>
          <p> 
          <form action="App.js" method="post" onSubmit={handelSubmitform}>
          <ul><input class="text" type="text" name="Firstname" placeholder="Firstname" required="" /></ul>
          <ul><input class="text" type="text" name="Lastname" placeholder="Lastname" required=""/></ul>
					<ul><input class="text" type="text" name="Username" placeholder="Username" required="" /></ul>
					<ul><input class="text email" type="email" name="email" placeholder="Email" required="" /></ul>
					<ul><input class="text" type="password" name="password" placeholder="Password" required=""/></ul>
					<ul><input class="text w3lpass" type="password" name="password" placeholder="Confirm Password" required=""/></ul>
					<div class="wthree-text">
						<label class="anim">
							<input type="checkbox" class="checkbox" required=""/>
							<span>I Agree To The Terms & Conditions</span>
						</label>
						<div class="clear"> </div>
					</div>
          </form>
          </p>
					<input type="submit" value="Signup"/>
          <input type="reset" value="reset"/>
          
          
          </Modal>

          <Modal isOpen={LoginmodelIsOpen}>
          <body className="Login-body"/>
          <button><a href='App.js'>Back</a></button>
          <h2> Login Model </h2>
          <p> 
          <form action="#" method="post">
					<ul><input class="text email" type="email" name="email" placeholder="Email" required=""/></ul>
					<ul><input class="text" type="password" name="password" placeholder="Password" required=""/></ul>
          </form>
          </p>
					<input type="submit" value="LOGIN"/>
          </Modal>  

          <div>
          
          <div class="container">
          <button><img src="concert.jpg"/>
          <h4>Concert</h4> </button>
          <button><img src="concert.jpg"/>
          <h4>Summer Beach Party</h4></button>
          <button><img src="concert.jpg"/> 
          <h4>Canada Day celebrition</h4></button>
          <button><img src="concert.jpg"/> 
          <h4>Regina Premier League - Finals</h4></button>
          <button><img src="concert.jpg"/> 
          <h4>Fashion Expo </h4> </button>
          <button><img src="concert.jpg"/>
          <h4>Culture Expo</h4></button>
          </div>

        </div>  
      </body>
      </div>
);
}

export default App;

  