// #1 Example
let ENV_CONFIG;
if (TARGET_MACHINE === 'localhost') {
  ENV_CONFIG = require('./environment/localhost.config');
} else if (TARGET_MACHINE === 'server') {
  ENV_CONFIG = require('./environment/server.config');
}
export { ENV_CONFIG };

// #2 Example
export const API_ADDRESS = '';