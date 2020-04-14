module.exports = (app) => {
    app.use('/', require('./routes/main'));
    app.use('/auth', require('./routes/auth'));
}