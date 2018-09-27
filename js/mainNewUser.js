window.onload = function () {
	var btnNewUser = document.querySelector("#btnNewUser");

	
	btnNewUser.addEventListener("click", function (e) {
		e.preventDefault();
		var firstName = document.querySelector("#firstName").value;
		// alert(firstName + "este es el nombre");
		console.log(firstName);
		var lastName = document	.querySelector("#lastName").value;
		console.log(lastName);
		var email = document.querySelector("#email").value;
		console.log(email);
		var pass = document.querySelector("#password").value;
		// alert (pass + "pass");
		console.log(pass);

		var address = document.querySelector("#addres").value;
		var sexo = document.querySelector("#inputSexo").options[document.querySelector("#inputSexo").selectedIndex].value;
		console.log(address);

		console.log(sexo);

		nuevoUsuario(firstName, lastName, email, pass, address, sexo);


		// window.location="login.html";

		// alert(firstName + lastName + email + pass + address);
	});

	var btnBack = document.querySelector("#btnBack");
	btnBack.addEventListener("click", function () {
		window.location.assign("login.html");
	});

	

	var nuevoUsuario = function (firstName, lastName, email, pass, address, sexo) {
		var newUser = new Object ();
		newUser.nombre = firstName;
		newUser.apellido = lastName;
		newUser.email= email;
		newUser.password = pass;
		newUser.addres = address;
		newUser.sexo = sexo;

		// nuevoUsuario();
		console.log(newUser);

		
	}

	
}
