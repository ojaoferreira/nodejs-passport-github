module.exports = (req, res) => {
    res.render('home', { user: req.user });
    // res.send({ user: req.user });
};