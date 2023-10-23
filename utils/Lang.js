class Lang {
    // AUTH y Authorization
    static CREATING_ADMIN = 'Creando administrador por defecto';
    static INVALID_USER_PASS = 'Usuario / Password no son correctos';
    static UNAUTHORIZED = 'No autorizado a realizar esta acción';
    static INVALID_TOKEN = 'Sesión expirada, por favor inicie sesión nuevamente';


    // Products
    static PRODUCT_NAME_REQUIRED = 'El nombre del producto es obligatorio';
    static PRICE_REQUIRED = 'El precio del producto es obligatorio';
    static PRICE_INVALID = 'El precio del producto es inválido';
    static STOCK_REQUIRED = 'La cantidad en stock es obligatoria';
    static STOCK_INVALID = 'La cantidad en stock es inválida';
    static PRODUCT_EXISTS = 'El producto ya existe';
    static PRODUCT_NOT_FOUND = 'No se encontró el producto';
    static PRODUCT_ADDED = 'Producto agregado correctamente';
    static PRODUCT_WAREHOUSE_REQUIRED = 'El almacén es obligatorio';
    static PRODUCT_ID_REQUIRED = 'El ID del producto es obligatorio';
    static PRODUCT_ID_INVALID = 'El ID del producto es inválido';
    static PRODUCT_STOCK_REQUIRED = 'La cantidad de stock es obligatoria';
    static PRODUCT_SKU_INVALID = "El código único es inválido"
    static PRODUCT_SKU_REQUIRED = "El código único es inválido"
    static PRODUCT_DESCRIPTION_REQUIRED = "La descripción del producto es requrida"


    // Users
    static NAME_REQUIRED = 'El nombre del usuario es obligatorio';
    static EMAIL_REQUIRED = 'El correo electrónico es obligatorio';
    static EMAIL_INVALID = 'El correo electrónico es inválido';
    static PASSWORD_REQUIRED = 'La contraseña es obligatoria';
    static USER_EXISTS = 'El usuario ya existe';
    static USER_NOT_FOUND = 'No se encontró el usuario';
    
    // Others
    static INVALID_ID = 'El ID proporcionado es inválido';
    static INTERNAL_SERVER_ERROR = 'Error interno del servidor';
    static INVALID_JSON = 'El JSON proporcionado es inválido';
    // Categories
    static CATEGORY_NAME_REQUIRED = 'El nombre de la categoría es obligatorio';
    static CATEGORY_EXISTS = 'La categoría ya existe';
    static CATEGORY_NOT_FOUND = 'No se encontró la categoría';
    static SHORTNAME_REQURED = 'El nombre corto de la categoría es obligatorio';
    static SHORTNAME_EXISTS = 'El nombre corto de la categoría ya existe';
    static DESCRIPTION_REQUIRED = 'La descripción de la categoría es obligatoria';
    static SHORTNAME_SIZE = 'El nombre corto de la categoría debe tener 5 o menos caracteres';
    static CATEGORY_NOT_EXISTS = 'La categoría no existe';
    static CATEGORY_DELETED = 'Categoría eliminada correctamente';
}
module.exports = Lang;