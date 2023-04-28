const express = require ("express");
const hbs = require ("hbs");
const app = express();
const port = 3000;

//Handlebars

app.set("view engine", "hbs")
hbs.registerPartials(__dirname + "/views/partials")

//-----------------------------------------
//Recupero de la clase 12

//Configurar express para procesar datos en JSON
app.use(express.json());
//Configurar express para procesar datos de formulario
app.use(express.urlencoded({ extended: false })); 

app.use(express.static("public"))

app.get("/", (req, res)=>{
    res.render("index",{
        titulo: "Inicio",
        tituloPrincipal: "Nuestro Club",
        navbarr: "Fraternidad Bochin Club"
    })
});

app.get("/novedades", (req, res)=>{
res.render("novedades",{
    tituloPrincipal: "Nuestro Club",
    navbarr:"Fraternidad Bochin Club"
})
})

app.get("/contacto", (req, res) => {
    res.sendFile(__dirname + "/public/contacto.html")
});

app.post("/usuario", (req, res) => {
    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const datos =  {nombre, correo };
    
    console.log("Datos formulario: ", datos);

    res.send("Datos recibidos")
    /* res.json(datos); */
})

app.listen(port, () => {
    console.log(`Usando el puerto http://localhost:${port}`);
});

