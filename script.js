//https://jsonplaceholder.typicode.com/posts

async function readPosts() {
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = '<img src="https://cdn.dribbble.com/users/563824/screenshots/3633228/media/b620ccb3ae8c14ea5447d159ebb1da58.gif" >';
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    if (json.length > 0) {
        postArea.innerHTML = '';

        for (let i in json) {
            let postHtml = `<div><h2>${json[i].title}</h2>${json[i].body}<hr/></div>`;
            postArea.innerHTML += postHtml;
        }
    } else {
        postArea.innerHTML = 'Nenhum post para exibir';
    }
}

async function addNewPost(title, body) {
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-TYpe": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
      userId: 2,
    }),
  });

  document.querySelector("#titleField").value = "";
  document.querySelector("#bodyField").value = "";
  readPosts();
}


document.querySelector("#insertButton").addEventListener("click", () => {
    let title = document.querySelector("#titleField").value;
    let body = document.querySelector("#bodyField").value;

  if (title && body) {
    addNewPost(title, body);
  } else {
    alert("Preencha todos os campos!");
  }
});
readPosts()
