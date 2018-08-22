const shortid=require('shortid');
const txtgen=require('txtgen');
const faker=require('faker');
const _=require('lodash');

const users=generateUsers(5);
const contacts=_.mapKeys(users,'user_id');
const getMessages=messagePerUser=>{
    let messages={};
    _.forEach(users,user=>{
        messages[user.user_id]={
            ..._.mapKeys(generateMessages(messagePerUser),"number")
        };
    })
    return messages
}
function generateUser(){
    return{
        name:faker.name.findName(),
        email:faker.internet.email(),
        profile_pic:faker.internet.avatar(),
        status:txtgen.sentence(),
        user_id:shortid.generate()
    }
}

function generateUsers(numberOfUsers){
    return Array.from({length:numberOfUsers},()=>generateUser())
}

function generateMessage(number){
    return{
        number,
        text:txtgen.sentence(),
        is_user_msg:faker.random.boolean()
    }
}

function generateMessages(numberOfMessages){
    return Array.from({length:numberOfMessages},(el,i)=>generateMessage(i))
}

const state={
    user:generateUser(),
    messages:getMessages(5),
    typing:"",
    contacts,
    activeUserId:null
}


// console.log(users);
// console.log(contacts);
// console.log(getMessages(5));
console.log(state);
//console.log(generateMessage(1))