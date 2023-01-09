export const getUsersBlogs = users => {
  try {
    return Promise.all(
      users.map(async user => {
        const data = await fetch(`https://api.github.com/users/${user}`);
        const response = await data.json();
        return response.blog;
      }),
    );
  } catch (error) {
    throw new Error('Failed to load blog');
  }
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
