const express = require("express");
const app = express();
const PORT = 5000;

// CRUD
// C --> Create
// R ---> Read
// U ---> Update
// D ---> Delete

let articles = [
  {
    id: Math.random().toFixed(2),
    title: "Latest Technologies",
    author: "Richie",
    timeRequired: "2 minutes",
    description:
      "This is an article for latest technologies for example - BlockChain, IOT",
  },
  {
    id: Math.random().toFixed(2),
    title: "Life in Vancouver",
    author: "Richie",
    timeRequired: "1 minutes",
    description:
      "Vancouver is known for its natural beauty and its fun living here!",
  },
];

// The Middleware to extract the incoming data as json
app.use(express.json());

app.get("/", (req, res) => {
  //todo Redirecting to new routes
  res.redirect("/api/v1/");
});

app.get("/api/v1/", (req, res) => {
  res.send("ENDPOINTS");
});

// Get Endpoint for all posts
app.get("/api/v1/posts", (req, res) => {
  return res.status(200).json({
    message: "Successfully fetched the articles",
    data: articles,
  });
});

// Get Endpoint for posts with given ID
app.get("/api/v1/posts/:postId", (req, res) => {
  // const id = Number(req.params.postId);

  // const id = +req.params.id;

  const id = req.params.postId;

  // Loop Way
  // for (let i = 0 ; i < articles.length; i++) {
  //     console.log(articles[i], id);
  //     if (articles[i].id === id) {
  //         return res.status(200).json({
  //             message: "Successfully fetched the article",
  //             data: articles[i]
  //         })
  //     }
  // }

  // This will fetch the article with the given ID
  const findArticle = articles.find((article) => article.id == id ? true : false);

  if (findArticle) {
    return res.status(200).json({
      message: "Successfully fetched the article",
      data: findArticle,
    });
  } else {
    return res.status(404).json({
      message: "Article Doesn't Exist",
    });
  }
});

// POST Endpoint for posts with given data
app.post("/api/v1/posts", (req, res) => {
  const data = req.body;

  // Handling errors if any of the field is missing!
  if (!data.title || !data.description || !data.author || !data.timeRequired) {
    return res.status(500).json({
      message: "One of the parameters is missing",
    });
  }

  data.id = articles.length + 1;

  articles.push(data);

  return res.status(201).json({
    message: "Successfully created the article",
    data: articles,
  });
});

// Updating any of the post
app.put("/api/v1/posts/:id", (req, res) => {
  const id = req.params.id;
  const postToUpdate = req.body;
  // // This will fetch the article with the given ID
  // const findArticle = articles.find((article) => article.id == id ? true : false);

  // if (findArticle) {
  //     return res.status(200).json({
  //         message: "Successfully fetched the article",
  //         data: findArticle
  //     })
  // } else {
  //     return res.status(404).json({
  //         message: "Article Doesn't Exist",
  //     })
  // }

  // Handling errors if any of the field is missing!
  if (
    !postToUpdate.title ||
    !postToUpdate.description ||
    !postToUpdate.author ||
    !postToUpdate.timeRequired
  ) {
    return res.status(500).json({
      message: "One of the parameters is missing",
    });
  }

  articles = articles.map((post) => {
    if (post.id == id) {
      post = postToUpdate;
    }

    return post;
  });

  return res.status(200).json({
    message: "Successfully updated the article",
    data: articles,
  });
});

// SPLICE METHOD

// Deleting a particular Post
app.delete("/api/v1/posts/:id", (req, res) => {
  const id = req.params.id;

  const index = articles.findIndex((article) => {
    if (article.id == id) {
      return true;
    }
  });

  if (index !== -1) {
    articles.splice(index, 1);

    return res.status(200).json({
      message: "Successfully deleted the article",
      data: articles,
    });
  } else {
    return res.status(404).json({
      message: "Element you are trying to delete doesn't exist",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

// FIND FUNCTION

let numericArray = [5, 3, 4, 23, 11, 2];

const foundValue = numericArray.find((num) => {
  if (num === 23) {
    return true;
  }
});

console.log(foundValue, "Found Value");

//---------------------------
//Splice Function
//let numA = [1, 2, 3, 4 ,5];

//Array.splice(starting index, number of elements to delete, items you want to add);
//numA.splice(0, 2);