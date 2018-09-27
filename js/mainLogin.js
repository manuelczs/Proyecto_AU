window.onload = function () {
	var btnIngresar = document.querySelector("#btnLogin")
	btnIngresar.addEventListener("click", function(e) {
	// e.preventDefault();
	var email = document.querySelector("#email").value;
	var password = document.querySelector("#password").value;
		// console.log(email);
		// console.log(password);
		alert(email + " " + password);
});	
	var mostrarSectionForgot = function () {
		classOcultar.style.display = "none";
		sectionMostrar.style.display = "block";
		// alert("hola fede");
	}
	var forgotPass = document.querySelector("a");
	var classOcultar = document.querySelector("#login");
	var sectionMostrar = document.querySelector("#forgotPass");
	forgotPass.addEventListener("click", function () {
		mostrarSectionForgot();
	});

	var btnSend = document.querySelector("#btnSend");
	btnSend.addEventListener("click", function () {
		alert("Se envio tu password al mail");
	});

	var btnRegister = document.querySelector("#btnRegister");
	btnRegister.addEventListener("click", function () {
		window.location.assign("userRegister.html");
	});

}				
