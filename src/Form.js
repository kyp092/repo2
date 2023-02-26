import React , {Component } from 'react'

export class from extends Components {
    render(){
        return (
        <form action="#" method="post">
          <ul><input class="text" type="text" name="Firstname" placeholder="Firstname" required=""/></ul>
          <ul><input class="text" type="text" name="Lastname" placeholder="Lastname" required=""/></ul>
					<ul><input class="text" type="text" name="Username" placeholder="Username" required=""/></ul>
					<ul><input class="text email" type="email" name="email" placeholder="Email" required=""/></ul>
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
          
					<input type="submit" value="SIGNUP"/>
          <button type="reset" onClick={()=> onReset}>Reset</button>
        )
    }
}   

export default Form
