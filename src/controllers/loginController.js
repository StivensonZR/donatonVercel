
import pais from '../models/pais.js'
const controller = {};
controller.vista_login = (req, res) => {
    res.render('./login')
}

controller.cargar_nacionalidad = (req, res) => {
    pais.ConsultarNaniconalidad().then((response) => {
            res.json({
                status: 'ok',
               nacionalidad: response
            })
    }).catch((err) => {
        console.log("Error " + err)
    });
}




export default controller