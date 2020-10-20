const industry1Data = [{
        "name": "Noora Smith",
        "role": "Account Manager",
        "location": "Texas",
        "desc": "Works with marketing staff to develop detailed plans for all media channels and sales teams. Tracks daily activities of team members and checks Reward for monthly income.",
        "prifilePic": "assets/Mask Group 3@2x.png"
    },
    {
        "name": "Avon Calon",
        "role": "Brand Manager",
        "location": "Canada",
        "desc": "Works with marketing staff to develop detailed plans for all media channels and sales teams. Tracks daily activities of team members and checks Reward for monthly income.",
        "prifilePic": "assets/Mask Group 4@2x.png"
    },
    {
        "name": "Billy Gomez",
        "role": "UX Designer",
        "location": "Texas",
        "desc": "Works with marketing staff to develop detailed plans for all media channels and sales teams. Tracks daily activities of team members and checks Reward for monthly income.",
        "prifilePic": "assets/Mask Group 5@2x.png"
    },
    {
        "name": "Jennie Maria",
        "role": "Account Manager",
        "location": "Canada",
        "desc": "Works with marketing staff to develop detailed plans for all media channels and sales teams. Tracks daily activities of team members and checks Reward for monthly income.",
        "prifilePic": "assets/Mask Group 6@2x.png"
    }
];

const industry2Data = [{
        "name": "Anastasia Marinicheva",
        "role": "UX Designer",
        "location": "Canada",
        "desc": "Works with marketing staff to develop detailed plans for all media channels and sales teams. Tracks daily activities of team members and checks Reward for monthly income.",
        "prifilePic": "assets/Mask Group 3-1@2x.png"
    },
    {
        "name": "Maria Susan",
        "role": "Account Manager",
        "location": "Canada",
        "desc": "Works with marketing staff to develop detailed plans for all media channels and sales teams. Tracks daily activities of team members and checks Reward for monthly income.",
        "prifilePic": "assets/Mask Group 7@2x.png"
    },
    {
        "name": "James Dostson",
        "role": "Account Manager",
        "location": "Canada",
        "desc": "Works with marketing staff to develop detailed plans for all media channels and sales teams. Tracks daily activities of team members and checks Reward for monthly income.",
        "prifilePic": "assets/Mask Group 5-1@2x.png"
    },
    {
        "name": "Eliza Colly",
        "role": "Brand Manager",
        "location": "Canada",
        "desc": "Works with marketing staff to develop detailed plans for all media channels and sales teams. Tracks daily activities of team members and checks Reward for monthly income.",
        "prifilePic": "assets/Mask Group 8@2x.png"
    }
];

const userList = document.getElementById('profilrDetails');
const userList2 = document.getElementById('profilrDetails2');
const accordion = document.getElementsByClassName('content-box');

const searchBar = document.getElementById('searchBar');

// Accordion
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}

// Load Card Data
const dispData1 = (user) => {
    const htmlString = user.map((u) => {
        return `
        <div class="card-body card-main col-sm-6">
                <div class="card-detail d-flex">
                    <div class="profile-img">
                    <img src="${u.prifilePic}" alt="${u.name}">
                    </div>
                    <div class="profile-detail">
                    <h1 class="profile-name" id="${u.name}">${u.name}</h1>
                    <label for="" class="account-role">${u.location} | </label>
                    <label>${u.role}</label><br>
                    <label for="" class="role-details">${u.desc}</label>
                        <button class="c-btn contact" type="submit">CONTACT ME</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    userList.innerHTML = htmlString;
}
dispData1(industry1Data);

const dispData2 = (user) => {
    const htmlString = user.map((u) => {
        return `
        <div class="card-body card-main col-sm-6">
                <div class="card-detail d-flex">
                    <div class="profile-img">
                    <img src="${u.prifilePic}" alt="${u.name}">
                    </div>
                    <div class="profile-detail">
                    <h1 class="profile-name" id="${u.name}">${u.name}</h1>
                    <label for="" class="account-role">${u.location} | </label>
                    <label>${u.role}</label><br>
                    <label for="" class="role-details">${u.desc}</label>
                        <button class="c-btn contact" type="submit">CONTACT ME</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    userList2.innerHTML = htmlString;
}
dispData2(industry2Data);

// Search
searchBar.addEventListener('keyup', (el) => {
    const searchString = el.target.value.toLowerCase();
    const searchedData = industry1Data.filter((users) => {
        return (users.name.toLowerCase().includes(searchString) || users.role.toLowerCase().includes(searchString) || users.location.toLowerCase().includes(searchString));
    });

    const searchedData2 = industry2Data.filter((users) => {
        return (users.name.toLowerCase().includes(searchString) || users.role.toLowerCase().includes(searchString) || users.location.toLowerCase().includes(searchString));
    });
    dispData1(searchedData);
    dispData2(searchedData2);
    openAccordion();
});

// Filter
filtedata = () => {
    const loc = document.getElementById('location').value;
    const role = document.getElementById('role').value;

    if (loc || role) {
        openAccordion()
    }

    const filterData = industry1Data.filter((users) => {
        return (users.location.includes(loc) || users.role.includes(role))
    });

    const filterData2 = industry2Data.filter((users) => {
        return (users.location.includes(loc) || users.role.includes(role))
    });

    dispData1(filterData);
    dispData2(filterData2);
}

// resizeTo = () => {
//     dispData1(industry1Data);
// }

function openAccordion() {
    return document.querySelector('#accordion1', '#accordion2').click();
  }

// $('select').selectpicker();