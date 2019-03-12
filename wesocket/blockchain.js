


let url = 'wss://ws.blockchain.info/inv'


var socket = new WebSocket(url);

// Gestión de errores
socket.onerror = function(error) {
	console.log('Error en conexión al socket: ', error);
};


// Abre la conexión al socket:
socket.onopen = function() { 
	console.log("Connection open ...");
	socket.send(JSON.stringify({"op":"unconfirmed_sub"}));
	socket.send(JSON.stringify({"op":"blocks_sub"}))
      
};


// Lanza los datos recibodos por la consola
socket.onmessage = function(arrives) { 
		// console.log( "Received Message: ", arrives.data); 

		let myData = JSON.parse(arrives.data);
		
		if (myData === 'utx') {
			console.log(myData.out.value);
			
		} else {
			
		}
		


		    
};








//   socket.onclose = function() { console.log("Connection closed."); };   
//   {blocks_sub}
//   {"op":"unconfirmed_sub"}