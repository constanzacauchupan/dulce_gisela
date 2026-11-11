# Dulce Gisela 🧁

Página web del emprendimiento de repostería Dulce Gisela.

## Estructura

```
index.html        → página principal (todas las secciones)
css/styles.css    → estilos (paleta de colores al inicio, en :root)
js/main.js        → menú del celular y año del footer
img/              → fotos (usar .webp o .jpg, idealmente < 300 KB cada una)
robots.txt        → instrucciones para Google
```

## Cómo trabajar

1. Abrir la carpeta en VS Code.
2. Clic derecho en `index.html` → **Open with Live Server** (extensión Live Server).
3. Probar en tamaño celular: F12 → ícono de dispositivo.
4. Guardar avances:
   ```bash
   git add .
   git commit -m "describe el cambio"
   git push
   ```

## Paleta de colores

| Nombre          | Hex       | Uso                                    |
|-----------------|-----------|----------------------------------------|
| crema           | `#FFFBF8` | fondo general                          |
| rosa-50         | `#FADCE4` | fondo de secciones, detalles           |
| rosa-200        | `#FFB5CC` | adornos, líneas                        |
| malva           | `#E2B9DB` | adornos, degradados                    |
| celeste         | `#9DC3E2` | adornos, degradados                    |
| turquesa        | `#9DD2D8` | números de pasos, círculos decorativos |
| rosa-profundo   | `#B0557A` | botones y enlaces (texto blanco)       |
| chocolate       | `#3E2A2F` | texto principal y pie de página        |

Tipografías (Google Fonts): **Great Vibes** (nombre/logo), **Cormorant Garamond**
(títulos) y **Jost** (texto).

Los colores pastel son muy claros para usarlos como texto, por eso se agregaron
tonos oscuros (rosa-profundo y chocolate) que combinan y se leen bien.

## Pendientes

- [ ] Reemplazar textos de ejemplo por los reales
- [ ] Agregar fotos en `img/` y en el catálogo
- [x] WhatsApp e Instagram (tomados del logo)
- [ ] Poner la ciudad/comuna (buscar `[ciudad]` y `[Ciudad / comuna]`)
- [ ] Publicar con GitHub Pages
- [ ] Crear `sitemap.xml` con la URL final y registrar en Google Search Console
- [ ] Crear Perfil de Empresa en Google
