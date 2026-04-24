"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const env_config_1 = require("./config/env.config");
const logger_config_1 = require("./config/logger.config");
const loadRequiredModules = async () => { };
const startServer = async () => {
    const PORT = env_config_1.Env.PORT;
    main_1.app.listen(PORT, () => {
        logger_config_1.logger.info(`Server is running on port ${PORT} in ${env_config_1.Env.NODE_ENV} mode`);
    });
    await loadRequiredModules();
};
//# sourceMappingURL=server.js.map