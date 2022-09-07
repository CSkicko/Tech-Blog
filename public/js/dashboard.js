const title = document.getElementById("new-post-title");
const content = document.getElementById("new-post");
const saveBtn = document.getElementById("add-post");

saveBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const postData = {
        content: content.value,
        title: title.value
    };

    fetch("/api/dashboard", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    })
    .then((res) => res.json())
    .then((data) => {
        document.location.replace("/dashboard");
    });
});