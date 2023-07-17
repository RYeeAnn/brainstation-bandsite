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

let form = document.querySelector(".conversation__form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let newinfo = {
        name: e.target.name.value,
        date: Date.now(),
        comment: e.target.comment.value
    }
        console.log(newinfo)

        conversationComments.unshift(newinfo)

        console.log(conversationComments)

        comment.innerText = "";

        form.reset()
    
        for (let i = 0; i < conversationComments.length; i++) {
            display(conversationComments[i]);
        }

});


// API
axios.get("https://project-1-api.herokuapp.com/comments?api_key=d7f73ceb-3054-49c8-b058-596d1c0b020b")

    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });