import { faker } from '@faker-js/faker';
import fs from 'fs';

faker.locale = 'it';

function generateCalls() {

    let person = []

    for (let i=1; i<=50000; i++) {

        let Call_start = Math.floor(Math.random() * 31535399) + 1640991600;
        let Duration = Math.floor(Math.random() * 600);
        let Call_end = Call_start + Duration;

        let City = faker.address.city();
        let Address = faker.address.streetAddress(false);
        let Cell_site = Math.floor(Math.random() * 999) + 1;

        let First_name = faker.name.firstName();
        let Last_name = faker.name.lastName();
        let Full_name = First_name + Last_name;
        let Phone_number = faker.phone.number('### ### ####');
        let First_name2 = faker.name.firstName();
        let Last_name2 = faker.name.lastName();
        let Full_name2 = First_name2 + Last_name2;
        let Phone_number2 = faker.phone.number('### ### ####');

        person.push({
            "Full_name": Full_name,
            "First_name": First_name,
            "Last_name": Last_name,
            "Phone_number": Phone_number,
            "Calls_done": [
                {
                    "_id": i,
                    "Call_start": Call_start,
                    "Call_end": Call_end,
                    "Duration": Duration,
                    "City": City,
                    "Address": Address,
                    "Cell_site": Cell_site
                }
            ]
        });

        person.push({
            "Full_name": Full_name2,
            "First_name": First_name2,
            "Last_name": Last_name2,
            "Phone_number": Phone_number2,
            "Calls_done": [
                {
                    "_id": i,
                    "Call_start": Call_start,
                    "Call_end": Call_end,
                    "Duration": Duration,
                    "City": City,
                    "Address": Address,
                    "Cell_site": Cell_site
                }
            ]
        });
    }

    return person
}

let dataObj = generateCalls();

fs.writeFile('calls100.json', JSON.stringify(dataObj, null, '\t'), function(err, result) {
    if(err) console.log('error', err);
    else console.log('File saved');
});