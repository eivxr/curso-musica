import {register, signin} from '../models/homeModel.js'
import {check, validationResult} from 'express-validator'

const auth = async (req, res) => {
    try {
        const {email, password} = req.body
        //Validacion 
        await check('email').isEmail().withMessage('Correo no valido').run(req);
        await check('password').notEmpty().withMessage('Contraseña obligatoria').run(req);
        let errores = validationResult(req);

        if (!errores.isEmpty()) {
            return res.status(400).json({
                errores: errores.array()
            });
        }
        
        //Verificar contrasena
        const autentica = await signin(email, password);
        if (!autentica) {
            return res.status(401).json({
                msg: "La contraseña es incorrecta"
            })
        }

        res.status(200).json({
            autentica
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const signup = async (req, res) => {
    try {
        await check('nombre').notEmpty().withMessage('El nombre es obligatorio').run(req);
        await check('email').notEmpty().withMessage('El correo es obligatorio').run(req);
        await check('password').notEmpty().withMessage('La contraseña es obligatoria').run(req);

        let errores = validationResult(req);

        if(!errores.isEmpty()){
            return res.status(400).json({
                errores: errores.array()
            })
        }

        //Registrar usuario
        await register(req.body);

        return res.status(200).json({
            msg: "Usuario registrado exitosamente"
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

export {
    auth,
    signup
}