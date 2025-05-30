import winston from "winston"
const logger = winston.createLogger({
  format:winston.format.json(),
  level:"debug",
  transports:[
    new winston.transports.Console()
  ]
})

logger.info("Ada info nich")
logger.error("Ada error nich")