import { User } from './models/User'

const user = new User({ name: 'Edwin', age: 39 })

user.set({ name: 'Garzia', age: 34 })
console.log(user.get('name'))
console.log(user.get('age'))

