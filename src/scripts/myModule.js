// named export
const message = 'Some message from myModules.js'
const name = 'Americo'

// default export: you can only have one nad it has no name
const location = 'London!!'

const getGreeting = name => {
    // return a template string
    return `Welcome to the course ${name}`
}

export { message, name, getGreeting, location as default }