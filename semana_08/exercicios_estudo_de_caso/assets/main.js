const getItem = (name) => {
  const element = document.querySelector(name);
  return element;
};

const postApi = async (assign) => {
  try {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      assign
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

window.onload = async () => {
  const form = getItem("form");
  const input = getItem("input");

  form.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();
      const post = {
        title: input.value,
        body: "This is the body",
        userId: Math.floor(Math.random() * 10) + 1,
      };
      const response = await postApi(post);
      const postList = getItem(".postList");
      const postItem = document.createElement("li");
      postItem.innerHTML = `<li class="postListItem"><p>${response.data.title}</p></li>`;
      postList.appendChild(postItem);
    } catch (error) {
      console.log(error);
    }
  });
};
