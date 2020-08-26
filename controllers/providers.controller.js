const Providers = require('../models/providers');

exports.add = async (req, res) => {
    const provider = new Providers(req.body);

    try {
        await provider.save();
        res.json( { message: '¡Proveedor agregado!'});
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

exports.list = async (req, res) => {
    try {
        const providers = await Providers.find( {});
        res.json(providers);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

exports.show = async(req, res, next) => {
    try {
        const provider = await Providers.findById(req.params.id);
        if( !provider) {
            res.status(404).json ( {
                message: 'No existe el proveedor'
            });
        }
        res.json(provider);
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
    }
};

exports.update = async (req, res, next) => {
    try {
        await Providers.findByIdAndUpdate(
            { _id: req.params.id},
            req.body,
        );
        res.json( {
            message: 'El proveedor ha sido actualizado satisfactoriamente'
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
    }
};

exports.delete = async (req, res, next) => {
    try {
        await Providers.findByIdAndDelete({ _id: req.params.id });
        res.json({ message: 'El Proveedor ha sido eliminado' });
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });   
    }
};