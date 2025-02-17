document.addEventListener("DOMContentLoaded", function() {
    window.bombas = [
        {
            tipo: "Presurizadoras",
            codigo: "A.TI.1.TE14.M",
            marca: "Motorarg",
            modelo: "TIP TE 14",
            caudalMaximo: 3.4,
            caudalMinimo: 0.1,
            alturaMaxima: 14,
            alturaMinima: 4,
            tension: "Monofásica",
            hp: 0.5,
            tanqueElevado: "Sí",
            tanqueCisterna: "No"
        },
        {
            tipo: "Presurizadoras",
            codigo: "A.TI.1.TE20.M",
            marca: "Motorarg",
            modelo: "TIP TE 20",
            caudalMaximo: 3.4,
            caudalMinimo: 0.1,
            alturaMaxima: 14,
            alturaMinima: 4,
            tension: "Monofásica",
            hp: 0.75,
            tanqueElevado: "Sí",
            tanqueCisterna: "No"
        },
        {
            tipo: "Presurizadoras",
            codigo: "A.TI.1.PS14.M",
            marca: "Motorarg",
            modelo: "TIP PRES 14",
            caudalMaximo: 2.9,
            caudalMinimo: 0.3,
            alturaMaxima: 12,
            alturaMinima: 4,
            tension: "Monofásica",
            hp: 0.5,
            tanqueElevado: "Sí",
            tanqueCisterna: "Sí"
        },
        {
            tipo: "Presurizadoras",
            codigo: "A.TI.1.PS20.M",
            marca: "Motorarg",
            modelo: "TIP PRES 20",
            caudalMaximo: 4.0,
            caudalMinimo: 0.1,
            alturaMaxima: 20,
            alturaMinima: 6,
            tension: "Monofásica",
            hp: 0.75,
            tanqueElevado: "Sí",
            tanqueCisterna: "Sí"
        },
        {
            tipo: "Presurizadoras",
            codigo: "A.TI.1.PS26.M",
            marca: "Motorarg",
            modelo: "TIP PRES 26",
            caudalMaximo: 5.8,
            caudalMinimo: 0.1,
            alturaMaxima: 26,
            alturaMinima: 6,
            tension: "Monofásica",
            hp: 1.34,
            tanqueElevado: "Sí",
            tanqueCisterna: "Sí"
        },
        {
            tipo: "Presurizadoras",
            codigo: "A.TI.1.PS30.M",
            marca: "Motorarg",
            modelo: "TIP PRES 30",
            caudalMaximo: 5.9,
            caudalMinimo: 0.2,
            alturaMaxima: 30,
            alturaMinima: 18,
            tension: "Monofásica",
            hp: 1.74,
            tanqueElevado: "Sí",
            tanqueCisterna: "Sí"
        },
        {
            tipo: "Presurizadoras",
            codigo: "99656462",
            marca: "Grundfos",
            modelo: "SCALA1 3-25",
            caudalMaximo: 5.3,
            caudalMinimo: 0.6,
            alturaMaxima: 25,
            alturaMinima: 5,
            tension: "Monofásica",
            hp: 0.5,
            tanqueElevado: "Sí",
            tanqueCisterna: "Sí"
        },
        {
            tipo: "Presurizadoras",
            codigo: "99656484",
            marca: "Grundfos",
            modelo: "SCALA1 3-35",
            caudalMaximo: 4.8,
            caudalMinimo: 0.9,
            alturaMaxima: 35,
            alturaMinima: 10,
            tension: "Monofásica",
            hp: 0.96,
            tanqueElevado: "Sí",
            tanqueCisterna: "Sí"
        },
        {
            tipo: "Presurizadoras",
            codigo: "99656485",
            marca: "Grundfos",
            modelo: "SCALA1 3-45",
            caudalMaximo: 5.2,
            caudalMinimo: 1.3,
            alturaMaxima: 35,
            alturaMinima: 10,
            tension: "Monofásica",
            hp: 1.20,
            tanqueElevado: "Sí",
            tanqueCisterna: "Sí"
        },
        {tipo: "Presurizadoras", codigo: "99285714", marca: "DAB", modelo: "Hydro press 20", caudalMaximo: 6, caudalMinimo: 2, alturaMaxima: 20, alturaMinima: 8, tension: "Monofásica", hp: 0.5, tanqueElevado: "Sí", tanqueCisterna: "Sí"},
        {tipo: "Presurizadoras", codigo: "99293002", marca: "DAB", modelo: "Hydro press 30", caudalMaximo: 8.2, caudalMinimo: 1, alturaMaxima: 20, alturaMinima: 8, tension: "Monofásica", hp: 0.5, tanqueElevado: "Sí", tanqueCisterna: "Sí"},
        {tipo: "Presurizadoras", codigo: "92785853", marca: "DAB", modelo: "E.SYBOX MAX 85/120 T", caudalMaximo: 17.4, caudalMinimo: 2.4, alturaMaxima: 113, alturaMinima: 43.5, tension: "Monofásica", hp: 4.7, tanqueElevado: "Sí", tanqueCisterna: "Sí"},
        {tipo: "Recirculación", codigo: "92785853", marca: "Grundfos", modelo: "UPS 25-40", aplicacion: "Calefacción", velocidad: 3, longitud: 130, conexion: "1 1/2 pulgada", caudalaltura: "1700 lts/h - 2 m.c.a"},
        {tipo: "Periféricas", codigo: "B.AA.3.0005.M", marca: "Motorarg", modelo: "PF 50 M r.3", caudalMaximo: 1.8, caudalMinimo: 0.1, alturaMaxima: 22, alturaMinima: 2, hp: 0.5, tension: "Monofásica"},
        {tipo: "Periféricas", codigo: "96958042", marca: "DAB", modelo: "KPF 30/16 M", caudalMaximo: 2.1, caudalMinimo: 0.6, alturaMaxima: 25, alturaMinima: 6, hp: 0.5, tension: "Monofásica"},

    ];

    document.getElementById('resultados').innerHTML = '';
});

function actualizarFormulario() {
    const tipoBomba = document.getElementById("tipoBomba").value;
    const formCampos = document.getElementById("formCampos");
    const resultadosHeader = document.getElementById("resultadosHeader");
    const resultadosBody = document.getElementById("resultados");

    // Limpiar campos del formulario y resultados
    formCampos.innerHTML = "";
    resultadosHeader.innerHTML = "";
    resultadosBody.innerHTML = "";

    if (tipoBomba === "Presurizadoras") {
        formCampos.innerHTML = `
            <div class="form-group">
                <label for="tanqueElevado">Tanque Elevado:</label>
                <select id="tanqueElevado">
                    <option value="">Cualquiera</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div class="form-group">
                <label for="tanqueCisterna">Tanque Cisterna:</label>
                <select id="tanqueCisterna">
                    <option value="">Cualquiera</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div class="form-group">
                <label for="tension">Tensión:</label>
                <select id="tension">
                    <option value="">Cualquiera</option>
                    <option value="Monofásica">Monofásica</option>
                    <option value="Trifásica">Trifásica</option>
                </select>
            </div>
            <div class="form-group">
                <label for="qmax">Qmáx:</label>
                <input type="number" id="qmax">
                <label for="hmax">Hmáx:</label>
                <input type="number" id="hmax">
            </div>
        `;
        resultadosHeader.innerHTML = `
            <tr>
                <th>Código</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Tensión</th>
                <th>Tanque Elevado</th>
                <th>Tanque Cisterna</th>
                <th>Qmin (M³/h)</th>
                <th>Qmax (M³/h)</th>
                <th>Hmin (m)</th>
                <th>Hmax (m)</th>                
            </tr>
        `;
    } else if (tipoBomba === "Recirculación") {
        formCampos.innerHTML = `
            <div class="form-group">
                <label for="aplicacion">Aplicación:</label>
                <select id="aplicacion">
                    <option value="">Cualquiera</option>
                    <option value="Calefacción">Calefacción</option>
                    <option value="Sanitarios">Sanitarios</option>
                </select>
            </div>
            <div class="form-group">
                <label for="velocidad">Velocidad:</label>
                <select id="velocidad">
                    <option value="">Cualquiera</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div class="form-group">
                <label for="longitud">Longitud (mm):</label>
                <select id="longitud">
                    <option value="">Cualquiera</option>
                    <option value="130">130</option>
                    <option value="100">100</option>
                    <option value="120">120</option>
                </select>
            </div>
            <div class="form-group">
                <label for="conexion">Conexión:</label>
                <select id="conexion">
                    <option value="">Cualquiera</option>
                    <option value="1 1/2 pulgada">1 1/2 pulgada</option>
                    <option value="1 pulgada">1 pulgada</option>
                    <option value="2 pulgadas">2 pulgadas</option>
                </select>
            </div>
            <div class="form-group">
                <label for="caudalaltura">Caudal x Altura Nominal:</label>
                <input type="text" id="caudalaltura">
            </div>
        `;
        resultadosHeader.innerHTML = `
            <tr>
                <th>Código</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Aplicación</th>
                <th>Velocidad</th>
                <th>Longitud</th>
                <th>Conexión</th>
                <th>Caudal x Altura Nominal</th>
            </tr>
        `;
    } else if (tipoBomba === "Periféricas") {
        formCampos.innerHTML = `
            <div class="form-group">
                <label for="qmax">Qmáx:</label>
                <input type="number" id="qmax">
            </div>
            <div class="form-group">
                <label for="hmax">Hmáx:</label>
                <input type="number" id="hmax">
            </div>
            <div class="form-group">
                <label for="tension">Tensión:</label>
                <select id="tension">
                    <option value="">Cualquiera</option>
                    <option value="Monofásica">Monofásica</option>
                    <option value="Trifásica">Trifásica</option>
                </select>
            </div>
        `;
        resultadosHeader.innerHTML = `
            <tr>
                <th>Código</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>HP</th>
                <th>Tensión</th>
                <th>Qmin (M³/h)</th>
                <th>Qmáx (M³/h)</th>
                <th>Hmin (m)</th>
                <th>Hmáx (m)</th>
            </tr>
        `;
    }
}

function buscarBombas() {
    const tipoBomba = document.getElementById("tipoBomba").value;
    const qmax = parseFloat(document.getElementById("qmax")?.value) || null;
    const hmax = parseFloat(document.getElementById("hmax")?.value) || null;

    const resultadosFiltrados = window.bombas.filter((bomba) => {
        if (tipoBomba === "Presurizadoras") {
            const tanqueElevado = document.getElementById("tanqueElevado")?.value;
            const tanqueCisterna = document.getElementById("tanqueCisterna")?.value;
            const tension = document.getElementById("tension")?.value;

            return bomba.tipo === tipoBomba &&
                   (tanqueElevado === "" || bomba.tanqueElevado === tanqueElevado) &&
                   (tanqueCisterna === "" || bomba.tanqueCisterna === tanqueCisterna) &&
                   (tension === "" || bomba.tension === tension);
        } else if (tipoBomba === "Recirculación") {
            const aplicacion = document.getElementById("aplicacion")?.value;
            const velocidad = document.getElementById("velocidad")?.value;
            const longitud = document.getElementById("longitud")?.value;
            const caudalaltura = document.getElementById("caudalaltura")?.value;
            const conexion = document.getElementById("conexion")?.value;

            return bomba.tipo === tipoBomba &&
                   (aplicacion === "" || bomba.aplicacion === aplicacion) &&
                   (velocidad === "" || bomba.velocidad == velocidad) &&
                   (longitud === "" || bomba.longitud == longitud) && // Comparación corregida
                   (caudalaltura === "" || bomba.caudalaltura === caudalaltura) &&
                   (conexion === "" || bomba.conexion === conexion);
        } else if (tipoBomba === "Periféricas") {
            const tension = document.getElementById("tension")?.value;

            return bomba.tipo === tipoBomba &&
                   (tension === "" || bomba.tension === tension);
        }
    });

    // Ordenar resultados por cercanía a los valores de Qmáx y Hmáx
    if (qmax !== null && hmax !== null) {
        resultadosFiltrados.sort((a, b) => {
            const distanciaA = Math.sqrt(Math.pow(a.caudalMaximo - qmax, 2) + Math.pow(a.alturaMaxima - hmax, 2));
            const distanciaB = Math.sqrt(Math.pow(b.caudalMaximo - qmax, 2) + Math.pow(b.alturaMaxima - hmax, 2));
            return distanciaA - distanciaB;
        });
    }

    mostrarResultados(resultadosFiltrados, qmax, hmax);
}

function mostrarResultados(resultados, qmax, hmax) {
    const resultadosBody = document.getElementById("resultados");
    resultadosBody.innerHTML = "";

    if (resultados.length === 0) {
        resultadosBody.innerHTML = `<tr><td colspan="10">No se encontraron resultados.</td></tr>`;
        return;
    }

    resultados.forEach((bomba) => {
        let colorFondo = "";

        if (qmax !== null && hmax !== null) {
            const distancia = Math.sqrt(Math.pow(bomba.caudalMaximo - qmax, 2) + Math.pow(bomba.alturaMaxima - hmax, 2));

            if (distancia < 2) {
                colorFondo = "background-color:rgb(53, 240, 53);"; // Verde claro para coincidencia cercana
            } else if (distancia < 5) {
                colorFondo = "background-color:rgb(255, 251, 0);"; // Amarillo claro para coincidencia media
            } else {
                colorFondo = "background-color:rgb(240, 66, 80);"; // Rojo claro para coincidencia lejana
            }
        }

        if (bomba.tipo === "Presurizadoras") {
            resultadosBody.innerHTML += `
                <tr style="${colorFondo}">
                    <td>${bomba.codigo}</td>
                    <td>${bomba.marca}</td>
                    <td>${bomba.modelo}</td>
                    <td>${bomba.tension}</td>
                    <td>${bomba.tanqueElevado}</td>
                    <td>${bomba.tanqueCisterna}</td>
                    <td>${bomba.caudalMinimo}</td>
                    <td>${bomba.caudalMaximo}</td>
                    <td>${bomba.alturaMinima}</td>
                    <td>${bomba.alturaMaxima}</td>
                </tr>
            `;
        } else if (bomba.tipo === "Recirculación") {
            resultadosBody.innerHTML += `
                <tr style="${colorFondo}">
                    <td>${bomba.codigo}</td>
                    <td>${bomba.marca}</td>
                    <td>${bomba.modelo}</td>
                    <td>${bomba.aplicacion}</td>
                    <td>${bomba.velocidad}</td>
                    <td>${bomba.longitud}</td>
                    <td>${bomba.conexion}</td>
                    <td>${bomba.caudalaltura}</td>
                </tr>
            `;
        } else if (bomba.tipo === "Periféricas") {
            resultadosBody.innerHTML += `
                <tr style="${colorFondo}">
                    <td>${bomba.codigo}</td>
                    <td>${bomba.marca}</td>
                    <td>${bomba.modelo}</td>
                    <td>${bomba.hp}</td>
                    <td>${bomba.tension}</td>
                    <td>${bomba.caudalMinimo}</td>
                    <td>${bomba.caudalMaximo}</td>
                    <td>${bomba.alturaMinima}</td>
                    <td>${bomba.alturaMaxima}</td>
                </tr>
            `;
        }
    });
}
