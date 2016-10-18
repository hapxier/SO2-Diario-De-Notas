// Initialize Firebase
var config = {
	apiKey: "AIzaSyCCa0eXVPOQt-uMHGGjXP8YXa3b9jp62jo",
	authDomain: "proyecto-2-so2.firebaseapp.com",
	databaseURL: "https://proyecto-2-so2.firebaseio.com",
	storageBucket: "proyecto-2-so2.appspot.com",
	messagingSenderId: "1093130055344"
};
firebase.initializeApp(config);
//Fin Initialize

var db = firebase.database();
db.ref("data").set({
			app: "Diario De Notas",
			ver: "0.0.2",
			des: "L & M"
	});

//Mostrar info de la DB en consola
db.ref("data").on('value', function(snapshot){
	var snapData = snapshot.val();
	console.log(snapData.app);
	console.log(snapData.ver);
	console.log(snapData.des);

	document.write(snapData.app+"<br />"+snapData.ver+"<br />"+snapData.des+"<br />");
});

document.write("<br /><h2>Registros Anteriores:</h2>");

//Colecciones
var user1 = {
	usuario1:{
		nombre: "User Prueba",
		correo: "user_prueba@yahoo.es",
		pass: "asd.123"
	}
}
//db.ref("users").set(user1);

var post1 = {
	fecha: "21/10/16",
	titulo: "Tarea",
	nota: "Hacer las tareas"
};
db.ref("users/usuario1/publicacion").push(post1);

var post2 = {
	fecha: "19/10/16",
	titulo: "Cita con maria",
	nota: "Encontrarla en el punto de reunion"
};
//db.ref("users/usuario1/publicacion").push(post2);

//Mostrar info de la colecciones de la DB en consola
db.ref("users/usuario1/publicacion").on('child_added', function(snapshot){
	console.log("Se añadio -> ", snapshot.val());
	console.log("con llave -> ", snapshot.key);
	
	var publi = document.createElement("article");
	var data = snapshot.val();
	
	var contenido = "<h2>" + data.titulo + "</h2>";
	contenido += "<p>(" + data.fecha +") " + data.nota + "</p>";
	publi.innerHTML = contenido;
	document.getElementById("div").appendChild(publi);
});

function prueba(){
	document.write("<br />Funcion de Prueba");
}