const mongoose = require('mongoose');
const mongoDb = process.env.MONGO_DB;


// Imporatmos el modelo Pet en este nuevo archivo.
const Especialidades = require('../models/Especialidades.model');

const especialidades = [
    {
        "sabor": "Amarena y nata", 
        "descripcion": "La amarena es una cereza silvestre, típica de las colinas del norte de Italia. Su caracteristica acidez compensa la dolzura de la nata, creando una armonia especial de sabores", 
       
        
    },
    {
        "sabor": "Tiramisú", 
        "descripcion": "El clásico de los semifrios italianos convertido en helado, con sus Savoiardi bañados en café, su crema con mascarpone y cacao en polvo.", 
       
    }, 
    {
        "sabor":"Arroz con leche",
        "descripcion":"Un postre típico español, transformado en helado, manteniendo la textura del original y con el justo toque de perfumada canela en polvo.",

    },
    {
        "sabor":"Bacio",
        "descripcion":"El Bacio, un bombon lanzado en los años 20 por Perugina, es una bolita de chocolate con avellana encima.",

    },
    {
        "sabor":"Caffe dolce Vita",
        "descripcion":"El café Illy, reconocido como el mejor café del mundo, mantiene su intenso aroma italiano al combinarlo con la base blanca en este delicado helado",

    },
    {
        "sabor":"Caffe bianco",
        "descripcion":"Un color sorprendente para el café Infusionando los granos de caffè Arábica de alta calidad se consigue aportar todo el aroma del cafè, manteniendo el blanco de la leche y la nata.",

    },
    {
        "sabor":"Zabaione al Marsala",
        "descripcion":"Sabor clásico de la heladería y pasteleria iitaliana. Azucar, leche, nata, huevo y, sobretodo, una buena dosis de Marsala, un vino licoroso típico de Sicilia",

    },
    {
        "sabor":"Calvados con manzana",
        "descripcion":"Las manzanas reineta en infusión en esté brandy de la región francesa del Calvadós, obtenido de la destilación de la sidra, crean este único helado de sabor intenso y definido.",

    },
    {
        "sabor":"Chocolate con mango",
        "descripcion":"El chocolate combinado con mango Alphonso de la mejor calidad nos permite aportar a un sabor fuerte y definido frescura y riqueza de matices",

    },
    {
        "sabor":"Avellana a la italiana",
        "descripcion":"La avellana del Piamonte, con su calidad y denominación de origen nos permite ofrecerte un clásico de la heladería italiana que, desde su sencillez, te ofrece una experiencia sensorial de intensidad y naturalidad inigualables.",

    },
    {
        "sabor":"Fiordilatte nata",
        "descripcion":"La base de todos los helados. Es una receta tan sencilla que depende totalmente de la calidad de sus ingredientes, la nata y la leche, fundamentales en todos nuestros helados.",

    },
    {
        "sabor":"Fresa con limón",
        "descripcion":"Ideal para combinar con chocolate, yogurt y vainilla. Solo con fresas maduras y dulces es posible preparar un helado o sorbete rico e intenso.. Nuestra receta con un toque de limón nos gusta más porque es más fresca.",

    },
    {
        "sabor":"Mango con pizca de lima",
        "descripcion":"Nuestro sorbete de mango contiene un 50% de fruta de la mejor calidad. La variedad que utilizamos es el mango Alphonso, originario de India, quizás el de mejor sabor entre todas sus variedades, que afianzamos con un punto de zumo de lima",

    },
    {
        "sabor":"Manzana y canela",
        "descripcion":"Manzanas Stark Delicious, canela y un toque de caramelo, para esta receta sencilla y con un sabor refinado y cálido",

    },
    {
        "sabor":"Biscoff con galletas Lotus",
        "descripcion":"Las galletas Lotus Biscoff, de Bélgica, son la base de esta receta. Su sabor característico que proviene del azúcar caramelizado se funde con la base blanca del helado generando una deliciosa combinación.",

    },
    {
        "sabor":"Vainilla con un toque cítrico",
        "descripcion":"El sabor historico de la heladeria y de la repostería, construido gracias al aroma y los matices de la vainilla, es realzado con el toque cítrico de la ralladura de la naranja y el limón, que le aportan frescor.",

    },
    {
        "sabor":"Chocolate del bueno",
        "descripcion":"Para que nuestro helado de chocolate tenga un sabor intenso y equilibrado mezclamos cacao Red Cameroon con cobertura de chocolate Sao Thomé de Callebaut. Por ello, tanto en la variedad con leche como en la que preparamos sin leche, el resultado es esquisito.",

    },
    {
        "sabor":"Pistacho de la Isla",
        "descripcion":"Utilizamos solo pistacho Feudo di San Biagio, originario de Sicilia, para nuestro helado al pistacho. Nuestra sencilla receta está enfocada en realzar el perfume y los matices de este fruto seco en este clasico de la heladeria italiana artesanal",

    },
    {
        "sabor":"Seto senso",
        "descripcion":"Una infusión de tonka, granos de café y ramas de canela perfuman esta crema de nata y huevos. El resultado es un mix de aromas original y muy rico para el paladar.",

    },
    {
        "sabor":"Spagnola amaretti y cerezas al ron",
        "descripcion":"Sobre una base de crema al huevo los diminutos trozos de amaretti (galletas con un toque amargo, típicas del norte de Italia) y las cerezas maceradas en ron construyen una composición de textura y sabor únicos.",

    },
    {
        "sabor":"Yogur natural",
        "descripcion":"Contar con más del 40% de yogurt griego hace de esta receta un helado que realmente sabe a yogur. Su combinación perfecta de dulzor y acidez hacen que sea ideal para combinar con frutos rojos o chocolate",

    },
    {
        "sabor":"Maracuyá Pasión",
        "descripcion":"Con un 50% de fruta de la pasión en la receta, conseguimos que este sorbete natural, gracias a su sabor ácido y dulce a la vez, resulte fresco y veraniego. Combinado con chocolate es una experiencia sensorial muy interesante.",

    },
    {
        "sabor":"Caramelo salado",
        "descripcion":"Una receta muy sencilla para un sabor muy distinto. Añadiendo una pizca de sal a una receta clásica, la del helado al caramelo, conseguimos una experiencia nueva.",

    },
    {
        "sabor":"Limon mediterráneo",
        "descripcion":"Este sorbete a base de limón del Mediterraneo es el más refrescante y el complemento ideal para otros sabore de fruta o acompañando nuestro chocolate sin leche.",

    }
]


const EspecialidadesDocuments = especialidades.map(especialidades => new Especialidades(especialidades))

mongoose
  .connect('mongodb+srv://proyectoupgrade:Proyecto-2022@heladeriacluster.33k2e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allEspecialidades = await Especialidades.find();
		
		// Si existen personajes previamente, dropearemos la colección
    if (allEspecialidades.length) {
      await Especialidades.collection.drop(); //La función drop borra la colección
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		// Una vez vaciada la db de los personajes, usaremos el array characterDocuments
		// para llenar nuestra base de datos con todas los personajes.
		await Especialidades.insertMany(EspecialidadesDocuments);
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
	// Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect());