const newComment = document.getElementById("new-comment");
const saveBtn = document.getElementById("add-comment");
const addBtn = document.getElementById("display-comment-form");
const commentForm = document.getElementById("comment-form-row");
const post = document.getElementById("post-info");

saveBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const commentData = {
        content: newComment.value,
    };

    fetch(`/api/post/${post.dataset.id}/comment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(commentData)
    })
    .then((res) => res.json())
    .then((data) => {
        document.location.replace(`/post/${post.dataset.id}`);
    });
});

addBtn.addEventListener("click", (event) => {
    event.preventDefault();

    addBtn.style.display = "none";
    commentForm.style.display = "block";
});