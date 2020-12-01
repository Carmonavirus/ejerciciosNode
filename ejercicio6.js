const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.get('/calcula/', (req, res) => {
const precio = Number(req.query.precio)
const iva = numero * (21/100)
const cadena = `<h2> El PVP del producto es: ${resultado}</h2>
`
res.send(cadena)
})
app.all('/', (req, res) => {
res.send(`<p>Copia y pega:
<br>localhost:5000/calcula/?precio=0
<br> en la barra de direcciones</p>
<br><br> Cambia elvalor de los euros comprueba su funcionamiento
`)
});