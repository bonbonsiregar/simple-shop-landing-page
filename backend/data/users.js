import bcrypt from 'bcryptjs'

const users = [
    {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
    },
    {
        name: 'bonbon',
        email: 'bonbon@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'bon',
        email: 'bon@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
]

export default users