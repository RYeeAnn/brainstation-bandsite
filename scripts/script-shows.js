let shows__array = [
    {
        "date": "Mon Sept 06 2021",
        "venue": "Ronald Lane",
        "location": "San Francisco, CA"
    },

    {
        "date": "Tue Sept 21 2021",
        "venue": "Pier 3 East",
        "location": "San Francisco, CA"
    },

    {
        "date": "Fri Oct 15 2021",
        "venue": "View Lounge",
        "location": "San Francisco, CA"
    },

    {
        "date": "Sat Nov 06 2021",
        "venue": "Hyatt Agency",
        "location": "San Francisco, CA"
    },

    {
        "date": "Fri Nov 26 2021",
        "venue": "Moscow Center",
        "location": "San Francisco, CA"
    },

    {
        "date": "Wed Dec 15 2021",
        "venue": "Press Club",
        "location": "San Francisco, CA"
    }
];


//For tablet and desktop ONLY
let table = document.querySelector(".shows__table");

let main__header = document.createElement("div");
main__header.className = "shows__header";

let header__dates = document.createElement("p");
header__dates.innerText = "DATES";
header__dates.className = "shows__head";

let header__venue = document.createElement("p");
header__venue.innerText = "VENUE";
header__venue.className = "shows__head";

let header__location = document.createElement("p");
header__location.innerText = "LOCATION";
header__location.className = "shows__head";

main__header.appendChild(header__dates);
main__header.appendChild(header__venue);
main__header.appendChild(header__location);
table.appendChild(main__header);







function displayShow(show) {
    let shows__card = document.createElement("div");
    shows__card.className = "shows__card";

    let shows__dateText = document.createElement("p");
    shows__dateText.innerText = "DATE";
    shows__dateText.className = "shows__heading";
    shows__card.appendChild(shows__dateText);

    let shows__date = document.createElement("h3");
    shows__date.innerText = show["date"];
    shows__card.appendChild(shows__date);

    let shows__venueText = document.createElement("p");
    shows__venueText.innerText = "VENUE";
    shows__venueText.className = "shows__heading";
    shows__card.appendChild(shows__venueText);

    let shows__venue = document.createElement("p");
    shows__venue.innerText = show["venue"];
    shows__card.appendChild(shows__venue);

    let shows__locationText = document.createElement("p");
    shows__locationText.innerText = "LOCATION";
    shows__locationText.className = "shows__heading";
    shows__card.appendChild(shows__locationText);

    let shows__location = document.createElement("p");
    shows__location.innerText = show["location"];
    shows__card.appendChild(shows__location);

    document.querySelector(".shows__table").appendChild(shows__card);

    let shows__button = document.createElement("button");
    shows__button.innerText = "BUY TICKETS";
    shows__button.classList.add("shows__button");
    shows__card.appendChild(shows__button);
}

for (let i = 0; i < shows__array.length; i++) {
    displayShow(shows__array[i]);
}

