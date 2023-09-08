const inputs  = document.querySelectorAll('.input-check')

const form = document.querySelector('.contact__form')
const formTooltip = document.querySelectorAll('.form__tooltip')
form.addEventListener('submit', (e)=>{
	e.preventDefault()

	inputs.forEach((index, d) => {
		if (!index.value) {
			formTooltip[d].classList.add('invalid')

		}else{
			formTooltip[d].classList.remove('invalid')

		}
	});

})