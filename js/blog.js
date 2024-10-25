// Sample data for posts
const posts = [
    {
        id: 1,
        title: "Post 1 Title",
        content: "This is the content for post 1.",
        image: "/images/blog/blog-1.jpeg",
        category: "Technology"
    },
    {
        id: 2,
        title: "Post 2 Title",
        content: "This is the content for post 2.",
        image: "/images/blog/blog-1.jpeg",
        category: "Health"
    },
    {
        id: 3,
        title: "Post 3 Title",
        content: "This is the content for post 3.",
        image: "/images/blog/blog-1.jpeg",
        category: "Technology"
    },
    {
        id: 4,
        title: "Post 4 Title",
        content: "This is the content for post 4.",
        image: "/images/blog/blog-1.jpeg",
        category: "Lifestyle"
    },
    {
        id: 5,
        title: "Post 5 Title",
        content: "This is the content for post 5.",
        image: "/images/blog/blog-1.jpeg",
        category: "Health"
    }
];

// Sample data for categories
const categories = ["All", "Technology", "Health", "Lifestyle"];

// Function to display categories
function displayCategories() {
    const categoryList = document.getElementById('category-list');
    categories.forEach(category => {
        const li = document.createElement('li');
        li.textContent = category;
        li.addEventListener('click', () => filterPosts(category));
        categoryList.appendChild(li);
    });
}

// Function to display posts
function displayPosts(postsToDisplay) {
    const postGrid = document.getElementById('post-grid');
    postGrid.innerHTML = ''; // Clear the grid before populating new posts

    postsToDisplay.forEach(post => {
        const postItem = document.createElement('div');
        postItem.classList.add('post-item');

        postItem.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        postGrid.appendChild(postItem);
    });
}

// Function to filter posts by category
function filterPosts(category) {
    if (category === "All") {
        displayPosts(posts);
    } else {
        const filteredPosts = posts.filter(post => post.category === category);
        displayPosts(filteredPosts);
    }
}

// Initialize the blog page
displayCategories();
displayPosts(posts);
