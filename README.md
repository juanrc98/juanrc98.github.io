# Cybersecurity Portfolio - Juan Rodríguez Castellano

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Portfolio personal de ciberseguridad con estética terminal/hacker, mostrando proyectos, certificaciones y experiencia en Blue Team y Red Team.

##  Características

-  **Diseño Terminal Matrix**: Animación de lluvia de caracteres estilo Matrix
-  **Blue Team Projects**: Proyectos de defensa, SIEM, monitorización y respuesta a incidentes
-  **Red Team Write-ups**: Documentación de explotación de máquinas CTF
-  **Responsive Design**: Adaptado para todos los dispositivos
-  **Animaciones Suaves**: Efectos de typing, hover y transiciones
-  **Tema Cyberpunk**: Colores verde neón sobre fondo oscuro

##  Demo

Visita el portfolio en vivo: https://juanrc98.github.io/

##  Estructura del Proyecto
```
Cibersecurity-portfolio/
├── index.html              # Estructura principal del sitio
├── style.css               # Estilos y diseño
├── script.js               # Animaciones y efectos interactivos
├── write-up-darkhole.pdf   # Write-up CTF DarkHole:1
├── write-up-psycho.pdf     # Write-up CTF Psycho:1
├── Proyecto-cluster.pdf    # Documentación de cluster HA
├── README.md               # Este archivo
└── LICENSE                 # Licencia del proyecto
```

##  Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsive y animaciones
- **JavaScript**: Efectos interactivos (Matrix rain, typing effect)
- **GitHub Pages**: Hosting del portfolio

##  Secciones

###  Inicio
Terminal animado con efecto de escritura y presentación principal.

###  Sobre Mí
Información profesional, ubicación, idiomas y certificaciones.

###  Educación
- **Técnico Superior en ASIR** (2023-2025)
- **Curso Intensivo de Ciberseguridad Andalucía Emplea+** (Oct 2025)

### Experiencia
Timeline con experiencia laboral en:
- **Analista SOC - IaaS365** (Mar 2025 - Jun 2025)
- **Técnico Informático - Fersoft Informática** (Oct 2025 - Dic 2025)

###  Habilidades
Categorías organizadas:
- SIEM & Monitoring
- EDR/XDR & Response
- Networking & Security
- Automation & Scripting
- Systems & Infrastructure
- Security Tools

###  Blue Team
Proyectos de seguridad defensiva:
- Wazuh SIEM Implementation
- High Availability Cluster
- Anti-Phishing Campaign
- Data Leak Detection System
- Log Correlation Scripts

###  Red Team
Write-ups de máquinas CTF:
- DarkHole:1 (Dificultad: Media)
- Psycho:1 (Dificultad: Media)

###  Certificaciones
- CompTIA Security+ (Completada)
- Google Cybersecurity Professional Certificate (Completada)
- eJPT - eLearnSecurity (En progreso)

###  Contacto
- Email: juanrodcas98@gmail.com
- Teléfono: +34 640 103 050
- GitHub: [@juanrc98](https://github.com/juanrc98)
- LinkedIn: [Juan Rodríguez](https://www.linkedin.com/in/juan-rodriguez-castellano/)

##  Personalización

### Colores
El esquema de colores puede modificarse en `style.css`:
```css
/* Color principal */
color: #00ff00; /* Verde Matrix */
background: #0a0a0a; /* Negro profundo */
```

### Animaciones
La velocidad del efecto Matrix se puede ajustar en `script.js`:
```javascript
setInterval(drawMatrix, 35); // Cambiar el valor (ms)
```

##  Instalación Local

1. **Clona el repositorio:**
```bash
git clone https://github.com/juanrc98/Cibersecurity-portfolio.git
```

2. **Navega al directorio:**
```bash
cd Cibersecurity-portfolio
```

3. **Abre el archivo HTML:**
```bash
# En Linux/Mac
open index.html

# En Windows
start index.html
```

O usa un servidor local:
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server
```

##  Modificaciones

### Añadir Nuevo Proyecto Blue Team
Edita `index.html` en la sección `#projects` → Blue Team:
```html
<div class="project-card">
    <h3>[ Título del Proyecto ]</h3>
    <p>Descripción del proyecto...</p>
    <a href="enlace" target="_blank" class="btn">Ver más →</a>
</div>
```

### Añadir Nuevo Write-up Red Team
Edita `index.html` en la sección `#projects` → Red Team:
```html
<div class="project-card" onclick="window.open('writeup.pdf', '_blank')" style="cursor: pointer;">
    <h3>[ Nombre CTF ]</h3>
    <span style="...">DIFICULTAD: Media</span>
    <p>Descripción...</p>
    <div style="margin: 1rem 0;">
        <span class="skill-tag">Tag1</span>
        <span class="skill-tag">Tag2</span>
    </div>
    <div class="btn">Ver Write-up →</div>
</div>
```

##  Autor

**Juan Rodríguez Castellano**
- Portfolio: [juanrc98.github.io](https://juanrc98.github.io/Cibersecurity-portfolio/)
- GitHub: [@juanrc98](https://github.com/juanrc98)
- LinkedIn: [Juan Rodríguez](https://www.linkedin.com/in/juan-rodriguez-castellano/)
- Email: juanrodcas98@gmail.com

---

 **Si te gusta este proyecto, dale una estrella en GitHub!**
```
root@cybersec:~# Juan Rodríguez © 2025 | Cybersecurity Portfolio
```
