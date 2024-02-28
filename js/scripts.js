const product = [
    {
        Name: 'T-Shirt 001',
        price: 23.5,
        category:'Man',
        image: 'Denim-Vest 1.jpg'
    },
    {
        Name: 'T-Shirt 002',
        price: 13.5,
        category:'Man',
        image: 'Polo-Shirt 1.jpg'
    },
    {
        Name: 'T-Shirt 003',
        price: 20,
        category:'Man',
        image: 'Shirt1.jpg'
    },
    {
        Name: 'T-Shirt 004',
        price: 17.5,
        category:'Women',
        image: 'T-Shirt-With-Print1.jpg'
    },
    {
        Name: 'T-Shirt 005',
        price: 14.3,
        category:'Man',
        image: 'T-Shirt1.jpg'
    },
    {
        Name: 'T-Shirt 006',
        price: 12,
        category:'Man',
        image: 'T-Shirt2.jpg'
    },
    {
        Name: 'Jean',
        price: 18,
        category:'Man',
        image: 'Trousers 1.jpg'
    },
    {
        Name: 'Women Suit',
        price: 20.5,
        category:'Women',
        image: 'Trousers 2.jpg'
    },
]

console.log(product);
var data = '';
for(var i=0;i<product.length;i++){
    data = data + `
            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src="assets/Image/${product[i].image}" alt="..." />
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">${product[i].Name}</h5>
                            <p>Category: ${product[i].category}</p>
                            <p class="text-danger">${product[i].price} $</p>
                        </div>
                    </div>
                    <!-- Product actions-->
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                    </div>
                </div>
            </div>
        `;
}
document.getElementById('show').innerHTML = data;

