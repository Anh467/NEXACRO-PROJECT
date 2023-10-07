const regulationRouter= require("./Regulation")

function route(app){
    app.use("/regulation", regulationRouter)
}

module.exports = route