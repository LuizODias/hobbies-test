const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/api.js']

swaggerAutogen(outputFile, endpointsFiles)
