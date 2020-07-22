  //Question 2
//Create a Class user with properties as name,age & email.
   // He can login and logout
    //Create another Class Moderator which has all the features of User,plus additional functionality to Add coins and remove coins
    //Create one more class Admin which has all the featuers of Moderator plus additional featuers like add a course and delete a particular course for a user

class User{
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email= email;
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}
class Moderator extends User{
    constructor(name, age, email){
        super(name, age, email);
        this.coins=0;

    }
    addCoins(){
        this.coins++;
        console.log(`${this.name} has ${this.coins} coins(s) now.`);
        return this;
    }
    removeCoins(){
        this.coins--;
        console.log(`${this.name} has ${this.coins} coin(s) now.`);
        return this;
    }   
}
let user1 = new User("Pavithra H K", 23,"pavithra3hk@gmail.com");
user1.login().logout();

let user2 = new Moderator("kavitha", 22, "k47@gmail.com");
user2.addCoins().addCoins();
user2.removeCoins();