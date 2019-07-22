const whereToPutThePosts = document.querySelector("#posts_container")

const postFetcher = () => {
    // Fetch the data
    fetch("https://jsonplaceholder.typicode.com/posts")
        // Parse the data
        .then(data => data.json())
        // Do something with the parsed data
        .then((arrayOfPosts) => {
            for (let i =0; i < 20; i++) {
                const singlePost = arrayOfPosts[i]; 
                const convertedPost = postConverter(singlePost)
                    displayPostInDOM(convertedPost)

            }
        })
}

postFetcher()


const postConverter = (postObject) => {
    // Return HTML representation of the animal object
    return `
        <section class="post">
            <h1 class="post__title">${postObject.title}</h1>
            <h2 class="post__body">${postObject.body}</h2>
        </section>
    `
}



const displayPostInDOM = (postHTMLRepresentation) => {
    // Attach the string to the right place in the DOM
    whereToPutThePosts.innerHTML += postHTMLRepresentation
}

