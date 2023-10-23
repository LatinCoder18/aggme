const CategorieService = require('../services/CategorieService');
const { response } = require('express')
const Lang = require('../utils/Lang');
const ApiError = require('../utils/ApiError');

class CategorieController {
    static async addCategorie(req, res = response) {
        const { shortName, categorieName, description } = req.body;
        const category = CategorieService.getCategoryByshortName(shortName);
        if (category) {
            return res.status(400).json(new ApiError({ clientErrorMessage: Lang.CATEGORY_EXISTS, debugErrorMessage: Lang.CATEGORY_EXISTS }))
        }
        const newCategory = CategorieService.createCategory({ shortName, categorieName, description });
        return res.status(201).json({
            category: newCategory,
        })
    }
    static async getCategorie(req, res = response) {
        const { shortName } = req.params;
        const category = CategorieService.getCategoryByshortName(shortName);
        if (!category) {
            return res.status(404).json(new ApiError({ clientErrorMessage: Lang.CATEGORY_NOT_EXISTS, debugErrorMessage: Lang.CATEGORY_NOT_EXISTS }))
        }
        return res.status(200).json({
            category,
        })
    }
    static async getCategories(req, res = response) {
        const categories = CategorieService.getCategories();
        return res.status(200).json({
            categories,
        })
    }
    static async updateCategorie(req, res = response) {
        const { shortName, categorieName, description } = req.body;
        const category = CategorieService.getCategoryByshortName(shortName);
        if (!category) {
            return res.status(404).json(new ApiError({ clientErrorMessage: Lang.CATEGORY_NOT_EXISTS, debugErrorMessage: Lang.CATEGORY_NOT_EXISTS }))
        }
        const updatedCategory = CategorieService.updateCategory({ shortName, categorieName, description });
        return res.status(200).json({
            category: updatedCategory,
        })
    }
    static async deleteCategorie(req, res = response) {
        const { shortName } = req.params;
        const category = CategorieService.getCategoryByshortName(shortName);
        if (!category) {
            return res.status(404).json(new ApiError({ clientErrorMessage: Lang.CATEGORY_NOT_EXISTS, debugErrorMessage: Lang.CATEGORY_NOT_EXISTS }))
        }
        CategorieService.deleteCategory(shortName);
        return res.status(200).json({
            message: Lang.CATEGORY_DELETED,
            category: category
        })
    }
}

module.exports = CategorieController;