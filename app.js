// import express from express-module
import express from 'express';

// declare port variable
const port = 4400;

// import path from path-module
import path from "path";

// import expressEjsLayouts from express-module
import expressEjsLayouts from 'express-ejs-layouts';

// import session from express-module
import session from 'express-session'

// import cookieParser from module
import cookieParser from 'cookie-parser';

// import Router
import userRouter from './src/features/routes/user.routes.js';
import reviewRouter from './src/features/routes/review.routes.js';

// create express instance
const app = express()

// set ejs View Engine
app.set('view engine', 'ejs')
app.set('views', path.join(path.resolve(), 'src','features','views'))

// use middleware for their purpose
app.use(cookieParser())
app.use(express.static('public'))
app.use(session({
    secret: 'Bn0GljG8pWZrs4nPE2tpS7p4f1eNBxu3',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(expressEjsLayouts)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// userRoute
app.use('/user', userRouter)

// HomePage routes
app.use('/', userRouter)

// reviewRoute 
app.use('/review', reviewRouter)

// render 404 page
app.use((req, res, next) => {
    res.render('404error');
});

// define listen to run server on port
app.listen(port, (err) => {
    if (err) {
        console.log("Error while running server :", err)
    } else {
        console.log("Server is running on successfully on port :", port)
    }
})