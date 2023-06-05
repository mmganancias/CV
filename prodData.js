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
        "precioDeVenta": "2500",
        "categoria": {
            "nombre": "conjuntos",
            "id": "ropa interior"
        }
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
        "precioDeVent": "1000",
        "categoria": {
            "nombre": "bombachas",
            "id": "ropa interior"
        }
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
        "precioDeVenta": "3000",
        "categoria": {
            "nombre": "conjuntos",
            "id": "ropa interior"
        }
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
        "precioDeVenta":"3500",
        "categoria": {
            "nombre": "conjuntos",
            "id": "ropa interior"
        }
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
        "precioDeVenta":"3500",
        "categoria": {
            "nombre": "conjuntos",
            "id": "ropa interior"
        }
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
        "precioDeVenta": "1500",
        "categoria": {
            "nombre": "bombachas",
            "id": "ropa interior"
        }
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
        "precioDeVenta": "2300",
        "categoria": {
            "nombre": "conjuntos",
            "id": "ropa interior"
        }
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
        "precioDeVenta": "3200",
        "categoria": {
            "nombre": "conjunto",
            "id": "ropa interior"
        }
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
        "precioDeVenta": "1300",
        "categoria": {
            "nombre": "conjunto",
            "id": "ropa interior"
        }
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
        "precioDeVenta": "2500",
        "categoria": {
            "nombre": "pijamas",
            "id": "accesorios"
        }
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
        "precioDeVenta": "1000",
        "categoria": {
            "nombre": "pijamas",
            "id": "accesorios"
        }
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
        "precioDeVenta": "3000",
        "categoria": {
            "nombre": "pijamas",
            "id": "accesorios"
        }
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
        "precioDeVenta": "3500",
        "categoria": {
            "nombre": "medias",
            "id": "accesorios"
        }
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
        "precioDeVenta": "3500",
        "categoria": {
            "nombre": "pijamas",
            "id": "accesorios"
        }
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
        "precioDeVenta": "1500",
        "categoria": {
            "nombre": "medias",
            "id": "accesorios"
        }
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
        "precioDeVenta": "2300",
        "categoria": {
            "nombre": "pantuflas",
            "id": "accesorios"
        }
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
        "precioDeVenta": "3200",
        "categoria": {
            "nombre": "pijamas",
            "id": "accesorios"
        }
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
        "precioDeVenta": "1300",
        "categoria": {
            "nombre": "pijamas",
            "id": "accesorios"
        }
    },
    {
        "codigo": "19",
        "nombre": "Corpiño-black",
        "genero": "F",
        "talle":{
            "S" : "true",
            "M": "true",
            "L": "true"
        },  
        "stock": "true",
        "imagen":"../imgs/corpiño1.jpg", 
        "precioDeVenta": "1700",
        "categoria": {
            "nombre": "corpiños",
            "id": "ropa interior"
        }
    },
    {
        "codigo": "10",
        "nombre": "Corpiño-pink",
        "genero": "F",
        "talle":{
            "S" : "true",
            "M": "true",
            "L": "true"
        },  
        "stock": "true",
        "imagen":"../imgs/corpiño2.jpg", 
        "precioDeVenta": "1700",
        "categoria": {
            "nombre": "corpiños",
            "id": "ropa interior"
        }
    }

]