



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