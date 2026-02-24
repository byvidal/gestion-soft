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