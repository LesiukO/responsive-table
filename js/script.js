window.onload = function () {
	let table 			= document.querySelector('.table');
	let rows 			= document.querySelectorAll('.row');
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

	for (let row of rows) {
		row.addEventListener('click', function() {
			table.classList.add("table_active");
			for (let row of rows) {
				row.classList.remove("row_active");
			}
			row.classList.add("row_active");
			let date 			= document.querySelector('.date');
			let age 			= document.querySelector('.age');
			let status 			= document.querySelector('.status');
			let job 			= document.querySelector('.job');
			let education 		= document.querySelector('.education');
			let faculty 		= document.querySelector('.faculty');
			let userId 			= row.getAttribute('id')
			date.innerText 		= users[userId].date;
			age.innerText 		= users[userId].age;
			status.innerText 	= users[userId].status;
			job.innerText 		= users[userId].job;
			education.innerText = users[userId].education;
			faculty.innerText 	= users[userId].faculty;
		})
	}

	buttonClose.addEventListener('click', function() {
		table.classList.remove("table_active");
		for (let row of rows) {
			row.classList.remove("row_active");
		}
	});

}