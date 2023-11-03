const {connect} = require("mongoose")
const express = require("express")
const config = require("config")
const authRouter = require("./routes/auth.routes")
const fileRouter = require("./routes/file.routes")
const corsMiddleware = require("./middleware/cors.middleware")
const filePathMiddleware = require("./middleware/filepath.middleware")
const app = express()
const PORT = process.env.PORT || config.get("serverPort")
const fileUpload = require("express-fileupload")
const path = require("path")

app.use(fileUpload({}))
app.use(corsMiddleware)
app.use(filePathMiddleware(path.resolve(__dirname, "files")))
app.use(express.json())
app.use(express.static("static"))
app.use("/api/auth", authRouter)
app.use("/api/files", fileRouter)
const start = async () => {
    try {
        await connect(config.get("dbUrl"));
        app.listen(PORT, () => {
            console.log(`Server start on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}
start()
