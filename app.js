var form = document.getElementById("todoForm");
var list = document.getElementById("taskList");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var task = this.task.value;

    var li = document.createElement("li");
    var text = document.createTextNode(task);
    var done = document.createElement("button");
    var del = document.createElement("button");

    done.innerHTML = "Done";
    del.innerHTML = "Delete";

    done.addEventListener("click", function () {
        if (this.innerHTML === "Done") {
            this.innerHTML = "Undo";
            li.style.textDecoration = "line-through";
        } else {
            this.innerHTML = "Done";
            li.style.textDecoration = "none";
        }
    });
    del.addEventListener("click", function () {
        list.removeChild(li);
    });

    li.appendChild(text);
    li.appendChild(done);
    li.appendChild(del);
    list.appendChild(li);

    this.task.value = "";
});
