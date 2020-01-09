const Router = require('koa-router')
const Employee = require('./models').Employee
const jwt = require('jsonwebtoken')

const BASE_URL = '/api'
const SECRET = process.env.SECRET
const router = new Router()

router.post(`${BASE_URL}/login`, async (ctx) => {
    const reqUsername = ctx.request.body.username
    const reqPassword = ctx.request.body.password

    const unauthorized = (ctx) => {
        ctx.status = 401
        ctx.body = {
            error: 'Invalid username or password'
        }
    }

    let attemptingUser
    try {
        attemptingUser = await Employee.findOne({ where: { username: reqUsername }})
        if (attemptingUser != null && attemptingUser.password === reqPassword) {
            ctx.status = 200
            ctx.body = {
                username: attemptingUser.username,
                given_name: attemptingUser.given_name,
                family_name: attemptingUser.family_name,
                role: attemptingUser.role,
                created_at: attemptingUser.createdAt,
                updated_at: attemptingUser.updatedAt,
            }

            const token = jwt.sign({ username: attemptingUser.username, role: attemptingUser.role }, SECRET)
            ctx.set("X-Auth", token)
        } else {
            unauthorized(ctx)
        }
        
    } catch(err) {
        console.error(err)
        console.error(`Failed to find username: ${reqUsername}`)
        unauthorized(ctx)
    }
})

module.exports = router