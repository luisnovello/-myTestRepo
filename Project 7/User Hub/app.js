const BASE_URL = 'https://jsonplace-univclone.herokuapp.com';

function fetchData(url) {
    return fetch(url)
    .then((result) => {
        return result.json()
    }).catch((error) => {
        console.log(error)
    })
}

function fetchUsers(){
    return fetchData(`${ BASE_URL }/users`)
}

function fetchUserAlbumList(userId) {
    return fetchData(`${ BASE_URL }/users/${ userId }/albums?_expand=user&_embed=photos`)
}

function fetchUserPosts(userId) {
    return fetchData(`${ BASE_URL }/users/${ userId }/posts?_expand=user`);
  }
  
  function fetchPostComments(postId) {
    return fetchData(`${ BASE_URL }/posts/${ postId }/comments`);
  }

function setCommentsOnPost(post) { 
    // post.comments might be undefined, or an []
    if (post.comments){
        return Promise.reject(null);
    }
    return fetchPostComments(post.id).then(function (comments) {
        post.comments = comments;
        return post;
    })
    // if undefined, fetch them then set the result
    // if defined, return a rejected promise
}

function renderUser(user) {
    let userCard =  `
    <div class="user-card">
        <header>
            <h2> ${user.name} </h2>
        </header>
         <section class="company-info">
            <p><b>Contact:</b> ${user.email} </p>
            <p><b>Works for:</b> ${user.company.name} </p>
            <p><b>Company creed:</b> ${user.company.catchPhrase}, ${user.company.bs} </p>
        </section>
         <footer>
            <button class="load-posts">POSTS BY ${user.username}</button>
            <button class="load-albums">ALBUMS BY ${user.username}</button>
        </footer>
    </div>
    `
    userCard = $(userCard).data("user", user)
    return userCard
}

function renderUserList(userList) {
    $("#user-list").empty()
    userList.forEach((eachUser) => {
        let renderEachUser = renderUser(eachUser)
        $("#user-list").append(renderEachUser)
    })
}

$('#user-list').on('click', '.user-card .load-posts', function () {
    let postParent = $(this.closest(".user-card")).data("user")
    fetchUserPosts(postParent.id)
    .then(renderPostList)
});
$('#user-list').on('click', '.user-card .load-albums', function () {
    const albumParent = $(this).closest(".user-card").data("user")
    fetchUserAlbumList(albumParent.id)
    .then(renderAlbumList)
});

$('#post-list').on('click', '.post-card .toggle-comments', function () {
    const postCardElement = $(this).closest('.post-card');
    const post = postCardElement.data('post');
    const commentListElement = postCardElement.find('.comment-list')
  
    setCommentsOnPost(post)
      .then((post) => {
        commentListElement.empty()
        post.comments.forEach((comment) => {
            commentListElement.append(`
            <h3> ${comment.body} - ${comment.email}
            `)
        })
        toggleComments(postCardElement);
      })
      .catch((err) => {
        console.log(err);
      });
  });

function renderPost(post) {
    let postRender = `
    <div class="post-card">
      <header>
        <h3> ${post.title} </h3>
        <h3>--- ${post.username} </h3>
      </header>
      <p> ${post.body} </p>
      <footer>
        <div class="comment-list"></div>
        <a href="#" class="toggle-comments">(<span class="verb">show</span> comments)</a>
      </footer>
    </div>
    `
    postRender = $(postRender).data("post", post)
    return postRender
}

function renderPostList(postList) {
    $("#app section.active").removeClass("active")
    $("#post-list").empty()
    $("#post-list").addClass("active")

    postList.forEach(function (post) {
        $("#post-list").append( renderPost(post) )
    })
}

function toggleComments(postCardElement) {
    const footerElement = postCardElement.find('footer');
  
    if (footerElement.hasClass('comments-open')) {
      footerElement.removeClass('comments-open');
      footerElement.find('.verb').text('show');
    } else {
      footerElement.addClass('comments-open');
      footerElement.find('.verb').text('hide');
    }
  }

function renderAlbum(album) {
    let albumRender = `
    <div class="album-card">
        <header>
          <h3> ${album.title}, by ${album.user.username}</h3>
        </header>
        <section class="photo-list">
        </section>
    </div>
    `
    album.photos.forEach((album) => {
        $(".photo-list").append(renderPhoto(album))
    })

    return albumRender
}

function renderPhoto(photo) {
    let  photoRender =`
    <div class="photo-card">
        <a href= ${photo.thumbnailUrl} target="_blank">
          <img src= ${photo.thumbnailUrl} >
          <figure> ${photo.title} </figure>
        </a>
    </div>
    `
    return photoRender
}

function renderAlbumList(albumList) {
    $("#app section.active").removeClass("active")
    $("#album-list").empty()
    $("#album-list").addClass("active")
    albumList.forEach((album) => {
        $("#album-list").append(renderAlbum(album))
    })
}

function bootstrap() {
    fetchUsers()
    .then(renderUserList)
}

bootstrap()