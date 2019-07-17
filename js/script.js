// window.onload = function () {
// 	let menuButton 	= document.querySelector('.menu-button');
// 	let mainMenu 	= document.querySelector('.main-menu');	
// 	let buttonDown  = document.querySelector('.button-down');
// 	let navLinks  = document.querySelectorAll('.nav__link');
// 	let header  = document.querySelector('.header');
// 	let infoButton = document.querySelector('.main-info__button');
// 	let buttonToTop = document.querySelector('.to-top');

// 	menuButton.addEventListener('click', function(e) {
// 		e.preventDefault;
// 		this.classList.toggle('menu-button_active');
// 		mainMenu.classList.toggle('main-menu_active');
// 	});

// 	for (let navLink of navLinks) {
// 		navLink.addEventListener('click', function(e) {
// 			e.preventDefault();
// 			let sectionId 	= this.getAttribute('href')
// 			document.querySelector('' + sectionId).scrollIntoView({
// 				behavior: "smooth",
// 				block: "start"
// 			})
// 		});
// 	}

// 	buttonDown.addEventListener('click', function(e) {
// 			e.preventDefault();
// 			let sectionId 	= this.getAttribute('href')
// 			document.querySelector('' + sectionId).scrollIntoView({
// 				behavior: "smooth",
// 				block: "start"
// 			})
// 		});

// 	buttonToTop.addEventListener('click', function(e) {
// 		e.preventDefault();
// 		let sectionId 	= this.getAttribute('href')
// 		document.querySelector('' + sectionId).scrollIntoView({
// 			behavior: "smooth",
// 			block: "start"
// 		})
// 	});

// 	infoButton.addEventListener('click', function(e) {
// 			e.preventDefault();
// 			let sectionId 	= this.getAttribute('href')
// 			document.querySelector('' + sectionId).scrollIntoView({
// 				behavior: "smooth",
// 				block: "start"
// 			})
// 		});

// 	window.addEventListener('scroll', function(e) {
// 		e.preventDefault();

// 		if (window.scrollY >= 150) {
// 			header.classList.add("header_colored");
// 			header.classList.remove("header_transparent");

// 			buttonToTop.classList.add("to-top_active");
// 			buttonToTop.classList.remove("to-top_disabled");
// 		} else {
// 			header.classList.add("header_transparent");
// 			header.classList.remove("header_colored");

// 			buttonToTop.classList.add("to-top_disabled");
// 			buttonToTop.classList.remove("to-top_active");
// 		}
// 	});
// }


window.onload = function () {
	let table 	= document.querySelector('.table');
	let rows 	= document.querySelectorAll('.row');
	let row1 	= document.querySelector('#row1');
	let row2 	= document.querySelector('#row2');
	let row3 	= document.querySelector('#row3');
	let buttonClose 	= document.querySelector('.button-close');

	let users = {
		'user1': {
			'date': '21.05.2018',
			'age': '23',
			'status': 'холост',
			'job': 'Фора, касир.',
			'education': 'высшее, НТУУ КПИ.',
			'faculty': 'Финансы и кредит.'
		},
		'user2': {
			'date': '15.05.2015',
			'age': '18',
			'status': 'замужем',
			'job': 'Сильпо, директор.',
			'education': 'высшее, НаУКМА.',
			'faculty': 'Економика.'
		},
		'user3': {
			'date': '11.03.2015',
			'age': '20',
			'status': 'замужем',
			'job': 'Новус, касир.',
			'education': 'высшее, УКУ.',
			'faculty': 'Право.'
		}
	}

	row1.addEventListener('click', function() {
		table.classList.add("table_active");
		for (let row of rows) {
			row.classList.remove("row_active");
		}
		row1.classList.add("row_active");
		let date 	= document.querySelector('.date');
		let age 	= document.querySelector('.age');
		let status 	= document.querySelector('.status');
		let job 	= document.querySelector('.job');
		let education 	= document.querySelector('.education');
		let faculty 	= document.querySelector('.faculty');
		date.innerText = users.user1.date;
		age.innerText = users.user1.age;
		status.innerText = users.user1.status;
		job.innerText = users.user1.job;
		education.innerText = users.user1.education;
		faculty.innerText = users.user1.faculty;
	});

	row2.addEventListener('click', function() {
		table.classList.add("table_active");
		for (let row of rows) {
			row.classList.remove("row_active");
		}
		row2.classList.add("row_active");
		let date 	= document.querySelector('.date');
		let age 	= document.querySelector('.age');
		let status 	= document.querySelector('.status');
		let job 	= document.querySelector('.job');
		let education 	= document.querySelector('.education');
		let faculty 	= document.querySelector('.faculty');
		date.innerText = users.user2.date;
		age.innerText = users.user2.age;
		status.innerText = users.user2.status;
		job.innerText = users.user2.job;
		education.innerText = users.user2.education;
		faculty.innerText = users.user2.faculty;
	});

	row3.addEventListener('click', function() {
		table.classList.add("table_active");
		for (let row of rows) {
			row.classList.remove("row_active");
		}
		row3.classList.add("row_active");
		let date 	= document.querySelector('.date');
		let age 	= document.querySelector('.age');
		let status 	= document.querySelector('.status');
		let job 	= document.querySelector('.job');
		let education 	= document.querySelector('.education');
		let faculty 	= document.querySelector('.faculty');
		date.innerText = users.user3.date;
		age.innerText = users.user3.age;
		status.innerText = users.user3.status;
		job.innerText = users.user3.job;
		education.innerText = users.user3.education;
		faculty.innerText = users.user3.faculty;
	});

	buttonClose.addEventListener('click', function() {
		table.classList.remove("table_active");

		for (let row of rows) {
			row.classList.remove("row_active");
		}
	});

}