const { join } = require('path')

const config = {

	prefix: '.',
	bot_name: 'RaidenBot',
	owner_name: 'the Developer03',
	owner_number: '256709824720',
	public: false,

    log_move: '\n『々Lord』KAZE☆☆☆',
	banner_string: 'WhizBot',
	banner_font: 'block',
	banner_align: 'center',
	banner_colors: ['magenta', 'white'],

	qrcode_path: join(__dirname, 'qrcode')
}

module.exports = config
