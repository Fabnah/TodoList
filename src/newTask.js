import "./styles.css";

function newTaskCreator(newTask, date) {
	return {
		newTask: newTask,
		date: date,
	};
}

export function taskCreated() {
	let texInput = document.querySelector("#textput");
	let dateput = document.querySelector("#dateput");
	let tasks = document.querySelector("#tasks");
	let main = document.querySelector("main");
	let dial = document.querySelector("dialog");

	if (texInput.value == "") {
		alert("You can't have an empty event!!");
		main.removeChild(dial);
	} else if (dateput.value == "") {
		alert("Nothing is timeless");
		main.removeChild(dial);
	} else {
		let cont = document.createElement("div");
		cont.id = "container";
		tasks.appendChild(cont);

		let taskFact = newTaskCreator(texInput.value, dateput.value);
		let h1 = document.createElement("h1");
		h1.textContent = taskFact.newTask;
		cont.appendChild(h1);

		let h2 = document.createElement("h2");
		const parts = taskFact.date.split("-");
		if (parts.length === 3) {
			const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
			h2.textContent = formattedDate;
		} else {
			h2.textContent = "Fecha inválida";
		}

		cont.appendChild(h2);

		let butClass = document.createElement("div");
		butClass.id = "but-class";
		cont.appendChild(butClass);

		let compl = document.createElement("button");
		compl.id = "complete";
		compl.textContent = "To do";
		butClass.appendChild(compl);

		let dele = document.createElement("button");
		dele.id = "delete";
		dele.textContent = "Delete";
		butClass.appendChild(dele);

		dial.close();
		main.removeChild(dial);


		const tasksArray = JSON.parse(sessionStorage.getItem("tasks")) || [];
		tasksArray.push(taskFact);
		sessionStorage.setItem("tasks", JSON.stringify(tasksArray));

		completeFunc(compl);
		deleteFunc(dele, cont);
	}
}

function completeFunc(completeBtn) {
	completeBtn.addEventListener("click", () => {
		if (completeBtn.textContent == "To do") {
			completeBtn.textContent = "Completed";
			completeBtn.style.backgroundColor = "green";
		} else {
			completeBtn.textContent = "To do";
			completeBtn.style.backgroundColor = "rgb(83, 189, 83)";
		}
	});
}

function deleteFunc(deleteBtn, container) {
	deleteBtn.addEventListener("click", () => {
		const tasks = document.querySelector("#tasks");
		tasks.removeChild(container);

		const tasksArray = JSON.parse(sessionStorage.getItem("tasks")) || [];
		const taskIndex = tasksArray.findIndex(
			(task) => task.newTask === container.querySelector("h1").textContent,
		);
		if (taskIndex !== -1) {
			tasksArray.splice(taskIndex, 1);
			sessionStorage.setItem("tasks", JSON.stringify(tasksArray));
		}
	});
}

export function showTasks() {
	const tasksArray = JSON.parse(sessionStorage.getItem("tasks")) || [];
	const tasks = document.querySelector("#tasks");

	tasksArray.forEach((taskFact) => {
		let cont = document.createElement("div");
		cont.id = "container";
		tasks.appendChild(cont);

		let h1 = document.createElement("h1");
		h1.textContent = taskFact.newTask;
		cont.appendChild(h1);

		let h2 = document.createElement("h2");
		const parts = taskFact.date.split("-");
		if (parts.length === 3) {
			const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
			h2.textContent = formattedDate;
		} else {
			h2.textContent = "Fecha inválida";
		}

		cont.appendChild(h2);

		let butClass = document.createElement("div");
		butClass.id = "but-class";
		cont.appendChild(butClass);

		let compl = document.createElement("button");
		compl.id = "complete";
		compl.textContent = "To do";
		butClass.appendChild(compl);

		let dele = document.createElement("button");
		dele.id = "delete";
		dele.textContent = "Delete";
		butClass.appendChild(dele);

		completeFunc(compl);
		deleteFunc(dele, cont);
	});
}
