const Button = {
    button: '<button id="mybutton">Press Me</button>',
    attachEl: () => {
	const el = document.getElementById('mybutton');

	el.addEventListener('click', () =>{
	    console.log('clicked');
	});
    }
};

export default Button;
