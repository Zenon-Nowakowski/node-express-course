const product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const search = 'ab'
    const products = await product.find({
        name: {$regex: search, $options: 'i'},
    })
    res.status(200).json({ products, hits: products.length })
}
const getAllProducts = async (req, res) => {
    const {featured, company,name, sort, numfilter} = req.query
    const queryObject = {}

    if(featured){
        queryObject.featured = featured === 'true' ? true : false
    }
    if(company){
        queryObject.company = company
    }
    if(name){
        queryObject.name = {$regex: name, $options: 'i'}
    }
    if (numfilter) {
        const operatorMap = {
          '>': '$gt',
          '>=': '$gte',
          '=': '$eq',
          '<': '$lt',
          '<=': '$lte',
        };
        const regEx = /\b(<|>|>=|=|<|<=)\b/g;
        let filters = numfilter.replace(
          regEx,
          (match) => `-${operatorMap[match]}-`
        );
        const options = ['price', 'rating'];
        filters = filters.split(',').forEach((item) => {
          const [field, operator, value] = item.split('-');
          if (options.includes(field)) {
            queryObject[field] = { [operator]: Number(value) };
          }
        });
      }
    console.log(queryObject)
    let result = product.find(queryObject)
    if(sort){
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)

    }
    else{
        result = result.sort('createdAt')
    }
    const products = await result
    res.status(200).json({ products, hits: products.length })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
}
