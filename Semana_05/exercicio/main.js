import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts";

const get = async () => {
  try {
    const response = await axios.get(URL + "/1");
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

get();

const put = async () => {
  try {
    let newPost = {
      title: "Titulo",
      body: "Corpo qualquer",
      id: 1,
    };
    const response = await axios.put(URL + "/1", newPost);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

put();

const del = async () => {
  try {
    const response = await axios.delete(URL + "/1");
    console.log(response.status);
  } catch (error) {
    console.log(error.message);
  }
};

del();
