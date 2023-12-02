import { useState } from "react";
import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [error, setError] = useState("")
	const [message , setMessage ] = useState(false);
	


	const validateName = (name) => {
		const withoutSpaces = name.trim();

		if (withoutSpaces.length > 5) {
			return true;
			} else {
			return false;
			}
	}
	const validateEmail = (email) => {
		const withoutSpaces = name.trim();

		if (withoutSpaces.length > 5) {
			return true;
			} else {
			return false;
			}
	}

	
	const handleSubmit = (e) => {
		e.preventDefault()

		const isUsernameValid = validateName(name);
		const isEmailValid = validateEmail(email);

		if(!isUsernameValid && !isEmailValid){
			setError("Por favor verifique su información nuevamente");
			setMessage(false)
		} else {
			setError("")
			setMessage(true);
			console.log({name, email});
		}
		


		

	}

	return (
		<div>
			<form
				onSubmit={handleSubmit}
			>
				<label htmlFor="name"></label>
				<input 
					type="text" 
					placeholder="Full Name"
					id="name"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<input 
					type="email" 
					placeholder="Email"
					id="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>

				<input 
					type="submit" 
					value="Enviar"
				/>
			</form>
			
			{error && <p>{error}</p>}
			{message && <p>Gracias {name}, te contactaremos cuando antes vía mail</p>}
		</div>
	);
};

export default Form;
