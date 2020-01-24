module.exports = {
    IS_DEVELOPMENT: process.env.NODE_ENV !== "production",
    DOMAIN: process.env.DOMAIN,
    PORT: process.env.PORT | 3000,
    API_URL: process.env.API_URL,
    DATABASE_URL: process.env.DATABASE_URL
}