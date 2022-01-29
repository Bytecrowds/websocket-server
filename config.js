//require('dotenv').config();

exports.CALLBACK_URL = process.env.CALLBACK_URL ? new URL(process.env.CALLBACK_URL) : new URL("http://localhost:5000/update")
exports.CALLBACK_TIMEOUT = process.env.CALLBACK_TIMEOUT || 5000
exports.CALLBACK_OBJECTS = process.env.CALLBACK_OBJECTS ? JSON.parse(process.env.CALLBACK_OBJECTS) : { "bytecrowdText": "Text" }
exports.HOST = process.env.HOST || 'localhost'
exports.PORT = process.env.PORT || 1234
exports.CALLBACK_DEBOUNCE_WAIT = parseInt(process.env.CALLBACK_DEBOUNCE_WAIT) || 2000
exports.CALLBACK_DEBOUNCE_MAXWAIT = parseInt(process.env.CALLBACK_DEBOUNCE_MAXWAIT) || 10000
exports.GC = process.env.GC !== 'false' && process.env.GC !== '0'
exports.YPERSISTENCE = process.env.YPERSISTENCE