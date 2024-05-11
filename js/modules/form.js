import axios from 'axios'

const token = '6549359862:AAEJ0XTm9KEA5yVfd2V06r1HTimke82VybE'
const chat_id = '-1002017259542'
const urlApi = `https://api.telegram.org/bot${token}/sendMessage`

const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
	e.preventDefault()

	let message = `⠀\n<b>Новий запит з сайту Avantaj:</b>\n⠀\n`
	message += `<b>Ім'я: </b>${form.name.value}\n`
	message += `<b>Номер: </b><a href="">${form.phone.value}</a>\n ⠀`

	axios
		.post(urlApi, {
			chat_id,
			parse_mode: 'html',
			text: message,
		})
		.then(() => {
			alert('Запит відправлено')
			form.name.value = ''
			form.phone.value = ''
		})
		.catch((err) => {
			alert(err)
		})
})
