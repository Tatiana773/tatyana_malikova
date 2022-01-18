function showNotification({ top = 0, right = 0, className, html }) {

    let note = document.createElement('div');
    note.className = "note";
    if (className) {
        note.classList.add(className);
    }

    note.style.top = top + 'px';
    note.style.right = right + 'px';

    note.innerHTML = html;
    document.body.append(note);

    setTimeout(() => note.remove(), 1500);
}

let i = 1;
setInterval(() => {
    showNotification({
        top: 10,
        right: 10,
        html: 'Hello ' + i++,
        className: "welcome"
    });
}, 2000);