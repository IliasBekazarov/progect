function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();  // Убираем лишние пробелы

    if (taskText === "") {
        alert("Введите задачу");
        return;
    }

    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");

    taskItem.textContent = taskText;

    // Создаем кнопку "Выполнено"
    const completeButton = document.createElement("button");
    completeButton.textContent = "-";
    completeButton.classList.add("completeBtn");

    // Добавляем событие для кнопки "Выполнено"
    completeButton.onclick = function () {
        taskItem.classList.toggle("completed");
    };

    // Создаем кнопку "Удалить"
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.classList.add("deleteBtn");

    // Добавляем событие для кнопки "Удалить"
    deleteButton.onclick = function () {
        taskList.removeChild(taskItem);
    };

    // Добавляем кнопки к элементу списка
    taskItem.prepend(completeButton);
    taskItem.appendChild(deleteButton);

    // Добавляем элемент списка в HTML
    taskList.appendChild(taskItem);

    // Очищаем поле ввода
    taskInput.value = "";
}