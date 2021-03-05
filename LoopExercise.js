for (x = 1; x <= 7; x++){
    console.log(x);
}

for(i=5; i<=25; i +=4){
    console.log(i);
}

const wizards = [
    "harry potter", 
    "hermoione Granger",
    "ron weasley"
]

for (show of wizards){
    console.log(show);
}

let harryPotterMovies = 0;
while (harryPotterMovies <= 8) {
  console.log(harryPotterMovies);
  harryPotterMovies++;
}

const hogWartsHouse = [
    "gryffindor",
    "hufflepuff",
    "ravenclaw",
    "slytherin"
]

for(show of hogWartsHouse){
    for(display of show){
        console.log(display);
    }
}

const quote = [
    "yer",
    "a",
    "lizard",
    "harry"
]
const [...all] = quote;
console.log(all);