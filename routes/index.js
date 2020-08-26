const express = require('express');

const router = express.Router();

const customersController = require('../controllers/customers.controller');
const productsController = require('../controllers/products.controller');
const providersController = require('../controllers/providers.controller');
module.exports = function() {
    // post: /customers
    router.post('/customers', customersController.add);
    //get: /customers
    router.get('/customers', customersController.list);
    
    // leer cliente get: /customers/:id
    router.get('/customers/:id', customersController.show);
    // put: /customers/:id
    router.put('/customers/:id', customersController.update);
    // delete: /customers/:id
    router.delete('/customers/:id', customersController.delete);


    // peticiones de products
    //post: /products
    router.post('/products',
        productsController.fileUpload,
        productsController.add
    );
    // get: /products
    router.get('/products', productsController.list);
    // get: products/:
    router.get('/products/:id', productsController.show);
    // put: /products/:id
    router.put('/products/:id',
        productsController.fileUpload, 
        productsController.update
     );
    //delete: /products/:id
    router.delete('/products/:id', productsController.delete);

    // peticiones proveedores
    router.post('/providers', providersController.add);

    router.get('/providers', providersController.list);

    router.get('/providers/:id', providersController.show);

    router.put('/providers/:id', providersController.update);

    router.delete('/providers/:id', providersController.delete);
    return router;
};
