const mongoose = require('mongoose');
const mongoDb = process.env.MONGO_DB;


// Imporatmos el modelo Pet en este nuevo archivo.
const Sabores = require('../models/Sabores.model');

const sabores = [
    
    {
        "sabor":"Chocolate Giangrossi",
        "descripcion":"Una receta secreta con el mejor cacao importado",
    },
    {
        "sabor":"Chocolate Festa",
        "descripcion":"Déjate llevar por un nuevo concepto en helado de chocolate. Tienes que probarlo!",
    },
    {
        "sabor":"Chocolate Negro",
        "descripcion":"El chocolate suizo con mayor porcentaje de cacao. Un lujo a cualquier hora",
    },
    {
        "sabor":"Chocolate Blanco con Galleta Belga",
        "descripcion":"Estupendo chocolate blanco con la clásica galleta belga para hacer una perfecta combinación de sabores",
    },
    {
        "sabor":"Dulce de Leche",
        "descripcion":"Nuestro helado estrella, elaborado con el mejor dulce de leche argentino.",
    },
    {
        "sabor":"Dulce de Leche Granizado",
        "descripcion":"Todo el sabor del dulce de leche con un toque de chispas de chocolate",
    },
    {
        "sabor":"Dulce de Leche con Vauquita",
        "descripcion":"Para los ultra fanáticos del dulce de leche.",
    },
    {
        "sabor":"Chocolate con Leche",
        "descripcion":"Un sabor único, con el ingrediente imprescindible, el chocolate suizo",
    },
    {
        "sabor":"Chocolate con Cookies",
        "descripcion":"Crema helada de cacao y avellanas de Piamonte, vino de Marsala italiano y veteadito con crema de chocolate con cookies",
    },
    {
        "sabor":"Chocolate Blanco",
        "descripcion":"Un choclate blanco con todo el sabor pero a la vez liviano y suave",
    },
    {
        "sabor":"Crema de Nocilla",
        "descripcion":"Redescubre el sabor de la crema de avellanas en un helado que no vas a poder parar de comer",
    },
    {
        "sabor":"Galleta Oreo",
        "descripcion":"El sabor de la galleta más famosa del mundo se potencia con el indescriptible sabor del helado Giangrossi",
    },
    {
        "sabor":"Banana Split",
        "descripcion":"Bananas, salsa de caramelo y virutas de chocolate belga. Original combinación de fruta y dulce",
    },
    {
        "sabor":"Cheesemariacake",
        "descripcion":"Creado con la receta tradicional traída desde Grecia elaboramos de forma artesanal la mejor cheesemariacake en helado",
    },
    {
        "sabor":"Nata",
        "descripcion":"Cremosidad y textura, elaborada con las mejores natas de nuestro país.",
    },
    {
        "sabor":"Mascarpone con Frutos del Bosque",
        "descripcion":"Crema helada del mejor queso italiano mascarpone acompañada de mermelada casera de frutos rojos",
    },
    {
        "sabor":"Frambuesa",
        "descripcion":"Color intenso, al igual que su sabor. Disfruta del helado de frambuesa, cremoso y 100% natural",
    },
    {
        "sabor":"Coco",
        "descripcion":"Exquisito sorbete de la fruta reina del Caribe.",
    },
    {
        "sabor":"Piña",
        "descripcion":"Refrescante y natural. El sabor del verano.",
    },
    {
        "sabor":"Mango",
        "descripcion":"Un sorbete de los mejores mangos de sudáfrica, calidad y originalidad a partes iguales",
    },
    {
        "sabor":"Mora",
        "descripcion":"Con las mejores moras conseguimos un helado artesanal y 100% natural.",
    },
    {
        "sabor":"Maracuyá",
        "descripcion":"Conservamos todo el sabor de este fruto tropical. Original sabor y 100% natural",
    },
    {
        "sabor":"Zanahoria y Mandarina",
        "descripcion":"Delicioso sorbete de zanahoria y zumo recién exprimido de mandarina. Hortalizas y frutas, original y natural",
    },
    {
        "sabor":"Fresa",
        "descripcion":"Con las mejores fresas de Huelva conseguimos un helado artesanal y 100% natural.",
    },
    {
        "sabor":"Vainilla",
        "descripcion":"Desde el continente americano traemos las mejores vainas, para hacer este sabor imprescindible y tradicional",
    },
    {
        "sabor":"Stracciatella",
        "descripcion":"Cremosidad y textura, elaborada con las mejores natas de nuestro país.",
    },
    {
        "sabor":"After Eight",
        "descripcion":"Refrescante y original, la mejor mezcla de menta fresca, hierbabuena y finas láminas de chocolate fondant",
    },
    {
        "sabor":"Mandarina",
        "descripcion":"Delicioso sorbete zumo recién exprimido de mandarina. Original y natural",
    },
    {
        "sabor":"Pistacchio",
        "descripcion":"Con pistachos sicilianos de máxima calidad para elaborar un helado de textura especial",
    },
    {
        "sabor":"Turrón",
        "descripcion":"Un sabor tradicional y único, con el mejor turrón artesano",
    },
    {
        "sabor":"Sambayón",
        "descripcion":"Crema de tradición italiana con mucha historia, no podía faltar en Giangrossi",
    },
    {
        "sabor":"Yogurt con Amarena",
        "descripcion":"Un sabor indescriptible, cremoso como el yogur, dulce como la miel de la Alcarria y crujiente como las nueces de Castilla.",
    },
    {
        "sabor":"Limón con Galleta Danesa",
        "descripcion":"La creatividad de Giangrossi logra este helado de características únicas",
    },
    {
        "sabor":"Galleta Belga",
        "descripcion":"Un sabor dulce y cremoso para disfrutar tanto en verano como en invierno",
    },
    {
        "sabor":"Avellanas con Rochere",
        "descripcion":"Deliciosa avellana de Piamonte con exquisito crujiente de rocher",
    },
    {
        "sabor":"Leche Merengada",
        "descripcion":"Imprescindible en el panorama culinario español, cremoso y nutritivo",
    },
    {
        "sabor":"Melón",
        "descripcion":"Con una textura especial y una elaboración 100% artesanal",
    },
    {
        "sabor":"Arándanos",
        "descripcion":"Arándanos importados para lograr un helado artesanal y 100% natural.",
    },
    {
        "sabor":"Vainilla con Maltitol",
        "descripcion":"Helado artesanal apto para Diabéticos",
    },
    {
        "sabor":"Chocolate con Maltitol",
        "descripcion":"Helado artesanal apto para Diabéticos",
    },
    

]


const SaboresDocuments = sabores.map(sabores => new Sabores(sabores))

mongoose
  .connect('mongodb+srv://proyectoupgrade:Proyecto-2022@heladeriacluster.33k2e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allSabores = await Sabores.find();
		
		// Si existen personajes previamente, dropearemos la colección
    if (allSabores.length) {
      await Sabores.collection.drop(); //La función drop borra la colección
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		// Una vez vaciada la db de los personajes, usaremos el array characterDocuments
		// para llenar nuestra base de datos con todas los personajes.
		await Sabores.insertMany(SaboresDocuments);
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
	// Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect());