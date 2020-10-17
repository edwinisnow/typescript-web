import { User } from './models/User'

// const user = new User({ id: 1 })
const user = new User({ name: 'Gnishilda', age: 8 })
// user.set({ name: 'Edwin - Updated', age: 40 })
user.events.on('change', () => {
    console.log('Change');

})
user.events.trigger('change')

