console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement('article');
newPost.classList.add('post');

const postContent = document.createElement('p');
postContent.classList.add("post__content");
postContent.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const postFooter = document.createElement('footer');
postFooter.classList.add("post__footer");

const postSpan = document.createElement('span');
postSpan.classList.add("post__username");
postSpan.textContent = "@username";

const newLikeButton = document.createElement('button');
newLikeButton.textContent = "♥ Like";
newLikeButton.classList.add("post__button");
newLikeButton.setAttribute('data-js', 'like-button');

newLikeButton.addEventListener("click", handleLikeButtonClick);


document.body.append(newPost);
newPost.append(postContent);
newPost.append(postFooter);
postFooter.append(postSpan);
postFooter.append(newLikeButton);