const ProductList = [
    {
        "name"      :  "Algodon" ,
        "picture"   :  './Images/Algodon.jpg',
        "alt"       : "Algodon",
        "desc"      :  `El algodón es una fibra natural derivada de la planta de algodón. A diferencia de los materiales sintéticos, cuyo roce puede resultar incomodo, el algodón respira y absorbe la humedad, por lo que mantiene constante la temperatura corporal, motivo por el que las ropas que se confeccionan con él resultan cómodas para la piel.
                        Es el que a mi me gusta utilizar para tejer los amigurumis, porque es más compacto que la lana y por lo tanto obtenemos un mejor acabado, pero podeis utilizar la que a vosotros más os guste.`     ,
        "uses"      :  ["Ropa", "Amigurumis", "Complementos"],
        "link"      : "/algodon"
    }
    ,
    {
        "name"      : "Lino"  ,
        "picture"   : "./Images/Lino.jpg" ,
        "alt"       : "Lino" ,
        "desc"      : `El lino proviene de la planta homónima.  Como el algodón, es muy absorbente, fresco y extremadamente resistente. En el cultivo del lino se emplean pesticidas, pero en menor medida que el algodón. En la actualidad, la mayor parte del lino se blanquea químicamente y suelen usarse aditivos químicos ignífugos. Escoja el lino natural, sin color o no blanqueado. 
        Se utiliza sobre todo para confeccionar ropa de verano, por ser muy fresca y suave.`     ,
        "uses"      : ["Ropa","Amigurumis","Complementos"],
        "link"      : "/lino"
    },
    {
        "name"      : "Cachemir"  ,
        "picture"   : "./Images/Cachemir.jpg" ,
        "alt"       : "Cachemir" ,
        "desc"      : `  La cachemira, cachemir o casimir  es una de las lanas de cabra más escasas y extrañas del mundo y a su vez una de las más valoradas. Es suave al tacto, sedosa, ligera y buen aislante térmico.
        Por sus características y su escasez su precio es relativamente elevado comparado con el de otras fibras y por ello usarla es muestra de clase, lujo y distinción.
        Su origen está en las solitarias y aisladas poblaciones locales de las montañas del Tíbet, en la vertiente sur del Himalaya y la región de Xinjiang en China, zonas de montaña con temperaturas bajo cero donde tiene su origen la cabra de Cachemira . La fibra se obtiene de la parte más profunda, más fina y delicada de la lana de cabra.
        Requiere un cuidado especial, como una esmerada protección al roce intensivo, que promueve la aparición del frisado. `     ,
        "uses"      :  ["Ropa","Complementos"]    ,
        "link"      : "/cachemir"
    },
    {
        "name"      : "Alpaca"  ,
        "picture"   : "./Images/Alpaca.jpg" ,
        "alt"       : "Alpaca" ,
        "desc"      : `La alpaca es una fibra ligera, cálida y resistente. No tiene nada que envidiar al cashmere en cuanto a suavidad y belleza, y compite con ventaja ante fibras más utilizadas como la lana de oveja o el mohair. En apariencia es muy parecida al pelo humano, y tiene un aspecto denso y lustroso. Es una fibra con propiedades hipoalergénicas y casi imposible de quemar.`     ,
        "uses"      :  ["Ropa","Complementos"]     ,
        "link"      : "/alpaca"
    },
    {
        "name"      : "Mohair"  ,
        "picture"   : "./Images/Mohair.jpg" ,
        "alt"       : "Mohair" ,
        "desc"      : `El mohair es la fibra procedente del pelo de la cabra de Angora y un tejido de calado fabricado con esta fibra textil, muy utilizado en la confección de chaquetas y jerséis. Sus principales características son la suavidad y el brillo.
        El pelo fino de las cabras más jóvenes se utiliza en la confección de ropa, pero el de los animales viejos se destina para alfombras y telas pesadas para las prendas de abrigo. La fibra de mohair se puede mezclar con lana para obtener tejidos de alta calidad.`     ,
        "uses"      : ["Ropa","Alfombras"]   ,
        "link"      : "/mohair"
    },
    {
        "name"      : "Acrílica"  ,
        "picture"   : "./Images/Acrilico.jpg" ,
        "alt"       : "Acrílica" ,
        "desc"      : `Los acrílicos son las más semejantes a la lana. Es especialmente adecuada para las personas alérgicas a la lana. Las fibras acrílicas no son tan durables como el nylon, el poliéster, o las fibras de olefina, pero para prendas de vestir y usos domésticos su resistencia es satisfactoria.
        Este tipo de lana es de tipo artificial a diferencia de las anteriores y se suele utilizar para tejer ropa por ser cómoda.`     ,
        "uses"      : ["Ropa","Amigurumis","Complementos"]     ,
        "link"      : "/acrilica"
    },
    {
        "name"      : "Poliester"  ,
        "picture"   : "./Images/Poliester.jpg" ,
        "alt"       : "Poliester" ,
        "desc"      : `Este tipo de lana es de tipo artificial, es muy resistente a la humedad y a los productos químicos. Se usa en la fabricación de fibras, recubrimientos de láminas, etc`     ,
        "uses"      : ["Ropa","Amigurumis","Complementos"]     ,
        "link"      : "/poliester"
    },
    {
        "name"      : "Lurex"  ,
        "picture"   : "./Images/Lurex.jpg" ,
        "alt"       : "Lurex" ,
        "desc"      : `Fibra sintética, elástica y brillante, formada por hilo de aluminio recubierto de una lámina transparente de plástico de diferentes colores; es una fibra que se utiliza, generalmente mezclada con otras, para fabricar tejidos para prendas de vestir, especialmente en prendas de fiesta o noche.`     ,
        "uses"      : ["Ropa","Complementos"]     ,
        "link"      : "/lurex"
    },
    {
        "name"      : "Merino"  ,
        "picture"   : "./Images/Merino.jpg" ,
        "alt"       : "Merino" ,
        "desc"      : `La lana merino es un tejido muy valorado en el textil destinado a practicar actividades al aire libre. Es muy apreciada por sus excelentes prestaciones y rendimiento. En contraposición a este tipo de fibras se encuentran las telas sintéticas de origen químico que en muchos casos son inflamables, alergénicas y que disminuyen considerablemente el precio del producto a costa de una perdida de calidad considerable.
        Es repelente del agua, evita picores e irritaciones, cálido, retrasa la aparición de olores, absorbe la humedad y repele la suciedad.`     ,
        "uses"      : ["Ropa","Complementos"]     ,
        "link"      : "/merino"
    },
    {
        "name"      : "Mixtas"  ,
        "picture"   : "./Images/Mixta.jpg" ,
        "alt"       : "Mixtas" ,
        "desc"      : `De la composición de fibras naturales y artificiales se pueden obtener muy buenos rendimientos como mezclas de hilos de distintas materias y colores. Estas combinaciones dan muy buena vistosidad al producto terminado.Existe una gran variedad de mezclas como:
        Acrílico fino, lana con acrílico, acrílico semigordo, merino, mohair fino, mohair brillante, multicabo mix...`     ,
        "uses"      : ["Ropa","Amigurumis","Complementos"]     ,
        "link"      : "/mixtas"
    },
  
]

export default ProductList;