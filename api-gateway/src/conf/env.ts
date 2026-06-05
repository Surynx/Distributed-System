import "dotenv/config"

export const CONFIG = {
    PORT: process.env.GATEWAY_PORT || 3000,
    SERVICES: {
        AUTH: process.env.AUTH_SERVICE_URL || "http://localhost:3001",
        USER: process.env.USER_SERVICE_URL || "http://localhost:3002",
        PROFILE: process.env.PROFILE_SERVICE_URL || "http://localhost:3003",
        ORDER: process.env.ORDER_SERVICE_URL || "http://localhost:3004",
    }
}