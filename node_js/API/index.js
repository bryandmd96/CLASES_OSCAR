const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

let tareas = [
    {id:1, titulo:"Aprender SQL", completada:false},
    {id:2, titulo:"Estudiar ML", completada:true},
    {id:3, titulo:"Buscar API", completada:true},
    {id:4, titulo:"Abrebiar estudio de API REST", completada:false}
];

app.get("/", () => {
    console.log("Servidor OK")
});

app.get("/tareas", (req,res) => {
    res.json(tareas)
});

//localhost:3000/tarea/2
app.get("/tarea/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const tarea = tareas.find(t => t.id === id);
    if (!tarea) return res.status(404).json({error:"Tarea no encontra"})
    res.json(tarea);
});

// validaciones 
app.post("/tareas", (req,res) => {
    const {titulo} = req.body;
    // calidacion : titulo abligatorio
    if (!titulo) return res.status(400).json({error:"El titulo es obligatorio"})
    // Validación: mínimo 3 caracteres
    if (titulo.length < 3) {
        return res.status(400).json({ error: "El título debe tener al menos 3 caracteres" });
    }

    const nueva = {
        id: tareas.length ? tareas[tareas.length - 1].id + 1 :1,
        titulo,
        completada: false
    };

    tareas.push(nueva);
    res.status(201).json(nueva);
});

app.put('/tareas/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const {titulo, completada} = req.body;
    const tarea = tareas.find(t => t.id === id);
    if (!tarea) return res.status(404).json({error: "Tareas no encontrada"})
    if (titulo !== undefined) tarea.titulo = titulo;
    if (completada !== undefined) tarea.completada = completada;
    res.json(tarea)
})

app.delete('/tareas/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const index = tareas.findIndex(t => t.id === id);
    if (index === -1) return res.status(404).json({Error: "Tarea not found"});
    const eliminada = tareas.splice(index, 1);
    res.json(eliminada[0]);
})
// agregar fecha 
app.post("/tareas_date", (req, res) => {
    const { titulo } = req.body;
    if (!titulo) return res.status(400).json({ error: "El título es obligatorio" });

    const nueva = {
        id: tareas.length ? tareas[tareas.length - 1].id + 1 : 1,
        titulo,
        completada: false,
        creadaEn: new Date().toISOString() // 👈 Aquí se agrega la fecha
    };

    tareas.push(nueva);
    res.status(201).json(nueva);
});

// filtro de tareas completadas
app.get("/tareas/completadas", (req, res) => {
    const completadas = tareas.filter(t => t.completada === true);
    res.json(completadas);
});

//contador de tareas
app.get("/tareas/contador", (req, res) => {
    const total = tareas.length;
    const completadas = tareas.filter(t => t.completada).length;
    const pendientes = tareas.filter(t => !t.completada).length;

    res.json({
        total,
        completadas,
        pendientes
    });
});

// buscador de palabras clave
app.get("/tareas/buscar/:palabra", (req, res) => {
    const palabra = req.params.palabra.toLowerCase();

    const resultados = tareas.filter(t => 
        t.titulo.toLowerCase().includes(palabra)
    );

    res.json(resultados);
});

// Ordenador de titulos 
app.get("/tareas/ordenadas", (req, res) => {
    const ordenadas = [...tareas].sort((a, b) => 
        a.titulo.localeCompare(b.titulo)
    );
    res.json(ordenadas);
});

// Completar las tareas
app.put("/tareas/completar-todas", (req, res) =>{
    tareas = tareas.map( t =>({...t, completada:true}));
    res.json({ok: true, total: tareas.length, tareas});
});

app.delete("/tareas/completadas", (req,res) => {
    const antes = tareas.length;
    const eliminadas = tareas.filter (t => t.completada);
    tareas = tareas.filter(t => !t.completada);
    res.json({ok:true, eliminadas: eliminadas.length, restantes: tareas.length, borradas: eliminadas});
});

app.listen(PORT, () => 
    console.log(`Servidor http://localhost:${PORT}`));