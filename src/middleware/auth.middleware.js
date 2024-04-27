// export authentication middleware
export const auth = (req, res, next) => {
    if(req.session.user){
        next()
    }else{
        res.redirect('/user/login')
    }
}
export const adminAuth = (req, res, next) => {
    if(req.session.user.role && req.session.user.role === "admin"){
        next()
    }else{
        res.redirect('/user/login')
    }
}