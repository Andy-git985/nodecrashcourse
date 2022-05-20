const EventEmitter = require('events');
// Creates a random Universally unique identifier
const uuid = require('uuid');

// console.log(uuid.v4());
// aee2c73a-f534-4050-9787-ec7e8cf61caa

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg });
  }
}

// no need export if logger examples are below from index.js
// module.exports = Logger;

//  Logger examples from index.js

// no need for this when I'm running in logger.js
// const Logger = require('./logger');
// Both lines commented out allow me to run this now

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');
