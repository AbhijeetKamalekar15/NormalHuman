import { db } from "./server/db.js";

await db.user.create({
    data: {
        emailAddress: 'abc@gmail.com',
        firstName: 'elliott',
        lastName: 'chong',
    }
})
console.log('done!');
