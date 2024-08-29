// Fonction pour charger les tâches depuis le localStorage
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(function(task) {
        addTaskToDOM(task.text, task.completed);
    });
}

// Fonction pour ajouter une tâche dans le DOM
function addTaskToDOM(taskText, completed = false) {
    let taskHTML = `
        <div class="taches2 ${completed ? 'completed' : ''}">
            <span>${taskText}</span>
            <button class="complete">✔️</button>
            <button class="delete">❌</button>
        </div>
    `;
    document.querySelector("#taches").innerHTML += taskHTML;
}

// Ajouter une tâche et la sauvegarder dans le localStorage
document.querySelector('#Ajouter').onclick = function() {
    let inputValue = document.querySelector('input').value;

    if (inputValue.length == 0) {
        alert("Veuillez saisir le nom d'une tâche !");
    } else {
        addTaskToDOM(inputValue);
        saveTask(inputValue);
        document.querySelector('input').value = ''; // Réinitialiser l'input
    }
};

// Sauvegarder la tâche dans le localStorage
function saveTask(taskText, completed = false) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text: taskText, completed: completed });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Mise à jour des tâches après une action (marquer terminé/supprimer)
function updateTasks() {
    let tasks = [];
    document.querySelectorAll('.taches2').forEach(function(taskDiv) {
        let taskText = taskDiv.querySelector('span').textContent;
        let completed = taskDiv.classList.contains('completed');
        tasks.push({ text: taskText, completed: completed });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Délégation d'événement pour gérer les clics sur les boutons "Complete" et "Delete"
document.querySelector("#taches").addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove(); // Supprime la tâche
        updateTasks(); // Mettre à jour les tâches dans le localStorage
    }

    if (e.target.classList.contains('complete')) {
        let taskDiv = e.target.parentElement;
        taskDiv.classList.toggle('completed'); // Marquer comme terminé/non terminé
        updateTasks(); // Mettre à jour les tâches dans le localStorage
    }
});

// Charger les tâches lors du chargement de la page
window.onload = loadTasks;