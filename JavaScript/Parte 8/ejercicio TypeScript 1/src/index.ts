document.addEventListener('DOMContentLoaded', e => {
    let form = document.getElementById("formItems") as HTMLFormElement;
    let ul = document.getElementById("items") as HTMLUListElement;
    form.addEventListener("submit", e => {
        e.preventDefault();
        let li = document.createElement("li");
        li.innerText = form.item.value;
        let span = document.createElement("span");
        span.innerText = "X";
        span.style.marginLeft = "10px";
        span.style.color = "red";
        span.style.cursor = "pointer";
        li.append(span);

        span.addEventListener("click", e => li.remove());

        ul.append(li);
        form.reset();
    });
});