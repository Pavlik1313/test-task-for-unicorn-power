export default {
    db: {
        url: "mongodb://localhost:27017/pavlyuk-test-task-for-unicorn-power"
    },
    jwt: {
        secret: process.env.SECRET || 'k5zG73ZfF5',
        expiresIn: '10m',
        expiresInMilliseconds: 600000
    },
    server: {
        port: process.env.PORT || 8080
    }
}