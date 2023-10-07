import { faker } from '@faker-js/faker';
import fs from 'fs';

faker.locale = 'it';

var person = [];
var call = [];

for (var i=1; i<=500; i++) {

    var First_name = faker.name.firstName();
    var Last_name = faker.name.lastName();
    var Full_name = First_name + Last_name;
    var Phone_number = faker.phone.number('### ### ####');

    var First_name2 = faker.name.firstName();
    var Last_name2 = faker.name.lastName();
    var Full_name2 = First_name2 + Last_name2;
    var Phone_number2 = faker.phone.number('### ### ####');

    person.push({
        "Full_name": Full_name,
        "First_name": First_name,
        "Last_name": Last_name,
        "Phone_number": Phone_number,
        "Calls_done": i
    });
    person.push({
        "Full_name": Full_name2,
        "First_name": First_name2,
        "Last_name": Last_name2,
        "Phone_number": Phone_number2,
        "Calls_done": i
    });

    var Call_start = Math.floor(Math.random() * 31535399) + 1640991600;
    var Duration = Math.floor(Math.random() * 600);
    var Call_end = Call_start + Duration;

    var City = faker.address.city();
    var Address = faker.address.streetAddress(false);
    var Cell_site = Math.floor(Math.random() * 999) + 1;

    call.push({
        "ID": i,
        "Call_start": Call_start,
        "Call_end": Call_end,
        "Duration": Duration,
        "City": City,
        "Address": Address,
        "Cell_site": Cell_site
    });
}


let dataObj = person;

fs.writeFile('people50.json', JSON.stringify(dataObj, null, '\t'), function(err, result) {
    if(err) console.log('error', err);
    else console.log('File saved');
});

let dataObj2 = call;

fs.writeFile('calls50.json', JSON.stringify(dataObj2, null, '\t'), function(err, result) {
    if(err) console.log('error', err);
    else console.log('File saved');
});