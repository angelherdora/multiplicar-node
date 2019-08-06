const opts = {
	base: {
		demand: true,
		alias: 'b'
	},
	limite: {
		alias: 'l',
		default: 10
	}
}
const argv = require('yargs')
	.command('listar', 'imprime tabla en consola', opts)
	.command('crear', 'crear otr', opts)
	.help()
	.argv;
module.exports = {
	argv
}