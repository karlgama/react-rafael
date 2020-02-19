import React, { Component } from 'react'


export default class Home extends Component {

	constructor() {
		super()
		this.state = {
			email: "",
			senha: ""
		}
	}

	InputHandler = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value})
	}

	SignIn = async (e) => {
		e.preventDefault()
		const { email, senha} = this.state
		const params = {
			mehotd: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( {
				email: email,
				senha, senha
			})
		} 
		try{
			const retorno = await fetch ('http://localhost:3000/auth/autenticar',params)
			console.log(retorno)
			const usuario = await retorno.json()
			console.log(usuario)
		}catch(e) {
			console.log(e)
		}
	}

	render() {
		return (
			<div className="container">
				<form class="form-signin" onSubmit={this.SignIn}>
					<img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
					<h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
					
					<label for="inputEmail"  class="sr-only">Email address</label>
					<input type="email" onChange={this.InputHandler} id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
					
					<label for="inputPassword" class="sr-only">Password</label>
					<input type="password" onChange={this.InputHandler} id="inputPassword" class="form-control" placeholder="Password" required />
					
					<div class="checkbox mb-3">
						<label>
							<input type="checkbox" value="remember-me" /> Remember me
              			</label>
					</div>
					
					<button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
					<p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
				</form>
			</div>
		)
	}

}