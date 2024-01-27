export default () => ({
    DB_URI: "mongodb+srv://ofuzor:ofuzor2018@cluster0.qjl8f.mongodb.net/flutterwave?retryWrites=true&w=majority",
    jwt: {
        secret: process.env.JWT_SECRET,
        expires_in: process.env.JWT_EXPIRATION
    }
}) 