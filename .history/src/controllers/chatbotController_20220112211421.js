
let getHomePage = (req,res) => {
    router.get('/',(req,res) => {
        res.send("hello world")
      })
}
module.exports = {
    getHomePage
}