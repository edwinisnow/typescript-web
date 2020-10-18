import { User } from './models/User'

const user = new User({ name: 'Gnishilda', age: 8 })

console.log(user.get('name'))

user.on('change', () => {
    console.log('user was changed')
})

user.trigger('change')