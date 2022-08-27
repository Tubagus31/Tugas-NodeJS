// const square function (x) {
// return x * x
// }
const square = (x) => {
    return x * x
}
console.log(square(2)) // Will print: 4

const squareAlt = (x) => x * x
console.log(squareAlt(2)) // Will print: 4

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()

const users = [{
    name: 'Andrew Mead',
    age: 27
},{
    name: 'George Hudson',
    age: 72
},{
    name: 'Clay Klay',
    age: 45
}]
const user = users.find((user) => user.age === 45)
console.log(user) // Will print the second object in the array