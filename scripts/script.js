const api_key = "d7f73ceb-3054-49c8-b058-596d1c0b020b";

//Comments
let conversationComments = [{
    name: "Conner Walton",
    date: "02/17/2021",
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
},

{
    name: "Emilie Beach",
    date: "01/09/2021",
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
},

{
    name: "Miles Acosta",
    date: "12/20/2020",
    comment: "I can't stop listening. Every time I ear one of their songs - the vocals - it gives me goosebumps. Shiveres straight down my spine. What a beautiful expression of creativity. Can't get enough."
}
]
    
let comment = document.querySelector('.conversation__comments');

    function display(info) {

        let comment__card = document.createElement("div");
        comment__card.classList.add ("conversation__card");

        let comment__row = document.createElement("div");
        comment__row.classList.add ("conversation__row");

        let comment__img = document.createElement("div");
        comment__img.classList.add ("conversation__pic");
        comment__row.appendChild(comment__img);

        let comment__picture = document.createElement("img");
        comment__picture.classList.add ("conversation__picture");
        comment__img.appendChild(comment__picture);

        let comment__info = document.createElement("div");
        comment__info.classList.add ("conversation__info");
        comment__row.appendChild(comment__info);

        let comment__namedate = document.createElement("div");
        comment__namedate.classList.add ("conversation__namedate");

        let comment__name = document.createElement("p");
        comment__name.classList.add ("conversation__name");
        comment__name.innerText = info["name"];
        comment__namedate.appendChild(comment__name);


        let comment__date = document.createElement("p");
        comment__date.classList.add ("conversation__date");
        comment__date.innerText = info["date"];
        comment__namedate.appendChild(comment__date);
        comment__info.append(comment__namedate);


        let comment__reply = document.createElement("p");
        comment__reply.classList.add ("conversation__reply");
        comment__reply.innerText = info["comment"];
        comment__info.appendChild(comment__reply);
        comment__card.appendChild(comment__row);
        comment.appendChild(comment__card);
    
    }

    for (let i = 0; i < conversationComments.length; i++) {
        display(conversationComments[i]);
    }


//Forms

function getCommentsData() {
    comment.innerText = "";
    axios
      .get(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`)
      .then(result => {
        let conversationData = result.data;
  
        for (let i = 0; i < conversationData.length; i++) {
          display(conversationData[i]);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
  
  getCommentsData();
  
  let form = document.querySelector(".conversation__form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let newComment = {
      "name": e.target.name.value,
      "comment": e.target.comment.value
    }
  
    axios
      .post(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`, newComment)
      .then(result => {
        form.reset();
        display(result.data);
      })
      .catch(err => {
        console.error(err);
      });
  });
  
  // commenting with new comments
  function display(commentData) {
    let commentContainer = document.querySelector(".conversation__comments");

    let commentElement = document.createElement("div");
    commentElement.classList.add("conversation__card");
  
    let namedateInfoContainer = document.createElement("div");
    namedateInfoContainer.classList.add("conversation__namedate-info");
  
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("conversation__pic");
  
    let commentImage = document.createElement("img");
    commentImage.classList.add("conversation__img");
    imageContainer.appendChild(commentImage);
  
    let namedateContainer = document.createElement("div");
    namedateContainer.classList.add("conversation__namedate");
  
    let nameElement = document.createElement("p");
    nameElement.classList.add("conversation__name");
    nameElement.innerText = commentData.name;
  
    let dateElement = document.createElement("p");
    dateElement.classList.add("conversation__date");
    dateElement.innerText = formatDate(commentData.timestamp);
  
    namedateContainer.appendChild(nameElement);
    namedateContainer.appendChild(dateElement);
  
    namedateInfoContainer.appendChild(imageContainer);
    namedateInfoContainer.appendChild(namedateContainer);
  
    let commentTextElement = document.createElement("p");
    commentTextElement.classList.add("conversation__info");
    commentTextElement.innerText = commentData.comment;
  
    commentElement.appendChild(namedateInfoContainer);
    commentElement.appendChild(commentTextElement);
  
    commentContainer.prepend(commentElement);

    
    // Delete (not enough time to style)
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("conversation__delete-button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => deleteComment(commentData.id));
  
    commentElement.appendChild(deleteButton);
  }

  function deleteComment(commentId) {
    axios
      .delete(`https://project-1-api.herokuapp.com/comments/${commentId}?api_key=${api_key}`)
      .then(() => {
  
        getCommentsData();
      })
      .catch(err => {
        console.error(err);
      });
  }

  
  
  function formatDate(timestamp) {
    let date = new Date(timestamp);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }









