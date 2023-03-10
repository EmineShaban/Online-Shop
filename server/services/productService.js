// const Product = require('../models/Product');
// const User = require('../models/User');

// exports.getAllProducts = () => Product.find();

// exports.createProduct = async (name,description,price,imageUrl,category,creator) => {

//     const userId = creator._id;
//     const user = await User.findById(userId);

//     if (!imageUrl.startsWith('http')) {
//         throw{
//             error:'Image Url shoud start with http/https'
//         }
//     };

//     const isPurchased = false;

//     const product = await Product.create({name,description,price,imageUrl,category,creator,isPurchased});

//     user.soldProducts.push(product);
//     user.save();

//     return product;

// };

// exports.edit = async (productId,productData,userId) => {

//     const product = await Product.findById(productId).populate('creator');
//     const creator = product.creator;
//     const isPurchased = product.isPurchased;
//     productData.isPurchased = isPurchased;

//     if (userId != creator._id) {
//         throw{
//             error: 'You must be the owner to edit!'
//         };
//     };

    
//     if (!productData.imageUrl.startsWith('http')) {
//         throw{
//             error:'Image Url shoud start with http/https'
//         };
//     };

//     if(productData.name < 3){
//         throw{
//             error:'Name shoud be at least 3 characters long !'
//         };
//     };

//     if(productData.category !== 'Clothes' && productData.category !== 'Shoes' 
//     && productData.category !== 'Accessories'){
//         throw{
//             error:'Category shoud be Clothes, Shoes or Accessories !'
//         };
//     };

//     if(productData.price <= 0){
//         throw{
//             error:'Price shoud be bigger then 0'
//         };
//     }

//     const editedProduct = await Product.findByIdAndUpdate(productId,productData);
    
//     return editedProduct;

// };

// exports.delete = async (productId,userId) => {

//     const product = await Product.findById(productId).populate('creator');
//     const creator = product.creator;

//     if (userId != creator._id) {
//         throw{
//             error: 'You must be the owner to delete!'
//         };
//     };

//     await Product.findByIdAndDelete(productId);
// };


// exports.purchaseProduct = async (productId,userId) => {

//     const user = await User.findById(userId); 
//     const product = await Product.findById(productId).populate('creator');
    
//     const creator = product.creator;
    

//     if (userId == creator._id) {
//         throw{
//             error: 'You cant purchase this item if you are the creator!'
//         };
//     };

//     if (user.wallet < product.price) {
//         throw{
//             error: 'You dont have enough money to purchise this item!'
//         };
//     }

//     user.wallet -= product.price;
//     user.save();

//     product.customers.push(user);
//     product.isPurchased = true;
//     product.save();

//     return product;
    
// }


