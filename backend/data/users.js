import bcrypt from 'bcryptjs';
const users = [
    {
        name: 'Admin User',
        email: 'Admin@test.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Irshad User',
        email: 'Irshad@test.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Ikram User',
        email: 'Ikram@test.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Not Admin User',
        email: 'notadmin@test.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Test User',
        email: 'test@test.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
]

export default users
