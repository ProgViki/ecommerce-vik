import React from 'react'



const Products = () => {

    const productData = [
        {
            id: 1,
            img: image1,
            title: "Pear Phone 8",
            category: "Mobile Phone",
            price: "1234"
        },
        {
            id: 2,
            img: image2,
            title: "Pear Phone 8",
            category: "Mobile Phone",
            price: "1234"
        },
        {
            id: 3,
            img: image3,
            title: "Pear Phone 8",
            category: "Mobile Phone",
            price: "1234"
        },
        {
            id: 4,
            img: image4,
            title: "Pear Phone 8",
            category: "Mobile Phone",
            price: "1234"
        },
        {
            id: 5,
            img: image5,
            title: "Pear Phone 8",
            category: "Mobile Phone",
            price: "1234"
        },
        {
            id: 6,
            img: image6,
            title: "Pear Phone 8",
            category: "Mobile Phone",
            price: "1234"
        },
        {
            id: 7,
            img: image7,
            title: "Pear Phone 8",
            category: "Mobile Phone",
            price: "1234"
        },
        {
            id: 8,
            img: image8,
            title: "Pear Phone 8",
            category: "Mobile Phone",
            price: "1234"
        },
    ]
  return (
    <div className='container mt-32'>
        <div className='sm:flex justify-between items-center'>
            <h2 className='text-4xl font-medium'>Products</h2>
            <div className='flex text-gray-500 gap-4 text-4xl mt-4 sm:mt-0'>
                <div className='text-black'>New</div>
                <div>Featured</div>
                <div>Top Sellers</div>
            </div>
        </div>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {productData.map(product) =>{
                key={product.id}
                img={product.img}
                category={product.category}
                title={product.title}
                price={product.price}
            }}
        </div>
    </div>
  )
}

export default Products