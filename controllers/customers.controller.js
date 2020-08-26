const Customers = require('../models/customers');

// post: agregar cliente
exports.add = async (req, res) => {
    const customer = new Customers(req.body);

    try {
        await customer.save();
        res.json( { message: '¡Nuevo cliente agregado!'});
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
        
    }
};

// get: lista de clientes
exports.list = async (req, res) => {
    try {
    const customers = await Customers.find( {});
    res.json(customers);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

// get: leer cliente por id
exports.show = async (req, res, next) => {
    try {
        const customer = await Customers.findById(req.params.id);
        if( !customer) {
            res.status(404).json( {
                message: '¡El cliente no existe!'
            });
        }

        res.json(customer);
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
    }
}

// actualizar cliente
exports.update = async (req, res, next) => {
    try {
       const customer = await Customers.findByIdAndUpdate( 
           { _id: req.params.id},
           req.body,
           { new: true }
        ); 
        res.json( {
            message: 'Cliente actualizado correctamente'
        });
    } catch (error) {
        /*res.status(400).json({
            message: 'Error al procesar la petición'
        });*/
        res.send(error); 
        next(); 
    }
};

// eliminar cliente
exports.delete = async (req, res, next) => {
    try {
        await Customers.findByIdAndDelete({ _id: req.params.id });
        res.json({ message: 'El cliente ha sido eliminado' });
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });   
    }
};
