export default () => ({
    db: {
        mongo_url: process.env.MONGO_URL
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expires_in:process.env.JWT_EXPIRATION
    }
})