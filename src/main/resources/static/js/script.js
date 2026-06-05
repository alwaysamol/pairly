const profiles = [
    {
        name: "Aarav",
        age: 22,
        image: "/images/boy1.jpg"
    },
    {
        name: "Rohan",
        age: 24,
        image: "/images/boy2.jpg"
    },
    {
        name: "Kabir",
        age: 23,
        image: "/images/boy3.jpg"
    },
    {
        name: "Aditya",
        age: 25,
        image: "/images/boy4.jpg"
    },
    {
        name: "Rahul",
        age: 21,
        image: "/images/boy5.jpg"
    },
    {
        name: "Soham",
        age: 26,
        image: "/images/boy6.jpg"
    },
    {
        name: "Priya",
        age: 22,
        image: "/images/girl1.jpg"
    },
    {
        name: "Sneha",
        age: 23,
        image: "/images/girl2.jpg"
    },
    {
        name: "Anjali",
        age: 24,
        image: "/images/girl3.jpg"
    },
    {
        name: "Pooja",
        age: 21,
        image: "/images/girl4.jpg"
    },
    {
        name: "Kavya",
        age: 25,
        image: "/images/girl5.jpg"
    },
    {
        name: "Neha",
        age: 26,
        image: "/images/girl6.jpg"
    }
];

let currentIndex = 0;

function showProfile() {

    if (currentIndex >= profiles.length) {

        document.getElementById("profile-card").innerHTML = `
            <h2>No More Profiles</h2>
        `;

        return;
    }

    const profile = profiles[currentIndex];

    document.getElementById("profile-card").innerHTML = `
        <img src="${profile.image}">
        <h2>${profile.name}</h2>
        <p>Age: ${profile.age}</p>
    `;
}

function likeProfile() {

    fetch("/swipe/right", {
        method: "POST"
    });

    currentIndex++;
    showProfile();
}

function rejectProfile() {

    fetch("/swipe/left", {
        method: "POST"
    });

    currentIndex++;
    showProfile();
}

showProfile();