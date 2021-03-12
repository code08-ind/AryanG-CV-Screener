// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'John Mathews',
        age: 22,
        city: 'Brisbane',
        language: 'JavaScript',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Steve Harrison',
        age: 28,
        city: 'California',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Parker',
        age: 25,
        city: 'London',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Sunita Mahadevan',
        age: 24,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'David Buttler',
        age: 27,
        city: 'Paris',
        language: 'JavaScript',
        framework: 'Vue',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    },

    {
        name: 'James Atherton',
        age: 24,
        city: 'Birmingham',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/44.jpg'
    }
]


// CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}
const candidates = cvIterator(data);

nextCV();
// Button listener for next button
let next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group" style="width:100%;">
    <li class="list-group-item"><b>Name:</b> ${currentCandidate.name}</li>
    <li class="list-group-item"><b>Age:</b> ${currentCandidate.age} years old</li>
    <li class="list-group-item"><b>Lives In:</b> ${currentCandidate.city}</li>
    <li class="list-group-item"><b>Primarily Works On:</b> ${currentCandidate.language} And Uses ${currentCandidate.framework} <b>Framework</b></li>
  </ul>`;
    }
    else {
        alert('End of candidate applications');
        window.location.reload();
    }

}
