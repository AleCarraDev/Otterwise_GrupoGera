import axios from "axios";
import { promise } from "./promise.js";

// then e catch não são mais tão utilizados
// promise.then(() => console.log("sucesso")).catch(() => console.log("deu erro"));

const helperPromise = () => promise;

const demoPromise = async () => {
  console.log("rodou");
  const response = await helperPromise();
  console.log(response);
  console.log("terminou");
};

// demoPromise();

// Precisa executar duas requisições em paralelo e só podemos seguir com a execução do código quando ambas terminarem

const allPromises = async () => {
  const promises = [helperPromise(), helperPromise()];
  try {
    const response = await Promise.all(promises);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// allPromises();

const URL = "https://jsonplaceholder.typicode.com/";

const get = async () => {
  try {
    const response = await axios.get(URL + "users");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const post = async () => {
  try {
    const blogPost = {
      title: "Título do meu post",
      body: "Conteúdo do meu post",
      userId: 1,
    };
    const response = await axios.post(URL + "posts", blogPost);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

post();
get();

const put = async () => {
  try {
    const blogPost = {
      title: "Título do meu post",
      body: "Conteúdo do meu post",
      userId: 1,
      id: 1,
    };
    const response = await axios.put(URL + "posts/1", blogPost);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

put();

const patch = async () => {
  try {
    const response = await axios.patch(URL + "posts/1", blogPost);
    console.log("PATCH", response.data);
  } catch (error) {
    console.log(error.message);
  }
};

const getComments = async () => {
  try {
    const response = await axios.get(URL + "posts/1/comments", blogPost);
    console.log("GET COMMENTS FROM ID 1", response.data);
  } catch (error) {
    console.log(error.message);
  }
};

getComments();

const delPost = async () => {
  try {
    const response = await axios.delete(URL + "posts/1");
    console.log("DELETE POST WITH ID 1", response.data);
    console.log(response.status);
  } catch (error) {
    console.log(error.message);
  }
};

delPost();
