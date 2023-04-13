import { User } from "../model/User";

export const USERS = [
    new User({
        id:1,
        name:"User1",
        email:"user1@gmail.com",
        isActive:true
    }),
    new User({
        id:2,
        name:"User2",
        email:"user2@gmail.com",
        isActive:false
    }),
    new User({
        id:3,
        name:"User3",
        email:"user3@gmail.com",
        isActive:true
    }),
    new User({
        id:4,
        name:"User4",
        email:"user4@gmail.com",
        isActive:false
    }),
];