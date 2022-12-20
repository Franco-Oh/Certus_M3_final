let navMenu = document.querySelector('#menu-bar');
let navMenuClose = document.querySelector('.modal-navbar__close');

function menuMobile (){
    navMenu.addEventListener('click', () => {
        document.querySelector('.modal-navbar_background').classList.remove('no-visible');
    });
    navMenuClose.addEventListener('click', () => {
        document.querySelector('.modal-navbar_background').classList.add('no-visible');
    });
}

menuMobile();


// Inicio Cantidades de cada producto en catalogo
let minusBtn1 = document.querySelector('#input__minus1');
let plusBtn1 = document.querySelector('#input__plus1');
let userInput1 = document.querySelector('#input__num1');
let minusBtn2 = document.querySelector('#input__minus2');
let plusBtn2 = document.querySelector('#input__plus2');
let userInput2 = document.querySelector('#input__num2');
let minusBtn3 = document.querySelector('#input__minus3');
let plusBtn3 = document.querySelector('#input__plus3');
let userInput3 = document.querySelector('#input__num3');
let minusBtn4 = document.querySelector('#input__minus4');
let plusBtn4 = document.querySelector('#input__plus4');
let userInput4 = document.querySelector('#input__num4');

function catalogo1(){
    let userInputNum1 = 0;
    minusBtn1.addEventListener('click', () => {
        console.log('si funciona');
        userInputNum1--;
        if(userInputNum1 <= 0){
            userInputNum1 = 0;
        }
        userInput1.value = userInputNum1;
    });
    
    plusBtn1.addEventListener('click', () => {
        console.log('si funciona');
        userInputNum1++;
        userInput1.value = userInputNum1;
    });
}

function catalogo2(){
    let userInputNum2 = 0;
    minusBtn2.addEventListener('click', () => {
        console.log('si funciona');
        userInputNum2--;
        if(userInputNum2 <= 0){
            userInputNum2 = 0;
        }
        userInput2.value = userInputNum2;
    });

    plusBtn2.addEventListener('click', () => {
        console.log('si funciona');
        userInputNum2++;
        userInput2.value = userInputNum2;
    });
}

function catalogo3(){
    let userInputNum3 = 0;
    minusBtn3.addEventListener('click', () => {
        console.log('si funciona');
        userInputNum3--;
        if(userInputNum3 <= 0){
            userInputNum3 = 0;
        }
        userInput3.value = userInputNum3;
    });

    plusBtn3.addEventListener('click', () => {
        console.log('si funciona');
        userInputNum3++;
        userInput3.value = userInputNum3;
    });
}

function catalogo4(){
    let userInputNum4 = 0;
    minusBtn4.addEventListener('click', () => {
        console.log('si funciona');
        userInputNum4--;
        if(userInputNum4 <= 0){
            userInputNum4 = 0;
        }
        userInput4.value = userInputNum4;
    });

    plusBtn4.addEventListener('click', () => {
        console.log('si funciona');
        userInputNum4++;
        userInput4.value = userInputNum4;
    });
}
// fin Cantidades de cada producto en catalogo

// aparece resumen de compras al pasar por el carrito
const aparecerCarrito = document.querySelector('#carrito');

aparecerCarrito.addEventListener("mouseover", () => {
    document.querySelector('.cart-modal').classList.remove('no-visible');
    console.log('acaba de entrar el mouse');
}, false);

aparecerCarrito.addEventListener("mouseout", () => {
    console.log('acaba de salir el mouse');     
    setTimeout(() => {
         document.querySelector('.cart-modal').classList.add('no-visible');
         
    }, 6000);
}, false);


// Agregar productos al carrito en catalogo

function agregarAlCarrito(){
    catalogo1();
    catalogo2();
    catalogo3();
    catalogo4();
    
    let cartNum = 0;
 
    const addToCartBtn1 = document.querySelector('#details__button1');
    const addToCartBtn2 = document.querySelector('#details__button2');
    const addToCartBtn3 = document.querySelector('#details__button3');
    const addToCartBtn4 = document.querySelector('#details__button4');
    
    addToCartBtn1.addEventListener('click', () => {
        cantRepetida = parseInt(userInput1.value);
        for (let i = 0; i < cantRepetida; i++) {
            cartNum++;
        }
        document.querySelector('#nav__cart-num').classList.remove('no-visible');
        document.querySelector('#nav__cart-num').innerHTML = cartNum;
        console.log(cartNum);

        const nombre_producto = "Teddy Rick";
        let precio = 50;
        let cantidad = userInput1.value;
        let multiplica = precio * cantidad;

        fetch('/api/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre_producto: nombre_producto,
                precio: precio,
                cantidad: userInput1.value,
            })
        });

        document.querySelector('.cart-modal__container-cart').innerHTML += '<div class="cart-modal__container-details row d-flex justify-content-center align-items-center"><div class="col-3"><img class="cart-modal__img" src="./img/funko001.jpg" alt="funko"></div><div class="col-5"><p class="cart-modal__prod">' + nombre_producto + '</p><p class="cart-modal__price">S/ ' + precio + '.00</p></div><div class="col"><p class="cart-modal__num">' + cantidad + '</p></div><div class="col-3"><p class="cart-modal__totalprice">S/ ' + multiplica + '.00</p></div></div>'
    })

    addToCartBtn2.addEventListener('click', () => {
        cantRepetida = parseInt(userInput2.value);
        for (let i = 0; i < cantRepetida; i++) {
            cartNum++;
        }
        document.querySelector('#nav__cart-num').classList.remove('no-visible');
        document.querySelector('#nav__cart-num').innerHTML = cartNum;
        console.log(cartNum);

        const nombre_producto = "Morty";
        let precio = 50;
        let cantidad = userInput2.value;
        let multiplica = precio * cantidad;

        fetch('/api/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre_producto: nombre_producto,
                precio: precio,
                cantidad: userInput2.value,
            })
        });
        document.querySelector('.cart-modal__container-cart').innerHTML += '<div class="cart-modal__container-details row d-flex justify-content-center align-items-center"><div class="col-3"><img class="cart-modal__img" src="./img/funko002.jpg" alt="funko"></div><div class="col-5"><p class="cart-modal__prod">' + nombre_producto + '</p><p class="cart-modal__price">S/ ' + precio + '.00</p></div><div class="col"><p class="cart-modal__num">' + cantidad + '</p></div><div class="col-3"><p class="cart-modal__totalprice">S/ ' + multiplica + '.00</p></div></div>';

        document.querySelector('.cart-list__list'),innerHTML += '<div class="row text-center justify-content-evenly align-items-center m-3 border-top border-secondary border-opacity-50"><div class="col-3"><img class="cart-list__img" src="./img/funko001.jpg" alt="funko"></div><div class="col-2"><p class="cart-list__prod">' + nombre_producto + '</p><p class="cart-list__price">S/ ' + precio + '.00</p></div><div class="col-2"><p>Cantidad</p><input class="cart-list__num" type="number" value="' + cantidad + '" readonly></div><div class="col-2"><p class="cart-list__totalprice">S/ ' + multiplica + '.00</p></div><div class="col-2"><i class="bi bi-trash-fill"></i></div></div>';
    })

    addToCartBtn3.addEventListener('click', () => {
        cantRepetida = parseInt(userInput3.value);
        for (let i = 0; i < cantRepetida; i++) {
            cartNum++;
        }
        document.querySelector('#nav__cart-num').classList.remove('no-visible');
        document.querySelector('#nav__cart-num').innerHTML = cartNum;
        console.log(cartNum);

        const nombre_producto = "Pickle Rick";
        let precio = 50;
        let cantidad = userInput3.value;
        let multiplica = precio * cantidad;

        fetch('/api/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre_producto: nombre_producto,
                precio: precio,
                cantidad: userInput3.value,
            })
        });
        document.querySelector('.cart-modal__container-cart').innerHTML += '<div class="cart-modal__container-details row d-flex justify-content-center align-items-center"><div class="col-3"><img class="cart-modal__img" src="./img/funko003.jpg" alt="funko"></div><div class="col-5"><p class="cart-modal__prod">' + nombre_producto + '</p><p class="cart-modal__price">S/ ' + precio + '.00</p></div><div class="col"><p class="cart-modal__num">' + cantidad + '</p></div><div class="col-3"><p class="cart-modal__totalprice">S/ ' + multiplica + '.00</p></div></div>'
    })

    addToCartBtn4.addEventListener('click', () => {
        cantRepetida = parseInt(userInput4.value);
        for (let i = 0; i < cantRepetida; i++) {
            cartNum++;
        }
        document.querySelector('#nav__cart-num').classList.remove('no-visible');
        document.querySelector('#nav__cart-num').innerHTML = cartNum;
        console.log(cartNum);

        const nombre_producto = "King Rick";
        let precio = 50;
        let cantidad = userInput4.value;
        let multiplica = precio * cantidad;

        fetch('/api/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre_producto: nombre_producto,
                precio: precio,
                cantidad: userInput4.value,
            })
        });
        document.querySelector('.cart-modal__container-cart').innerHTML += '<div class="cart-modal__container-details row d-flex justify-content-center align-items-center"><div class="col-3"><img class="cart-modal__img" src="./img/funko004.jfif" alt="funko"></div><div class="col-5"><p class="cart-modal__prod">' + nombre_producto + '</p><p class="cart-modal__price">S/ ' + precio + '.00</p></div><div class="col"><p class="cart-modal__num">' + cantidad + '</p></div><div class="col-3"><p class="cart-modal__totalprice">S/ ' + multiplica + '.00</p></div></div>'
    })
}

agregarAlCarrito();

//catalogo

function pagCatalog(){
    console.log(fetch('/api/productos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre_producto,
            precio,
            cantidad,
        })
    }))
    
}