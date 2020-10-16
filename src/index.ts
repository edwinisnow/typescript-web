import { User } from './models/User'

const user = new User({ name: 'Edwin', age: 39 })

user.on('change', () => { console.log('Change #1') })
user.on('change', () => { console.log('Change #2') })
user.on('save', () => { console.log('Save was triggered') })

user.trigger('change')
user.trigger('save')