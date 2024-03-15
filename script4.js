
const BlogPosts = (function() {
   
    async function fetchPosts() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async function displayPosts() {
        const postsContainer = document.getElementById('postsContainer');
        postsContainer.innerHTML = ''; 

        try {
            const posts = await fetchPosts();
            posts.forEach(post => {
                const postDiv = document.createElement('div');
                const heading = document.createElement('h3');
                const body = document.createElement('p');

                heading.textContent = post.title;
                body.textContent = post.body;

                postDiv.appendChild(heading);
                postDiv.appendChild(body);

                postsContainer.appendChild(postDiv);
            });
        } catch (error) {
            console.error(error);
            postsContainer.textContent = 'Failed to fetch posts. Please try again later.';
        }
    }

  
    return {
        displayPosts
    };
})();


const TodoList = (function() {
   
    async function fetchTodos() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            if (!response.ok) {
                throw new Error('Failed to fetch todos');
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async function displayTodos() {
        const todoList = document.getElementById('todoList');
        todoList.innerHTML = ''; 

        try {
            const todos = await fetchTodos();
            todos.forEach(todo => {
                const listItem = document.createElement('li');
                listItem.textContent = todo.title;
                todoList.appendChild(listItem);
            });
        } catch (error) {
            console.error(error);
            todoList.textContent = 'Failed to fetch todos. Please try again later.';
        }
    }


    return {
        displayTodos
    };
})();


document.getElementById('fetchPostsBtn').addEventListener('click', async () => {
    await BlogPosts.displayPosts();
});


document.getElementById('fetchTodosBtn').addEventListener('click', async () => {
    await TodoList.displayTodos();
});
