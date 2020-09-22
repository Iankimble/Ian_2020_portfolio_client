// function to send emails to me
// export const contactMe = (msg) => {
//   console.log(msg);
//   return fetch(`http://localhost:0606/contact`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(msg),
//   });
// };

export const contactMe = (msg) => {
  console.log(msg);
  return fetch(`${process.env.REACT_APP_CONTACT_ME}/contact`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(msg),
  });
};

// function to retrieve blog data
// export const getBlogContent = () => {
//   return fetch(`http://localhost:1337/portfolio-blogs`).then((res) => {
//     if (res.status >= 400) {
//       throw new Error("could not return data");
//     }
//     return res.json();
//   });
// };

export const getBlogContent = () => {
  return fetch(`${process.env.REACT_APP_PERSONAL_BLOG}/portfolio-blogs`).then(
    (res) => {
      if (res.status >= 400) {
        throw new Error("could not return data");
      }
      return res.json();
    }
  );
};

// function to retrive single blog post data
export const singlePost = (postId) => {
  return fetch(
    `${process.env.REACT_APP_PERSONAL_BLOG}/portfolio-blogs/${postId}`
  ).then((res) => {
    if (res.status >= 400) {
      throw new Error("could not return data");
    }
    return res.json();
  });
};
