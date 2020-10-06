console.log('Here are all the available people:', people);

let randomPerson = '';

$(document).ready(onReady);

function onReady(){
    console.log('hello from jquery!');
    //append divs for all people
    appendPeople();
    pickRandomPerson();
    $('#githubPeople').on('click', '.clickPic', clickedPerson)
}

function appendPeople(){
    people.forEach(function(person){
        console.log("person", person.name);
        $('#githubPeople').append(`
            <li data-name=${person.name} class="clickPic">
                <img src="https://github.com/${person.githubUsername}.png?size=250" 
                alt="Profile image of ${person.name}">
            </li>
        `);
    })
}


function pickRandomPerson(){
    let randomNum = randomNumber(0, people.length - 1);
    console.log('random number', randomNum);

    randomPerson = people[randomNum].name;
    $('#person').empty();
    $('#person').append(randomPerson);
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function clickedPerson(){
    let clickedPerson = $(this).data('name'); 
    console.log('in clickedPerson', clickedPerson, randomPerson);

    // compare the two names
    // compare clickedPerson to random name

    if( clickedPerson == randomPerson){
        alert (`yes!! this is ${randomPerson}`)

        pickRandomPerson();
    }
    else{
        alert ('nope, try again')
    }
}