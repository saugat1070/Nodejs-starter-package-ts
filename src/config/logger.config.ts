import winston from "winston";
import { getCorrelationId } from "../utils/helper/request.helper";

export const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
        winston.format.json(), // Format the log message as json

        winston.format.printf((
            {timestamp, level, message, ...data}
        )=>{
            const output = {
                level,
                message,
                timestamp,
                correlationId: getCorrelationId(), // Include correlation ID in the log message
                ...data
            }
            return JSON.stringify(output); // Return the log message as a JSON string
            }
        )
    ),
    transports: [
        new winston.transports.Console()
    ]
})