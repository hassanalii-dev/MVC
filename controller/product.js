import Product from "../model/Product.js"

const getProductsController = async (req, res) => {

    try {

        const products = await Product.find()

        res.json(products)

    } catch (error) {

        res.status(500).json({message: "Error fetching products"})

    }

}

const saveProductController = async (req, res) => {

    try {

        const newProductFields = req.body

        const newProduct = new Product(newProductFields)

        await newProduct.save()

        res.status(201).json(newProduct)

    } catch (error) {

        res.status(500).json({message: "Error saving products"})

    }

}

const updatedProductController = async (req, res) => {

    try {

        const { id } = req.params

        const updatedProductFields = req.body

        const updatedProduct = await Product.findOneAndUpdate(

            { id: id },

            updatedProductFields,

            { new: true }

        )

        if (!updatedProduct) {

            return res.status(404).json({message: "Product not found"})

        }

        res.json(updatedProduct)

    } catch (error) {

        res.status(500).json({message: "Error updating product"})

    }

}

const deleteProductController = async (req, res) => {

    try {

        const { id } = req.params

        const deleteProduct = await Product.findOneAndDelete({ id: id })

        if (!deleteProduct) {

            return res.status(404).json({message: "Product not found"})

        }

        res.json({message: "Product deleted successfully"})

    } catch (error) {

        res.status(500).json({message: "Error deleting product"})

    }

}

export {

    getProductsController,

    saveProductController,

    updatedProductController,

    deleteProductController,

}