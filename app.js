window.addEventListener("load", () => {
  const form = document.getElementById("new-task-form");
  const input = document.getElementById("new-task-text");
  const pending_tasks = document.getElementById("pending-tasks");
  const completed_tasks = document.getElementById("completed-tasks");

  document.getElementById("new-task-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    if (!task) {
      alert("Please enter a task");
      return;
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task-to-do");

    pending_tasks.appendChild(task_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("task-text");
    task_input_el.type = "text";
    task_input_el.value = input.value;
    task_input_el.setAttribute("readonly", "readonly");

    task_el.appendChild(task_input_el);

    const task_edit_btn = document.createElement("button");
    task_edit_btn.classList.add("task-btn", "edit-btn");
    task_edit_btn.innerHTML =
      "<div><i class='fas fa-edit' aria-hidden='true'></i><br><span>Edit</span></div>";

    task_el.appendChild(task_edit_btn);

    const task_delete_btn = document.createElement("button");
    task_delete_btn.classList.add("task-btn", "delete-btn");
    task_delete_btn.innerHTML =
      "<div><i class='fas fa-trash-alt' aria-hidden='true'></i><br><span>Delete</span></div>";

    task_el.appendChild(task_delete_btn);

    const task_complete_btn = document.createElement("button");
    task_complete_btn.classList.add("task-btn", "complete-btn");
    task_complete_btn.innerHTML =
      "<div><i class='far fa-check-circle' aria-hidden='true'></i><br><span>Complete</span></div>";

    task_el.appendChild(task_complete_btn);

    input.value = "";

    task_edit_btn.addEventListener("click", () => {
      if (task_edit_btn.querySelector(".fa-edit")) {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_btn.innerHTML =
          "<div><i class='fas fa-save' aria-hidden='true'></i><br><span>Save</span></div>";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_btn.innerHTML =
          "<div><i class='fas fa-edit' aria-hidden='true'></i><br><span>Edit</span></div>";
      }
    });

    task_delete_btn.addEventListener("click", () => {
      pending_tasks.removeChild(task_el);
    });

    task_complete_btn.addEventListener("click", () => {
      const check = document.createElement("i");
      check.setAttribute("class", "far fa-check-circle complete");
      task_el.insertBefore(check, task_input_el);
      task_el.classList.remove("task-to-do");
      task_el.classList.add("finished-task");
      task_el.removeChild(task_edit_btn);
      task_el.removeChild(task_delete_btn);
      task_el.removeChild(task_complete_btn);
      completed_tasks.appendChild(task_el);
    });
  });
});
