const service = require('./service')

const baseUrl = '/palindrome'

const allRoutes = [{
        method: 'POST',
        route: '/',
        handlers: [
            service.check
        ]
    }
]

module.exports = {
    allRoutes,
    baseUrl
}