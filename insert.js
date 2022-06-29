// const dbconnect = require('./mongodb');


// const is = async () => {
//     let data = await dbconnect();
//     let result = await data.insert(
//         [
//             { name: 'max 5', brand: 'micromax', price: 420, category: 'mobile' },
//             { name: 'max 2', brand: 'micromax', price: 520, category: 'mobile' },
//             { name: 'max 3', brand: 'micromax', price: 620, category: 'mobile' }

//         ]

//     )
//     if (result.acknowledged) {
//         console.warn("data is inserted")
//     }
// }

//  is();

// const dbConnect= require('./mongodb')

// const updateData=async ()=>{
//     let data = await dbConnect();
//     let result = await data.update(
//         { name:'max 5'},
//         {
//             $set:{name:'max pro 0', price:8888}
//         }
//         )
//     console.log(result)

// }

// updateData();

const dbConnect = require('./mongodb');

const deleteData=async ()=>{
let data = await dbConnect();
let result = await data.deleteMany({name:'max pro 5'})
console.log(result)

}
 
deleteData();