# prototipo-productora_GoodTimes
 
Prototipo de desmostración de una pagina web estatica para productora y cotización.

# REGISTRO DE LAS NUEVAS HISTORIAS DE USUARIO

Se agragaron en el transcurso de la creación del prototipo nuevas historias de usuario
originadas a un nuevo modulo de perfil del cliente en el cual el cliente puede visualizar
todos los eventos realizados si es que con anterioridad se realizado eventos asociados
al cliente.

-`HU31`: El cliente puede ingresar a su perfil de cliente
-`HU32`: El cliente puede visualizar los eventos realizados 
-`HU33`: El cliente puede visualizar los detalles de cada evento
-`HU34`: El cliente puede realizar una cotización desde su mismo perfil de cliente


 -------------------------------------------------------------------------------------------------
 |         Gestor              |     HU incluidas    |   Responsables   |          Rama          |
 -------------------------------------------------------------------------------------------------
 | Vista estatica pagina       | HU-01 hasta HU04    | Johans Toledo    | feature/Jtoledo        |
 | principal                   |                     |                  |                        |
 |------------------------------------------------------------------------------------------------
 | Gestor de cotizaciones      | HU05 hasta HU17     | Pablo Diaz /     | feature/pdiaz          |
 |                             |                     | Jarbi Lunas      | feature/jluna          |
 |------------------------------------------------------------------------------------------------
 | Gestor de perfil cliente    | HU31 hasta HU34     | Jarbi Lunas      | feature/jluna          |
 |------------------------------------------------------------------------------------------------
 | Gestionar Historial panel   | HU18 hasta 29       | Johans Toledo /  | feature/Jtoledo        |
 | Administrador               |                     | Pablo Diaz       | feature/pdiaz          |
 |------------------------------------------------------------------------------------------------

# Estructura
- `index.html`: página pública / presentación.
- `login.html`: acceso y selección de perfil.
- `cotizar.html`: formulario de nueva cotización y disponibilidad de horarios.
- `cliente.html`: panel del cliente, estados y detalle de solicitudes.
- `admin.html`: panel administrativo, edición de estado/valor y registro de pagos.
- `css/styles.css`: estilos compartidos y adaptación para movil/tablets.
