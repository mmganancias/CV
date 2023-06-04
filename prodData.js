const productos = [
    {
        "codigo": "01",
        "nombre":"Conjunto-Ada",
        "genero": "F",
        "talle": {
            "S" : "true",
            "M": "true",
            "L": "true"
        }, 
        "stock": "true",
        "imagen": "../imgs/ropainterior/conjunto1.jpg", 
        "precioDeVenta": "2500"
    },
    {
        "codigo": "02",
        "nombre": "Bombacha-Boom",
        "genero": "F",
        "talle":{
            "S" : "true",
            "M": "true",
            "L": "true"
        },  
        "stock": "true",
        "imagen": "../imgs/ropainterior/conjunto2.jpg", 
        "precioDeVent": "1000"
    },
    {
        "codigo": "03",
        "nombre":"Conjunto-Lisa",
        "genero": "F",
        "talle":{
            "S" : "true",
            "M": "true",
            "L": "true"
        },  
        "stock": "true",
        "imagen": "../imgs/ropainterior/conjunto3.jpg",  
        "precioDeVenta": "3000"
    },
    {
        "codigo": "04",
        "nombre": "Conjunto-Eli",
        "genero": "F",
        "talle":{
            "S" : "true",
            "M": "true",
            "L": "true"
        },  
        "stock": "true",
        "imagen": "../imgs/ropainterior/conjunto4.jpg",  
        "precioDeVenta":"3500"
    },
    {
        "codigo": "05",
        "nombre": "Conjunto-Basic",
        "genero": "F",
        "talle":{
            "S" : "true",
            "M": "true",
            "L": "true"
        },  
        "stock": "true",
        "imagen": "../imgs/ropainterior/conjunto5.jpg",  
        "precioDeVenta":"3500"
    },
    {
        "codigo": "06",
        "nombre": "Bombacha-basic",
        "genero": "F",
        "talle":{
            "S" : "true",
            "M": "true",
            "L":"true"
        },  
        "stock": "true",
        "imagen": "../imgs/ropainterior/conjunto6.jpg",  
        "precioDeVenta": "1500"
    },
    {
        "codigo": "07",
        "nombre": "Conjunto-Stel",
        "genero": "F",
        "talle":{
            "S" : "true",
            "M": "true",
            "L":"true"
        },  
        "stock": "true",
        "imagen": "../imgs/ropainterior/conjunto7.jpg",  
        "precioDeVenta": "2300"
    },
    {
        "codigo": "08",
        "nombre": "Conjunto-Elegance",
        "genero": "F",
        "talle":{
            "S" : "true",
            "M": "true",
            "L":"true"
        },  
        "stock": "true",
        "imagen":"../imgs/ropainterior/conjunto8.jpg",  
        "precioDeVenta": "3200"
    },
    {
        "codigo": "09",
        "nombre": "Conjunto-Rosa",
        "genero": "F",
        "talle":{
            "S" :"true",
            "M": "true",
            "L": "true"
        },  
        "stock": "true",
        "imagen":"../imgs/ropainterior/conjunto9.jpg", 
        "precioDeVenta": "1300"
    },
    {
        "codigo": "010",
        "nombre": "Pantalon-softy",
        "genero": "F",
        "talle":{
            "S" : "true",
            "M": "true",
            "L": "true"
        },  
        "stock": "true",
        "imagen": "../imgs/accesorios/pantalon-softy-alto-invierno.jpg", 
        "precioDeVenta": "2500"
    },
    {
        "codigo": "011",
        "nombre": "Pijama-Mondrian",
        "genero": "F",
        "talle":{
            "S" : "true",
            "M": "true",
            "L":"true"
        },  
        "stock": "true",
        "imagen":"../imgs/accesorios/pijama-manga-larga-mondrian.jpg", 
        "precioDeVenta": "1000"
    },
    {
        "codigo": "012",
        "nombre": "Pijama-day-and-night",
        "genero": "F",
        "talle":{
            "S" : "true",
            "M": "true",
            "L": "true"
        },  
        "stock": "true",
        "imagen":"../imgs/accesorios/pijama-manga-larga-day-and-night.jpg", 
        "precioDeVenta": 3000
    },
    {
        "codigo": "013",
        "nombre": "Medias-a-rayas",
        "genero": "F",
        "talle":{
            "S" : "true",
            "M": "true",
            "L": "true"
        },  
        "stock": "true",
        "imagen": "../imgs/accesorios/1-2-cana-power-stripes-everyday.jpg", 
        "precioDeVenta": "3500"
    },
    {
        "codigo": "014",
        "nombre": "Pijama-Tuplin",
        "genero": "F",
        "talle":{
            "S": "true",
            "M": "true",
            "L": "true"
        },  
        "stock": "true",
        "imagen":"../imgs/accesorios/pijama-manga-larga-tulip.jpg", 
        "precioDeVenta": "3500"
    },
    {
        "codigo": "015",
        "nombre": "Medias-Deers",
        "genero": "F",
        "talle":{
            "S" : "true",
            "M": "true",
            "L":"true"
        },  
        "stock": "true",
        "imagen":"../imgs/accesorios/soquetes-deers-color.jpg", 
        "precioDeVenta": "1500"
    },
    {
        "codigo": "016",
        "nombre": "Pantuflas-softy",
        "genero": "F",
        "talle":{
            "S" : "true",
            "M": "true",
            "L": "true"
        },  
        "stock": "true",
        "imagen": "../imgs/accesorios/pantuflas-softy-alto-invierno.jpg", 
        "precioDeVenta": "2300"
    },
    {
        "codigo": "017",
        "nombre": "Pantalon-cuadrille",
        "genero": "F",
        "talle":{
            "S" : "true",
            "M": "true",
            "L": "true"
        },  
        "stock": "true",
        "imagen": "../imgs/accesorios/pantalon-cuadrille-softy-alto-invierno.jpg", 
        "precioDeVenta": "3200"
    },
    {
        "codigo": "18",
        "nombre": "Pijama-a-cuadros",
        "genero": "F",
        "talle":{
            "S" : "true",
            "M": "true",
            "L": "true"
        },  
        "stock": "true",
        "imagen":"../imgs/accesorios/pijama-manga-larga-mondrianc.jpg", 
        "precioDeVenta": "1300"
    }
]