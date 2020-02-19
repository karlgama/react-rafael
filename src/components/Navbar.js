import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
				<Link className="navbar-brand" to="/">SERIES</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/series">Series</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/autores">Autores</Link>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
					</form>
				</div>
			</nav>
		)
	}

}