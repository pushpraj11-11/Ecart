import authService from "./auth.service";
import http from "./http.service"

const searchProducts = async (queryString) => {
    return await http.get(`http://localhost:3001/api/v1/products${queryString}`);
}

const saveProduct = async (data) => {
    return await http.post('http://localhost:3001/api/v1/products', data, {
        headers: {
            'x-auth-token': authService.getToken()
        }
    });
}

const editProduct = async (id, data) => {
    return await http.put(`http://localhost:3001/api/v1/products/${id}`, data, {
        headers: {
            'x-auth-token': authService.getToken()
        }
    });
}

const getProductDetails = async (id) => {
    return await http.get(`http://localhost:3001/api/v1/products/${id}`);
}

const deleteProduct = async (id) => {
    return await http.delete(`http://localhost:3001/api/v1/products/${id}`);
}

const getAllCategories = async () => {
    return await http.get(`http://localhost:3001/api/v1/products/categories`);
}

const createOrder = async (address, product, quantity) => {
    return await http.post('http://localhost:3001/api/v1/orders', {
        address,
        product,
        quantity
    }, {
        headers: {
            'x-auth-token': authService.getToken()
        }
    });
}

export default {
    saveProduct,
    editProduct,
    getProductDetails,
    getAllCategories,
    searchProducts,
    deleteProduct,
    createOrder
}