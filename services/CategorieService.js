let { categories } = require('../database/database');

class CategorieService {

    static getCategories() {
        return categories;
    }

    static getCategoryByshortName(shortName) {
        return categories.find(c => c.shortName === shortName);
    }

    static createCategory(categorie) {
        categories.push(categorie);
        return categorie;
    }

    static updateCategory(updatedCategory) {
        const categoryIndex = categories.findIndex(c => c.shortName === updatedCategory.shortName);
        categories[categoryIndex] = updatedCategory;
        return updatedCategory;
    }

    static deleteCategory(shortName) {
        const categoryIndex = categories.findIndex(c => c.shortName === shortName.shortName);
        categories.splice(categoryIndex, 1);
    }
}

module.exports = CategorieService;