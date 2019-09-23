/**
 * API Docs
 * ---------
 * /posts?page=0 => [{id: 1, title: 'Post 1'}, {id: 2, title: 'Post 2'}, {id: 3, title: 'Post 3'}, N...]
 * /posts?page=1 => [{id: 4, title: 'Post 4'}, {id: 5, title: 'Post 5'}, {id: 6, title: 'Post 6'}, N...]
 * /posts?page=N => [N...]
 */
  
// HTML
// ---------
<ul id="posts"></ul>
  
  // JS
  // ---------
  $(window).on('scroll', scrollHandler);
  
  // Set current page
  let lastPage = 0; 
  let getPostsPending = false
  
  // Get new posts 
  const getPosts = async () => {
      // flip the status of calls 
      getPostsPending = true
      let data = await fetch(`/posts?page=${lastPage}`)
      // flip status to false
      getPostsPending = false; 
      // update last page 
      lastPage++
      return data;
  }
  
  function scrollHandler() {
      if(timeOut !== undefined) clearTimeout(timeOut);
      
      let timeOut = setTimeout(() => {
            // bottom buffer
            const BUFFER = 20
  
            // load & append posts...
            const postContainer = document.getElementById("posts");
  
              // check for when window has reached bottom          // 800px - 20 =  780px
            if($(window).scrollTop() + $(window).height()  >= $(document).height() - BUFFER) {
                // check that you don't have running posts 
                if(!getPostsPending) {
                    // fetch more data and append to dom 
                    let data = getPosts()
  
                    // append data to posts 
                    let html = data.map(item => {
                        return `<li id=`${item.id}`>${item.title}</li>`
                    }).join("")
  
                    // Add new posts to dom 
                    postContainer.innerHTML += html 
                }
            }
      } , 100)
  }
  
  
  
  
  