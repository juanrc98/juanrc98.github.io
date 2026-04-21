# Juan Rodríguez Castellano — Cybersecurity Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deployed](https://img.shields.io/badge/Live-juanrc98.github.io-4f8cff)](https://juanrc98.github.io)

Portfolio personal de **ciberseguridad**, centrado en operaciones SOC, SIEM, Microsoft Security y Cloud Security en Azure.

Recoge mi experiencia profesional, competencias técnicas, laboratorios propios, write-ups de CTF y certificaciones.

## 🔗 Portfolio en vivo

**https://juanrc98.github.io**

## 👤 Sobre mí

Analista Junior de Ciberseguridad con formación en ASIR y experiencia práctica en operaciones SOC 24/7 y despliegue de infraestructura Microsoft en entorno corporativo.

- **Ubicación:** Córdoba, España
- **Disponibilidad:** Inmediata · Turnos 24/7 · Movilidad nacional
- **Idiomas:** Español (nativo) · Inglés (B2)

## 🛡️ Experiencia profesional

| Rol | Empresa | Periodo |
|-----|---------|---------|
| Técnico de Soporte TI — Proyecto migración Microsoft 365 | ECOINTEGRAL INGENIERÍA, SL | Mar 2026 — Actualidad |
| Analista de Ciberseguridad — SOC N1 (prácticas) | IaaS365 | Mar 2025 — Jun 2025 |
| Técnico Informático | Fersoft Informática | Oct 2025 — Dic 2025 |

## 🧰 Stack técnico

- **SIEM & Monitoring:** LogPoint · Wazuh · Microsoft Sentinel · Splunk (básico)
- **EDR / XDR:** Trend Micro Vision One · Cynet XDR
- **Cloud Security (Azure):** Microsoft Sentinel · Defender for Cloud · Microsoft Entra ID · KQL
- **Identity & Access:** Microsoft Entra ID · Active Directory · Windows Autopilot · RBAC
- **Vulnerability & Threat Intel:** Nessus · OpenVAS · CVSS · VirusTotal · OSINT
- **Scripting:** Bash · Python (básico) · PowerShell (básico)
- **Frameworks:** MITRE ATT&CK · NIST CSF · ISO 27001 · ENS · OWASP Top 10

## 🗂️ Estructura del repositorio

```
juanrc98.github.io/
├── index.html                         # Página principal
├── style.css                          # Estilos
├── script.js                          # Interacciones
├── CV_JuanRodriguezCastellano.pdf     # CV en PDF
├── Proyecto-cluster.pdf               # Documentación HA Cluster
├── write-up.pdf                       # CTF DarkHole:1
├── write-up-2.pdf                     # CTF Psycho:1
├── README.md                          # Este archivo
└── License
```

### Blue Team — Defensa y detección

**Wazuh SIEM · Detección MITRE ATT&CK**
Laboratorio completo de Wazuh SIEM con endpoint Metasploitable3 y Kali Linux como máquina ofensiva. Detección de técnicas MITRE ATT&CK (T1046, T1078, T1548.003, T1562.001), gestión de 22 CVEs con priorización CVSS, reglas personalizadas XML e integración con VirusTotal API.

**High Availability Cluster**
Clúster de alta disponibilidad con Pacemaker y Corosync sobre Linux, con balanceo de carga MariaDB y failover automático. Documentado en [`Proyecto-cluster.pdf`](./Proyecto-cluster.pdf).

**Microsoft Sentinel Lab** *(en desarrollo)*
Laboratorio cloud-native en Azure con ingesta de logs Windows/Linux, 5 reglas analíticas KQL mapeadas a MITRE ATT&CK y validación con generación controlada de eventos. Preparación práctica para SC-200.

### Red Team — CTF write-ups

- **DarkHole:1** — Enumeración web, SQLi, escalada SUID. [`write-up.pdf`](./write-up.pdf)
- **Psycho:1** — LFI, análisis de logs, escalada con scripts privilegiados. [`write-up-2.pdf`](./write-up-2.pdf)

## 🎓 Certificaciones

| Certificación | Emisor | Estado |
|---------------|--------|--------|
| CompTIA Security+ (SY0-701) | CompTIA | ✅ Nov 2025 — Nov 2028 |
| eJPTv2 — Junior Penetration Tester | INE Security | ✅ Dic 2025 — Dic 2028 |
| Google Cybersecurity Professional Certificate | Google / Coursera | ✅ Completada |
| Microsoft SC-200 — Security Operations Analyst | Microsoft | 🟡 En preparación (Jun 2026) |

**Próximos objetivos:** AZ-104 (Q4 2026) · AZ-500 (2027)

## 🗂️ Estructura del repositorio
## 🛠️ Tecnologías del sitio

- **HTML5** — Estructura semántica
- **CSS3** — Diseño responsive, modo oscuro, sin frameworks
- **JavaScript vanilla** — Interacciones ligeras
- **GitHub Pages** — Hosting

## 💻 Ejecución local

```bash
# Clonar el repositorio
git clone https://github.com/juanrc98/juanrc98.github.io.git
cd juanrc98.github.io

# Abrir con servidor local (opcional)
python -m http.server 8000
# Luego abre http://localhost:8000
```

## 📫 Contacto

- **Email:** juanrodcas98@gmail.com
- **LinkedIn:** [linkedin.com/in/juan-rodriguez-castellano](https://www.linkedin.com/in/juan-rodriguez-castellano/)
- **GitHub:** [@juanrc98](https://github.com/juanrc98)

---

© 2026 Juan Rodríguez Castellano · Analista Junior de Ciberseguridad · Córdoba, España
