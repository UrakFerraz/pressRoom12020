let slides = document.querySelectorAll('.slideUnit');

slides = Array.from(slides);

console.log(slides);

cont = 0;

function nextSlide() {
	console.log(cont);
	if(cont >= slides.length -1) {
		cont = 0;
		slides.forEach(function(el) {
			el.style.transform = 'translateX(-' + cont + '00%)';
		});
	} else {
		cont++;
		slides.forEach(function(el) {
			el.style.transform = 'translateX(-' + cont + '00%)';
		});
	}
};

function prevSlide() {
	console.log(cont);
	if(cont <= 0) {
		cont = slides.length -1;
		slides.forEach(function(el) {
			el.style.transform = 'translateX(-' + cont + '00%)';
		});
	} else {
		cont--;
		slides.forEach(function(el) {
			el.style.transform = 'translateX(-' + cont + '00%)';
		});
	}
};









let slideTimer;

function automate() {
	slideTimer = setInterval(nextSlide, 5000);
};

automate();

document.querySelector('.arrowRight').addEventListener('click', nextSlide);
document.querySelector('.arrowLeft').addEventListener('click', prevSlide);

document.querySelector('.slideContainer').addEventListener('mouseover', function() {
	clearInterval(slideTimer);
	console.log('pause');
});

document.querySelector('.slideContainer').addEventListener('mouseleave', function() {
	automate();
	console.log('restart');
});

document.querySelector('.arrowLeft').addEventListener('mouseover', function() {
	clearInterval(slideTimer);
	console.log('pause');
});

document.querySelector('.arrowRight').addEventListener('mouseover', function() {
	clearInterval(slideTimer);
	console.log('pause');
});

















let closeDropDownEditorias;

document.querySelector('.editoriasBtn').addEventListener('mouseover', function() {
	document.querySelector('.dropDownEditorias').style.display = 'flex';
	document.querySelector('.dropDownEditorias').style.opacity = '1';
	clearInterval(closeDropDownEditorias);
});

document.querySelector('.editoriasBtn').addEventListener('mouseout', function() {
	closeDropDownEditorias = setTimeout(function(){
		document.querySelector('.dropDownEditorias').style.display = 'none';
		document.querySelector('.dropDownEditorias').style.opacity = '0';
	},400);
});

document.querySelector('.dropDownEditorias').addEventListener('mouseover', function() {
	clearInterval(closeDropDownEditorias);
	document.querySelector('.dropDownEditorias').style.display = 'flex';
	document.querySelector('.dropDownEditorias').style.opacity = '1';
});

document.querySelector('.dropDownEditorias').addEventListener('mouseout', function() {
	clearInterval(closeDropDownEditorias);
	document.querySelector('.dropDownEditorias').style.display = 'none';
	document.querySelector('.dropDownEditorias').style.opacity = '0';
});





document.querySelector('.hamburguerMenuBtn').addEventListener('click', function() {
	document.querySelector('.mobileMenuContainer').style.left = '0';
});


document.querySelector('.mobileMenuCloseBtn').addEventListener('click', function() {
	document.querySelector('.mobileMenuContainer').style.left = '-102%';
});


document.querySelector('.mobileEditoriasBtn').addEventListener('click', function() {
	if(document.querySelector('.mobileDropDownEditoriasContainer').classList.contains('mobileDropDownOpen')) {
		document.querySelector('.mobileDropDownEditoriasContainer').style.height = '0';
		document.querySelector('.mobileDropDownEditoriasContainer').classList.remove('mobileDropDownOpen');
		document.querySelector('.mobileDropDownIcon').style.transform = 'rotateX(0deg)';
	} else {
		document.querySelector('.mobileDropDownEditoriasContainer').style.height = 'auto';
		document.querySelector('.mobileDropDownEditoriasContainer').classList.add('mobileDropDownOpen');
		document.querySelector('.mobileDropDownIcon').style.transform = 'rotateX(180deg)';
	}
});

function socialLabels() {
	let items = document.querySelectorAll('amp-social-share');
	items = Array.from(items);
	items.forEach(function(el) {
		el.setAttribute('aria-label', 'socialLinks');
		console.log(el);
	});
};