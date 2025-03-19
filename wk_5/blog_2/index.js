// let commentTemplate = document.getElementById("comment-template");
// let commentClone = commentTemplate.cloneNode(true);
let addComment = document.getElementById("add-comment");
let commentBox = document.getElementById("comment-box");
let commentList = document.getElementById("comment-list");

const add_comment = () => {
  let commentTemplate = document.querySelector("[comment-template]");
  let commentClone = commentTemplate.cloneNode(true);

  commentClone.removeAttribute("comment-template");
  let comment = commentClone.querySelector(".comment");
  comment.textContent = commentBox.value;

  commentList.appendChild(commentClone);
  commentBox.value = "";
};

addComment.addEventListener("click", add_comment);
