// requireds
const argv = require('./config/yargs').argv;
const colors = require('colors');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar')

let comando = argv._[0];
switch (comando) {
	case 'listar':
		listarTabla( argv.base, argv.limite);
		break;
	case 'crear':
		crearArchivo(argv.base, argv.limite) 
			.then(archivo => console.log(`Archivo creado: ${archivo}`))
			.catch(e => console.log(e));
		break;
	default:
		console.log('comando no reconocido');
}


let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

console.log(argv);
console.log(argv2);
console.log('limite', argv.limite);
// let data = '';
// for (let i = 1; i <= 10; i++) {
// 	data += (`${base}* ${i}= ${base*i}\n`);
// }

// fs.writeFile(`tabla-${base}.txt`, data, (err) => {
// 	if (err) throw err;
// 	console.log('The file has been saved!');
// })

