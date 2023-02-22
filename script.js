// DOM
let tasks = document.querySelectorAll("[type='checkbox']");
let pressed = false;
let lastChecked = null;

tasks.forEach((task) => task.addEventListener("click", handleClick))

function handleClick(e) {
    this.parentElement.classList.add("checked");

    if (e.shiftKey && this.checked) {
        let inBetween = false;

        if (lastChecked != null) {
            tasks.forEach((task) => {
                if (task == this || task == lastChecked)
                    inBetween = !inBetween;

                if (inBetween) {
                    task.checked = true;
                    task.parentElement.classList.add("checked");
                }
            })
        }
    } else {
        this.parentElement.classList.remove("checked");
    }

    lastChecked = this;
}
