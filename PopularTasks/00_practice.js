persons = [
  {
    id: 325326,
    firstname: "Dan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.1990",
    gender: "Male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041
  },
  {
    id: 325326,
    firstname: "Fan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.2005",
    gender: "Male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041
  },
  {
    id: 325330,
    firstname: "Frank",
    lastname: "Lion",
    image: "url",
    birthday: "10.05.1991",
    gender: "male",
    hobbie: ["walking", "basketball"],
    nationality: "syria",
    friends: ["", "", ""],
    residence: 10041
  },
  {
    id: 325334,
    firstname: "Bilal",
    lastname: "Zakki",
    image: "url",
    birthday: "08.19.1999",
    gender: "male",
    hobbie: ["swimming", "walking"],
    nationality: "canda",
    friends: [325330, 325326],
    residence: 10012
  }
]
countries = [
  {
    city: "Zurich",
    Land: "Switzerland",
    residence: 10041
  },
  {
    city: "Damascus",
    Land: "Syria",
    residence: 100963
  },
  {
    city: "Toronto",
    Land: "Canada",
    residence: 10012
  }
]

function getFullname(person) {
  let first = person.firstname;
  let last = person.lastname;
  let name = first + " " + last;
  return name;
}

function getAllFullnames(persons) {
  const personNames = [];
  persons.forEach(person => {
    const name = getFullname(person);
    personNames.push(name);
    console.log(name);
  });
  return personNames;
}
//console.log(getAllFullnames(persons))

function findPerson(firstname, lastname) {
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].firstname === firstname && persons[i].lastname === lastname) {
      return persons[i];
    } else {
      console.log('undefined');
    }
  }
}
//console.log(findPerson('Dan', 'Tiger'))

function filterPerson(firstname, lastname, persons) {
  return persons.filter(person => {
    return person.firstname === firstname && person.lastname;
  });
}
//console.log(filterPerson('Dan', 'Tiger', persons))

function avgAges(persons) {
  const nowYear = new Date().getFullYear();
  let sum = 0;

  let ages = persons.map(person => {
    return nowYear - new Date(person.birthday).getFullYear();
  });
  for (let age in ages) {
    sum += ages[age];
  }
  return sum / ages.length;
}
//console.log(avgAges(persons))

  let ages = [10, 20, 25, 33, 35, 25, 13, 26, 13, 20, 62, 33];
function ages2(ages) {
  let unique = [];

  for (let i = 0; i < ages.length; i++) {
    if (unique.indexOf(ages[i]) >= -1) {
      unique.push(ages[i]);
    }
  }
}

//console.log(ages2(ages))