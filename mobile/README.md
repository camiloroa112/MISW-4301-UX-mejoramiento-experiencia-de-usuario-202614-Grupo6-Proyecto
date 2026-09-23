# Snoozeless Mobile

Maqueta navegable (NO funcional) de la aplicación móvil de Snoozeless, pixel-perfect contra los mockups de Figma ("snoozeless - mockups - mobile"). Sin backend: todos los datos son mock y la navegación entre pantallas es real, pero no hay persistencia ni llamadas HTTP.

## Arquitectura

- **Tipo:** Aplicación móvil híbrida (Ionic + Capacitor), compilable a APK Android.
- **Stack:** Angular 22 (componentes standalone, `loadComponent` con rutas perezosas), Ionic 9, Capacitor 8, TypeScript, SCSS.
- **Estilo:** CSS plano con tokens de diseño en `src/theme/design-tokens.scss` (paleta y tipografía extraídas de Figma), fuente Comfortaa.
- **Patrón:** una carpeta por pantalla bajo `src/app/<pantalla>/` (`.page.ts` + `.page.html` + `.page.scss` + `.page.spec.ts`), sin módulo compartido de layout — cada página es autocontenida.
- **Estado:** servicios `providedIn: 'root'` para estado compartido no persistente entre pantallas relacionadas (`services/reto.service.ts` para el flujo de reto activo, `services/nueva-alarma.service.ts` para el asistente de creación de alarma).

## Pantallas implementadas

| Ruta | Pantalla | Nodo Figma |
| --- | --- | --- |
| `/alarmas-lista` | Lista de alarmas ya poblada (ruta raíz) | `10:50` — M02-alarmas-lista |
| `/nueva` | Crear alarma · paso 1/3 (hora, días, etiqueta) | `11:58` — M02-nueva |
| `/snooze` | Crear alarma · paso 2/3 (duración del reto, límite de posposiciones) | `11:130` — M02-snooze |
| `/reto-config` | Crear alarma · paso 3/3 (pasos a caminar) | `11:182` — M02-reto-config |
| `/reto-curso` | Reto activo (caminando) | `14:35` — M03-reto-curso |
| `/reto-faltan` | Aviso de pasos faltantes | `14:63` — M03-reto-faltan |
| `/reto-ok` | Reto completado | `14:93` — M03-reto-ok |

Flujo completo navegable con clics:

- `/alarmas-lista` → (`+`) `/nueva` → (Continuar) `/snooze` → (Continuar) `/reto-config` → (Guardar) vuelve a `/alarmas-lista`.
- `/alarmas-lista` → (▸ Simular: alarma sonando) `/reto-curso` → toca la pantalla para simular pasos → `/reto-faltan` (aviso a los 32 pasos) o `/reto-ok` (al llegar a 40).
- Los botones de volver/cerrar de `/reto-curso`, `/reto-faltan` y `/reto-ok` regresan a `/alarmas-lista`.

## Configuración

No requiere variables de entorno. `capacitor.config.ts` define el `appId` y `appName` de la app nativa.

## Ejecución local

Requiere **Node `^22.22.3 || ^24.15.0 || >=26.0.0`** (Angular 22).

```bash
npm install
npm start                    # ng serve — http://localhost:4200/
npm start -- --port 4300     # si corres web/ al mismo tiempo, para no chocar puertos
```

### Compilar a Android (opcional)

El proyecto incluye Capacitor y las dependencias nativas (`@capacitor/android` no está instalado por defecto). Para generar el proyecto Android y compilar el APK:

```bash
npm run build
npx cap add android      # primera vez
npx cap sync android
cd android && ./gradlew assembleDebug
```

Requiere Android SDK (cmdline-tools, platform-tools, build-tools) instalado localmente. Este flujo no se ha verificado en este repositorio; documentar aquí cualquier ajuste una vez probado.

## Testing

Unit tests con Vitest:

```bash
npm test
```
