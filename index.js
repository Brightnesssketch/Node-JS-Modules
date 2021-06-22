// const greeting = (person: string) => {
//     console.log("Good day " + person + " Mabel is so fucking difficult");
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount("Murphy", 1);
console.log(user);