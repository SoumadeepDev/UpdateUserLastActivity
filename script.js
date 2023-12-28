const posts = [{ title: "Post one", body: "This is post one" }];
let lastActivityTime = null;

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = Date.now().toString();
      resolve(lastActivityTime);
    }, 1000);
  });
}

function createPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "Post two", body: "This is post two" });
      resolve();
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const poppedPost = posts.pop();
        console.log("Post gets deleted");
        console.log("Deleted Post:", poppedPost);
        resolve();
      } else {
        reject("Error: No posts to delete");
      }
    }, 1000);
  });
}

createPost()
  .then(updateLastUserActivityTime)
  .then(() => {
    console.log("All Posts:", posts);
    console.log("Last Activity Time:", lastActivityTime);
  })
  .then(deletePost)
  .then(updateLastUserActivityTime)
  .then(() => {
    console.log("Remaining Posts:", posts);
    console.log("Last Activity Time:", lastActivityTime);
  })
  .catch((err) => console.log(err));
