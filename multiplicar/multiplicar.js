const fs = require('fs');
let listarTabla = (base, limite = 10) => {
	for (let i = 1; i <= 10; i++) {
		console.log(`${base}* ${i}= ${base*i}\n`.blue);
	}
}
let crearArchivo = (base, limite = 5) => {
	return new Promise((resolve,reject) => {
		if (!Number(base)){
			reject ('no es numero');
			return;
		}
		let data = '';
		for (let i = 1; i <= limite; i++) {
			data += (`${base}* ${i}= ${base*i}\n`);
		}

		fs.writeFile(`tabla-${base}.txt`, data, (err) => {
			if (err)
				reject(err)
			else
				resolve(`tabla-${base}.txt`);
		});
	});
}
module.exports = {
	crearArchivo,
	listarTabla
}