const title = document.getElementById("new-post-title");
const content = document.getElementById("new-post");
const saveBtn = document.getElementById("update-post");
const deleteBtn = document.getElementById("delete-post");
const postRow = document.getElementById("edit-post");

saveBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const postData = {
        content: content.value,
        title: title.value,
        postId: postRow.dataset.id
    };

    fetch("/api/dashboard", {
        method: "PUT",
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