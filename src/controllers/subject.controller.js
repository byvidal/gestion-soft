import Subject from '../models/subject.model.js';

export const createSubject = async (req, res) => {
    try {
        const { subjectname, key } = req.body;

        const newSubject = new Subject({
            subjectname,
            key,
            user: req.user.id
        });

        const savedSubject = await newSubject.save();
        res.status(201).json(savedSubject);
        
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "La key ya existe." });
        }
        res.status(500).json({ message: "Error al registrar la materia", error: error.message });
    }
};

export const getSubjects=async(req, res)=>{
    const subject = await Subject.findById(req.params.id).populate('user');
    if(!subject) return res.status(404).json({message:'Elemento no encontrado'})
    res.json(subject)
};

export const deleteSubjects=async(req,res)=>{
    const subject = await Subject.findByIdAndDelete(req.params.id)
    if(!subject) return res.status(404).json({message:'Elemento no encontrado'})
    return res.sendStatus(204);
}

export const updateSubjects=async(req,res)=>{
    const subject = await Subject.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    if(!subject) return res.status(404).json({message:'Elementos no encontrado'})
    res.json(subject)
}
