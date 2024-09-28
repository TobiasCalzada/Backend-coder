function isValidData(req,res,next){
    try {
    const {title} = req.body
        if(!title){
            const error = new Error("title are required")
            error.statuscode = 400
            throw error
        }else{
            return next()
        }
    } catch (error) {
        throw error
    }
}

export default isValidData