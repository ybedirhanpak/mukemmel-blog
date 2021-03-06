module.exports = {
    IS_DEVELOPMENT: process.env.NODE_ENV !== "production",
    DOMAIN: process.env.DOMAIN,
    PORT: process.env.PORT,
    API_URL: process.env.API_URL,
    DATABASE_URL: process.env.DATABASE_URL
}