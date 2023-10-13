let products = [
    {
      "nombre": "Miel de 1 kg",
      "descripcion": "Deliciosa miel pura en un práctico envase de 1 kilogramo. Perfecta para uso en la cocina o como endulzante natural.",
      "stock": 50,
      "precioUSD": 15.99, // Precio en dólares
      "precioARS": 1599.00, // Precio en pesos argentinos
      "envioGratis": true,
      "id":"PREMIUM",
      "img": "https://media.istockphoto.com/id/478194970/es/foto/frasco-de-miel-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=lZG5kV424QSemXMk-EK_E64gsZYlOse_dwawTZ1c6HM="
    },
    {
      "nombre": "Miel de 500 gr",
      "descripcion": "Miel dorada en un envase de 500 gramos. Ideal para tu desayuno o como ingrediente en tus recetas favoritas.",
      "stock": 30,
      "precioUSD": 9.99, // Precio en dólares
      "precioARS": 999.00, // Precio en pesos argentinos
      "envioGratis": true,
      "id":"PREMIUM",
      "img": "https://imgs.search.brave.com/mXErss1aPpKf_Vs5yyw9KC84iATTVPAz5PeRr7QinMU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS90YXJyby1jcmlz/dGFsLW1pZWwtcHVy/YS1jdWNoYXJvbi1t/aWVsLWFpc2xhZG8t/c29icmUtZm9uZG8t/YmxhbmNvXzI1Mjk2/NS00OS5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
    },
    {
      "nombre": "Miel de 250 gr",
      "descripcion": "Miel de alta calidad en un frasco de 250 gramos. Perfecta para llevar a cualquier lugar y disfrutar de su dulzura natural.",
      "stock": 20,
      "precioUSD": 5.99, // Precio en dólares
      "precioARS": 599.00, // Precio en pesos argentinos
      "envioGratis": true,
      "id":"PREMIUM",
      "img": "https://imgs.search.brave.com/lR9aWlSS6fFo7r4jw_OBanhfa0p5l5dJlK21S6yctLU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF6MnhiRkhEUUwu/anBn"
    }
  ];

  function mostrarProductos() {
    let listaProductos = document.getElementById("productos-lista");
    for (let i = 0; i < products.length; i++) {
      let producto = products[i];
      const productoHTML = `
    <div class="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 m-8 productos">
        <div class="relative h-72 overflow-hidden">
            <img src="${producto.img}" alt="${producto.nombre}" class="w-full h-full object-cover object-center transition-transform transform hover:scale-110">
            <div class="absolute top-0 left-0 m-4 bg-gray-900 text-white text-xs px-2 py-1 rounded-full info">ID: ${producto.id}</div>
            <div class="absolute top-10 left-0 m-4 bg-gray-900 text-white text-xs px-2 py-1 rounded-full info">STOCK: ${producto.stock}</div>
        </div>
        <div class="p-4">
            <h2 class="text-3xl font-semibold mt-8 text-gray-900 ">${producto.nombre}</h2>
            <p class="text-gray-600  mb-10" info >${producto.descripcion}</p>

            <!-- Información Nutricional -->
            <div class="bg-orange-100 p-4">
                <h3 class="text-lg font-semibold info">Información Nutricional (por 100g):</h3>
                <table class="w-full mt-2 info">
                    <tr>
                        <td class="pr-4">Calorías:</td>
                        <td>304 kcal</td>
                    </tr>
                    <tr>
                        <td class="pr-4">Azúcares totales:</td>
                        <td>82.12 g</td>
                    </tr>
                    <tr>
                        <td class="pr-4">Carbohidratos:</td>
                        <td>82.4 g</td>
                    </tr>
                    <tr>
                        <td class="pr-4">Proteínas:</td>
                        <td>0.3 g</td>
                    </tr>
                    <tr>
                        <td class="pr-4">Grasa:</td>
                        <td>0 g</td>
                    </tr>
                    <tr>
                        <td class="pr-4">Fibra:</td>
                        <td>0.2 g</td>
                    </tr>
                    <tr>
                        <td class="pr-4">Agua:</td>
                        <td>17.10 g</td>
                    </tr>
                </table>
            </div>
            <div class="flex space-x-2 items-center mt-2">
                <p class="text-orange-600 text-lg font-semibold">USD: $${producto.precioUSD.toFixed(2)}</p>
                <p class="text-gray-700 text-lg font-semibold">ARS: $${producto.precioARS.toFixed(2)}</p>
            </div>
            <div class="flex items-center mt-4">
                <span class="bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded-full envio">Envío Gratis</span>
            </div>
            <button class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg mt-6 text-base transition-transform transform hover:scale-110 focus:ring-4 ring-orange-500 ring-opacity-50">
            <a
            href="../html/cart.html"
            class="text-white hover:bg-[#f2af29] hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >Contacto</a
          >
            </button>
        </div>
    </div>
`;
      const productoElement = document.createElement('div');
      productoElement.innerHTML = productoHTML;
      listaProductos.appendChild(productoElement);
    }
  }
  
  mostrarProductos()