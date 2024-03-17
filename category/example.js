// JavaScript code for showing and hiding the modal
const commentModal = document.getElementById('commentModal');
const modalBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementsByClassName('close')[0];

// Open the modal
modalBtn.onclick = function() {
  commentModal.style.display = 'block';
}

// Close the modal
closeBtn.onclick = function() {
  commentModal.style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == commentModal) {
    commentModal.style.display = 'none';
  }
}

// Handle submitting the comment form (you'll need to implement this)
const commentForm = document.getElementById('commentForm');
const postCommentBtn = document.getElementById('postCommentBtn');

postCommentBtn.onclick = function(event) {
  event.preventDefault(); // Prevent form submission for now, you'll handle it later
  // Add your logic to post the comment here
}
