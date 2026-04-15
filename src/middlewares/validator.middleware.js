export const validateSchema=(Schema)=>(req,res,next)=>{
    try{
        Schema.parse(req.body);
        next();
    } catch(error){
        const errors=error.errors || error.issues;

        return res.status(400).json(
            errors.map(err=>err.message)
        );
    }
};