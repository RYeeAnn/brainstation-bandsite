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


let showsList = document.querySelector(".shows"); 
for (let i = 0; i < showsInformation.length; i++) {
    let shows = showsInformation[i];

    let shows__item = document.createElement("ul");
    shows__item.classList.add("shows__item");

    let shows__date = document.createElement("li");
    shows__date.classList.add("shows__date");
    shows__date.innerText = shows.date;
    shows__item.appendChild(shows__date);

    let shows__venue = document.createElement("li");
    shows__venue.classList.add("shows__venue");
    shows__venue.innerText = shows.venue;
    shows__item.appendChild(shows__venue);

    let shows__location = document.createElement("li");
    shows__location.classList.add("shows__location");
    shows__location.innerText = shows.location;
    shows__item.appendChild(shows__location);

    showsList.appendChild(shows__item)

}


   