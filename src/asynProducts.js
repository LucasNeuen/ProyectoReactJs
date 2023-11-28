const products = [
    {
        id: 1,
        nombre: "Chombas manga cortas",
        precio: 5000,
        category: 'chombas',
        img: "https://d2r9epyceweg5n.cloudfront.net/stores/868/024/products/img_82031-d0a7435a7aec3f184816837343744666-1024-1024.jpeg",
        stock: 20,
        descripcion: "Chombas varios colores",
    },
    {
        id: 2,
        nombre: "Remeras manga cortas",
        precio: 3000,
        category: 'remeras',
        img: "https://http2.mlstatic.com/D_990641-MLA47059375434_082021-O.jpg",
        stock: 24,
        descripcion: "remeras varios colores",
    },
    {
        id: 3,
        nombre: "Jeans",
        precio: 7000,
        category: 'jeans',
        img: "https://acdn.mitiendanube.com/stores/936/094/products/whatsapp-image-2019-09-24-at-10-14-32-am1-9ce1013e2193618fad15713228623860-1024-1024.jpeg",
        stock: 10,
        descripcion: "jeans varios colores",
    },
    {
        id: 4,
        nombre: "Bermudas",
        precio: 4000,
        category: 'bermudas',
        img: "https://http2.mlstatic.com/D_949602-MLA53382030366_012023-F.jpg",
        stock: 16,
        descripcion: "bermudas varios colores",
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id == productId))
        }, 500)
    })
}

export const getProductsById = (categoryId) =>{
    return new Promise ((resolve) =>{
        setTimeout (() =>{
            resolve(products.filter( prod => prod.category == categoryId))
        })
    })
}