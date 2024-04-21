const login = (req, res) => {
    res.send("login")
}
const signup = (req, res) => {
    res.send("signup")
}
const recover = (req, res) => {
    res.send("recover")
}
const logout = (req, res) => {
    res.send("logout")
}


module.exports = { login, signup, recover, logout }