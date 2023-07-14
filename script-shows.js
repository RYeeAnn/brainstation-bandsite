//Shows
let showsInformation = [{
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA"
},
{
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA"
},
{
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA"
},
{
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA"
},
{
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA"
},
{
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA"
},
];

//Parent
let showsList = document.querySelector(".shows"); 

for (let i = 0; i < showsInformation.length; i++) {
    let shows = showsInformation[i];

    let shows__item = document.createElement("ul");
    shows__item.classList.add("shows__item");

    let shows__dateTitle = document.createElement("li");
    shows__dateTitle.classList.add("shows__date--title");
    shows__dateTitle.innerText = "DATE";
    shows__item.appendChild(shows__dateTitle);

    let shows__date = document.createElement("li");
    shows__date.classList.add("shows__date");
    shows__date.innerText = shows.date;
    shows__item.appendChild(shows__date);

    let shows__venueTitle = document.createElement("li");
    shows__venueTitle.classList.add("shows__venue--title");
    shows__venueTitle.innerText = "VENUE";
    shows__item.appendChild(shows__venueTitle);

    let shows__venue = document.createElement("li");
    shows__venue.classList.add("shows__venue");
    shows__venue.innerText = shows.venue;
    shows__item.appendChild(shows__venue);

    let shows__locationTitle = document.createElement("li");
    shows__locationTitle.classList.add("shows__location--title");
    shows__locationTitle.innerText = "LOCATION";
    shows__item.appendChild(shows__locationTitle);

    let shows__location = document.createElement("li");
    shows__location.classList.add("shows__location");
    shows__location.innerText = shows.location;
    shows__item.appendChild(shows__location);

    //button
    let shows__button = document.createElement("button");
    shows__button.classList.add("shows__button");
    shows__button.innerText = "BUY TICKETS";
    shows__item.appendChild(shows__button);

    showsList.appendChild(shows__item)

}
