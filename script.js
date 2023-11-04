addEventListener("DOMContentLoaded", (event) => {
	const dataTasks = [
		{
			id: 2545000624,
			title: "Title",
			desc: "Description",
			created: "Sat Now 04 2023 15:44:24 GMT+0300 (GMT+03:00)",
			categories: [1, 2],
			users: [1],
			complated : false,
		},
		{
			id: 4081082784,
			title: "Title",
			desc: "Description",
			created: "Sat Now 04 2023 15:44:24 GMT+0300 (GMT+03:00)",
			categories: [1, 3],
			users: [1,2],
			complated : false,
		},
		{
			id: 1259856857,
			title: "Title",
			desc: "Description",
			created:"Sat Now 04 2023 15:44:24 GMT+0300 (GMT+03:00)",
			categories: [3],
			users: [2],
			complated : false,
		},
		{
			id: 3857840975,
			title: "Title",
			desc: "Description",
			created: "Sat Now 04 2023 15:44:24 GMT+0300 (GMT+03:00)",
			categories: [1],
			users: [3],
			complated : false,
		},
		{
			id: 1127604095,
			title: "Title",
			desc: "Description",
			created: "Sat Now 04 2023 15:44:24 GMT+0300 (GMT+03:00)",
			categories: [1, 2, 3],
			users: [1,2,3],
			complated : false,
		},
	];
	const dataCategories = [
		{
			id: 1,
			label: "Frontend"
		},
		{
			id: 2,
			label: "UI"
		},
		{
			id: 3,
			label: "Javascript"
		},
	];
	const dataUsers = [
		{
			id: 1,
			name: "John",
			surname: "Doe",
		},
		{
			id: 2,
			name: "Jack",
			surname: "Doe",
		},
		{
			id: 3,
			name: "Marry",
			surname: "Doe",
		},

	];
	const tableBody = document.getElementById("task-app_table_body");
	console.log(document.getElementById("task-app_table_body"))
	const form = document.querySelector(".task-app__form");
	console.log(document.querySelector(".task-app__form"))
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const form = event.target;
		// const formfields = form.elements;
		// console.log(formfields.title.value)
		const title = document.getElementsByName("title")[0].value;
		const desc = document.getElementById("desc").value;
		const categories = document.getElementById("categories").selectedOptions;
		const users = document.getElementById("users").selectedOptions;
		const taskForm = {
			id : Math.round(Math.random() * 311),
			title : title,
			desc : desc,
			created: new Date().toString(),
			categories : [],
			users : [],
		}
		Array.from(categories).forEach((action) => {
			taskForm.categories.push(parseInt(action.value));
			}
		);
		Array.from(users).forEach((action) => {
			taskForm.users.push(parseInt(action.value));
		}
		);
		dataTasks.push(taskForm);
		form.reset();
		createRow();
	});
	function createRow(data) {
		tableBody.replaceChildren();
		dataTasks.forEach((task) => {
			const row = document.createElement("tr");
			const tdTitle = document.createElement("td");
			const tdDesc = document.createElement("td");
			const tdCreated = document.createElement("td");
			const tdUser = document.createElement("td");
			const tdActions = document.createElement("td")
			const actionDelete = document.createElement("a");
			const actionDone = document.createElement("a");
			const tdCategory = document.createElement("td");

			actionDelete.innerText = "Delete";
			actionDone.innerText = "Done";

			actionDelete.onclick = function (event) {
				const index = dataTasks.find((a) => {
					return a.id === task.id
				});

				if (index != -1) {
					dataTasks.splice(index, 1)
				}

				createRow();
			};

			actionDone.onclick = function (event) {
				console.log(task.id)
			};
			actionDone.onclick = function (event) {
				const done = dataTasks.find((b) => {
					return b.id === task.id
				});
				const row = actionDone.closest("tr")
				row.style.textDecoration = "line-through"
			};

			tdTitle.innerText = task.title.toUpperCase();
			tdDesc.innerText = task.desc;
			tdCreated.innerText = task.created;

			tdActions.appendChild(actionDelete);
			tdActions.appendChild(actionDone);
			row.appendChild(tdTitle);
			row.appendChild(tdDesc);
			row.appendChild(tdCreated);

			const categories = dataCategories.filter((category) => task.categories.includes(category.id)).map((category) => category.label);
			tdCategory.innerText = categories.toString();
			row.appendChild(tdCategory);

			const users = dataUsers.filter((user) => task.users.includes(user.id)).map((user) => user.name);
			tdUser.innerText = users.toString();
			row.appendChild(tdUser);

			row.appendChild(tdActions)

			tableBody.appendChild(row);
		});
	}
	createRow();
});

