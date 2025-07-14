import Admonition from "./Admonition";

type Props = {
  sectionId: string;
};

export default function SectionContent({ sectionId }: Props) {
  switch (sectionId) {
    case 'introduction':
      return (
        <div className="space-y-6 space-x-6 text-justify text-gray-800">
          <h1 className="text-3xl font-bold mb-4">Introduction</h1>
          <p>El clúster <strong> <em>MAGMA</em> </strong> (acrónimo de <strong> <em>Magnetotellurics And Geothermal Multiphysics Analysis</em> </strong>) es una infraestructura de cómputo de alto rendimiento (HPC) operando sobre Rocky Linux 9.5 “Blue Onyx” orientada a la simulación numérica en geofísica, con énfasis en la simulación numérica avanzada de procesos magnetotelúricos, modelado de reservorios geotérmicos y análisis de flujo y transferencia de calor en medios porosos.</p>

          <p>Constituido por un conjunto de cuatro máquinas físicas, <em>MAGMA</em> es un clúster compacto y funcional. Tres de estas máquinas —<em>Darcy</em>, <em>Ampere</em> y <em>Maxwell</em>— fungen como nodos de cómputo dedicados, mientras que la cuarta máquina —<em>magma</em>— cumple el rol de nodo login, servidor de archivos, autenticación y control de trabajos. Los nodos de cómputo son estaciones de trabajo Fujitsu con procesadores Intel Xeon de generación 2014–2015, los cuales, si bien no son de última generación, han sido optimizados para brindar un desempeño confiable y sostenible en tareas científicas paralelas y con potencial escalabilidad en sus recursos. Este clúster es parte de un esfuerzo de rejuvenecimiento y modernización de una plataforma originalmente basada en CentOS 7, ahora migrada a Rocky Linux (Blue Onix) como sistema operativo base, alineado con estándares actuales de soporte, seguridad y compatibilidad.</p>


          <p>En su diseño y nomenclatura, los nodos del clúster hacen referencia a conceptos fundamentales de los dominios físicos que estudia:</p>


          <ul className="list-disc list-inside">
            <li>Ampere y Maxwell, en alusión a la electrodinámica y la modelación magnetotelúrica.</li>

            <li>Darcy, como referencia a la ley de Darcy y el modelado de flujo en medios porosos.</li>
          </ul>

          <p>Esta estructura simbólica refuerza el propósito del clúster como una herramienta dedicada a la investigación y experimentación computacional en sistemas geofísicos complejos.</p>
          <div>
            <img
              src="img/intro.png"
              alt="Panel Grafana"
              className="w-1/2 mx-auto mt-14 rounded shadow-xl/30 mb-40 "
            />
          </div>
        </div>
      );
    case 'systemover':
      return (
        <div className="space-y-6 text-gray-800" >
          <h1 className="text-3xl font-bold mb-4">System Overview</h1>

          <h3 className="text-2xl font-semibold">Arquitectura general del sistema</h3>
          <p>MAGMA está compuesto por:</p>
          <ul className="list-disc list-inside">
            <li>1 nodo de acceso/login (<code>magma</code>)</li>
            <li>3 nodos de cómputo (<code>darcy</code>, <code>ampere</code>, <code>maxwell</code>)</li>
          </ul>
          <p>Todos conectados vía red local, con sistema compartido mediante NFS/autofs.</p>

          <p className="mt-8 mb-1">Esquema general:</p>
          <div className="font-mono bg-white border rounded p-4 text-sm max-w-fit">
            <pre className="whitespace-pre ">
              <p> MAGMA               </p>
              <p> ├── login/control   </p>
              <p> │ └── magma         </p>
              <p> ├── computo         </p>
              <p> │ ├── Ampere        </p>
              <p> │ ├── Maxwell       </p>
              <p> │ └── Darcy         </p>
            </pre>
          </div>

          {/* <!-- Tabla de arquitectura --> */}
          <div className="overflow-x-auto mt-8">
            <table className="max-w-6xl text-sm font-mono text-left border border-gray-300">
              <thead className="bg-orange-600 text-white uppercase sticky top-0 z-10">
                <tr className="text-center">
                  <th className="px-4 py-2">Nodo</th>
                  <th className="px-4 py-2">Modelo de CPU</th>
                  <th className="px-4 py-2">Hilos/core</th>
                  <th className="px-4 py-2">Cores/socket</th>
                  <th className="px-4 py-2">Sockets</th>
                  <th className="px-4 py-2">Memoria total</th>
                </tr>
              </thead>
              <tbody className="text-gray-900">
                <tr className="bg-orange-100">
                  <td className="px-4 py-2 font-semibold">magma</td>
                  <td className="px-4 py-2">Intel Core i7-2600 @ 3.40GHz</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">4</td>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">~5.7 GB</td>
                </tr>
                <tr className="bg-orange-200">
                  <td className="px-4 py-2 font-semibold">darcy</td>
                  <td className="px-4 py-2">Intel Xeon Gold 6240 @ 2.60GHz</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">18</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">~187 GB</td>
                </tr>
                <tr className="bg-orange-200">
                  <td className="px-4 py-2 font-semibold">ampere</td>
                  <td className="px-4 py-2">Intel Xeon E5-2640 v3 @ 2.60GHz</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">8</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">~93.7 GB</td>
                </tr>
                <tr className="bg-orange-200">
                  <td className="px-4 py-2 font-semibold">maxwell</td>
                  <td className="px-4 py-2">Intel Xeon E5-2660 v3 @ 2.60GHz</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">10</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">~93.7 GB</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Los nodos de cómputo son computadoras Fujitsu con arquitectura x86_64 y soporte multihilo. Todo el clúster
            corre sobre Rocky Linux 9.5 (Blue Onyx), una distribución empresarial compatible con RHEL.
          </p>

          <p>El nodo <code>magma</code> actúa como punto central de acceso, montando el sistema de archivos compartido y
            gestionando recursos mediante NFS.</p>


        </div>
      );
    case 'login':
      return (
        <div className="space-y-6 text-gray-800">
          <h1 className="text-3xl font-bold mb-4">Logging In</h1>
          <p>La conexion a MAGMA se realiza mediante el nodo <code className="bg-gray-100 px-2 py-1 rounded">login</code> magma, via ssh:</p>
          <code className="bg-gray-100 px-2 py-1 rounded">ssh username@magma.cluster.ub</code>
          <p className="my-6">El procedimiento de autenticacion del username se realiza  via <em>FreeIPA</em> y <em>Kerberos</em>.</p>

          <p>La mascara de la IP de magma debe ser aosicada a su IP estatica mediante la edicion del archivo:</p>
          <ul className="space-y-6 list-disc list-inside">
            <li> <code className="bg-gray-100 px-2 py-1 rounded">/etc/hosts</code> on linux/mac</li>
            <li> <code className="bg-gray-100 px-2 py-1 rounded">C:\Windows\System32\drivers\etc\hosts</code> on windows</li>
          </ul>

          <p>Se debera agregar la siguiente linea hasta el final del archivo:</p>
          <p>161.116.86.106  magma.cluster.ub    magma</p>


        </div>
      );
    case 'job':
      return (
        <div className="max-w-screen-xl mx-auto px-4 py-10 ">
          <h1 className="text-3xl font-bold mb-4">⏲ Job Scheduling System</h1>

          <p>
            El clúster está gestionado por <em>SLURM</em>, estándar en programación HPC. Las particiones están organizadas
            por tipo de carga y duración: pruebas (<code>test-openmp</code>, <code>test-mpi</code>), producción
            (<code>full-hpc</code>, <code>hybrid-multiphysics</code>) y validación (<code>pilot-dev</code>).
          </p>
          <p>Si no se especifica partición, el trabajo se ejecutará en <code>sandbox</code>.</p>

          {/* <!-- Tabla de particiones --> */}
          <div className="overflow-x-auto">
            {/* <!-- (Aquí puedes dejar tu tabla original de particiones SLURM con estilos naranja) --> */}
            <h2 className="text-2xl font-bold mt-20 mb-4">Particiones SLURM del clúster MAGMA</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left border border-gray-300">
                <thead className="bg-orange-600 sticky top-0 z-10">
                  <tr className="text-xs font-semibold text-white uppercase text-center">
                    <th className="px-4 py-3 ">Partición</th>
                    <th className="px-4 py-3 ">Propósito</th>
                    <th className="px-4 py-3 ">Nodos</th>
                    <th className="px-4 py-3 ">Hilos totales</th>
                    <th className="px-4 py-3 ">RAM estimada</th>
                    <th className="px-4 py-3">
                      <span className="block ">Límite de tiempo</span>
                      <span className="block  lowercase ">(dd-hh:mm:ss)</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-900">
                  <tr className="even:bg-orange-200 text-center">
                    <td className="px-4 py-2"><code>full-hpc</code></td>
                    <td className="px-4 py-2">Cargas HPC de gran escala</td>
                    <td className="px-4 py-2"><code>ampere,darcy,maxwell</code></td>
                    <td className="px-4 py-2">60 núcleos / 120 hilos</td>
                    <td className="px-4 py-2">~288 GB</td>
                    <td className="px-4 py-2"><code>5-00:00:00</code></td>
                  </tr>
                  <tr className="even:bg-orange-200 text-center">
                    <td className="px-4 py-2"><code>hybrid-multiphysics</code></td>
                    <td className="px-4 py-2">Trabajo de producción multiphysics</td>
                    <td className="px-4 py-2"><code>ampere,darcy,maxwell</code></td>
                    <td className="px-4 py-2">60 / 120 hilos</td>
                    <td className="px-4 py-2">~288 GB</td>
                    <td className="px-4 py-2"><code>5-00:00:00</code></td>
                  </tr>
                  <tr className="even:bg-orange-200 text-center">
                    <td className="px-4 py-2"><code>sandbox</code></td>
                    <td className="px-4 py-2">Pruebas de modelos multipropósito</td>
                    <td className="px-4 py-2"><code>darcy</code></td>
                    <td className="px-4 py-2">20 núcleos / 40 hilos</td>
                    <td className="px-4 py-2">~192 GB</td>
                    <td className="px-4 py-2"><code>01:00:00</code></td>
                  </tr>
                  <tr className="even:bg-orange-200 text-center">
                    <td className="px-4 py-2"><code>test-mpi</code></td>
                    <td className="px-4 py-2">Test de paralelismo MPI</td>
                    <td className="px-4 py-2"><code>ampere</code></td>
                    <td className="px-4 py-2">10 núcleos / 20 hilos</td>
                    <td className="px-4 py-2">~96 GB</td>
                    <td className="px-4 py-2"><code>01:00:00</code></td>
                  </tr>
                  <tr className="even:bg-orange-200 text-center">
                    <td className="px-4 py-2"><code>test-openmp</code></td>
                    <td className="px-4 py-2">Test de código multihilo</td>
                    <td className="px-4 py-2"><code>maxwell</code></td>
                    <td className="px-4 py-2">10 núcleos / 20 hilos</td>
                    <td className="px-4 py-2">~96 GB</td>
                    <td className="px-4 py-2"><code>01:00:00</code></td>
                  </tr>
                  <tr className="even:bg-orange-200 text-center">
                    <td className="px-4 py-2"><code>short-hpc</code></td>
                    <td className="px-4 py-2">Jobs breves en producción</td>
                    <td className="px-4 py-2"><code>darcy,ampere</code></td>
                    <td className="px-4 py-2">20 núcleos / 40 hilos</td>
                    <td className="px-4 py-2">~192 GB</td>
                    <td className="px-4 py-2"><code>04:00:00</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <section className="max-w-5xl mx-auto mt-12"> */}
            {/**/}
            {/**/}
            {/*   <hr className=" border-2 border-t-zinc-900 mt-24" /> */}
            {/**/}
            {/*   <div className="space-y-8 text-sm text-gray-800 font-sans leading-relaxed"> */}
            {/**/}
            {/*     <div className="bg-purple-50 border-l-4 border-purple-400 p-5 rounded shadow-sm"> */}
            {/*       <h3 className="text-xl font-semibold text-purple-600 mb-1">full-hpc</h3> */}
            {/*       <p><strong>Propósito:</strong> Cargas HPC de gran escala.</p> */}
            {/*       <p><strong>Nodos:</strong> ampere, darcy, maxwell</p> */}
            {/*       <p><strong>Recursos:</strong> 60 núcleos / 120 hilos totales · ~288 GB RAM</p> */}
            {/*       <p><strong>Tiempo límite:</strong> 5 días</p> */}
            {/*       <p><strong>Tipo de carga:</strong> Simulaciones de larga duración o gran consumo de CPU y memoria.</p> */}
            {/*     </div> */}
            {/**/}
            {/*     <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded shadow-sm"> */}
            {/*       <h3 className="text-xl font-semibold text-blue-600 mb-1">hybrid-multiphysics</h3> */}
            {/*       <p><strong>Propósito:</strong> Trabajo de producción para simulaciones multiphysics.</p> */}
            {/*       <p><strong>Nodos:</strong> ampere, darcy, maxwell</p> */}
            {/*       <p><strong>Recursos:</strong> 60 núcleos / 120 hilos · ~288 GB RAM</p> */}
            {/*       <p><strong>Tiempo límite:</strong> 5 días</p> */}
            {/*       <p><strong>Tipo de carga:</strong> COMSOL, OpenFOAM, FEniCS, etc.</p> */}
            {/*     </div> */}
            {/**/}
            {/*     <div className="bg-green-50 border-l-4 border-green-400 p-5 rounded shadow-sm"> */}
            {/*       <h3 className="text-xl font-semibold text-green-600 mb-1">sandbox</h3> */}
            {/*       <p><strong>Propósito:</strong> Espacio de pruebas multipropósito.</p> */}
            {/*       <p><strong>Nodos:</strong> darcy, maxwell</p> */}
            {/*       <p><strong>Recursos:</strong> 20 núcleos / 40 hilos · ~192 GB RAM</p> */}
            {/*       <p><strong>Tiempo límite:</strong> 5 horas</p> */}
            {/*       <p><strong>Tipo de carga:</strong> Experimentación, debugging ligero, pequeños scripts o prototipos.</p> */}
            {/*     </div> */}
            {/**/}
            {/*     <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded shadow-sm"> */}
            {/*       <h3 className="text-xl font-semibold text-yellow-600 mb-1">test-mpi</h3> */}
            {/*       <p><strong>Propósito:</strong> Pruebas específicas para paralelismo MPI.</p> */}
            {/*       <p><strong>Nodos:</strong> ampere</p> */}
            {/*       <p><strong>Recursos:</strong> 10 núcleos / 20 hilos · ~96 GB RAM</p> */}
            {/*       <p><strong>Tiempo límite:</strong> 1 hora</p> */}
            {/*       <p><strong>Tipo de carga:</strong> Código paralelo con `mpirun` / `srun` en fase de prueba.</p> */}
            {/*     </div> */}
            {/**/}
            {/*     <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded shadow-sm"> */}
            {/*       <h3 className="text-xl font-semibold text-pink-600 mb-1">test-openmp</h3> */}
            {/*       <p><strong>Propósito:</strong> Pruebas de rendimiento para código multihilo OpenMP.</p> */}
            {/*       <p><strong>Nodos:</strong> maxwell</p> */}
            {/*       <p><strong>Recursos:</strong> 10 núcleos / 20 hilos · ~96 GB RAM</p> */}
            {/*       <p><strong>Tiempo límite:</strong> 1 hora</p> */}
            {/*       <p><strong>Tipo de carga:</strong> Paralelización compartida con export OMP_NUM_THREADS.</p> */}
            {/*     </div> */}
            {/**/}
            {/*     <div className="bg-teal-50 border-l-4 border-teal-400 p-5 rounded shadow-sm"> */}
            {/*       <h3 className="text-xl font-semibold text-teal-600 mb-1">short-hpc</h3> */}
            {/*       <p><strong>Propósito:</strong> Tareas breves y urgentes.</p> */}
            {/*       <p><strong>Nodos:</strong> ampere, darcy</p> */}
            {/*       <p><strong>Recursos:</strong> 20 núcleos / 40 hilos · ~192 GB RAM</p> */}
            {/*       <p><strong>Tiempo límite:</strong> 4 horas</p> */}
            {/*       <p><strong>Tipo de carga:</strong> Postprocesamiento, cálculos express, scripts de exploración.</p> */}
            {/*     </div> */}
            {/**/}
            {/*     <div className="bg-indigo-50 border-l-4 border-indigo-400 p-5 rounded shadow-sm"> */}
            {/*       <h3 className="text-xl font-semibold text-indigo-600 mb-1">pilot-dev</h3> */}
            {/*       <p><strong>Propósito:</strong> Pruebas piloto para códigos intensivos en etapa previa a producción.</p> */}
            {/*       <p><strong>Nodos:</strong> ampere, maxwell</p> */}
            {/*       <p><strong>Recursos:</strong> 20 núcleos / 40 hilos · ~192 GB RAM</p> */}
            {/*       <p><strong>Tiempo límite:</strong> 5 horas</p> */}
            {/*       <p><strong>Tipo de carga:</strong> Validación HPC, preproducción, análisis comparativos.</p> */}
            {/*     </div> */}
            {/**/}
            {/*   </div> */}
            {/* </section> */}
          </div>

          <div className="overflow-x-auto mt-8">
            <h2 className="text-2xl font-bold mt-20 mb-4">Directivas útiles en SLURM</h2>
            <table className="max-w-4xl text-sm text-left border border-gray-300 font-mono">
              <thead className="bg-emerald-700 text-white uppercase">
                <tr>
                  <th className="px-4 py-2">Comando</th>
                  <th className="px-4 py-2">Descripción</th>
                </tr>
              </thead>
              <tbody className="text-gray-900">
                <tr className="bg-emerald-50">
                  <td className="px-4 py-2 font-semibold">srun</td>
                  <td className="px-4 py-2">Ejecuta un comando directamente sobre los nodos asignados</td>
                </tr>
                <tr className="bg-emerald-100">
                  <td className="px-4 py-2 font-semibold">sbatch</td>
                  <td className="px-4 py-2">Envía un job al planificador usando un script `.slurm`</td>
                </tr>
                <tr className="bg-emerald-50">
                  <td className="px-4 py-2 font-semibold">squeue</td>
                  <td className="px-4 py-2">Muestra la cola de jobs en ejecución y pendientes</td>
                </tr>
                <tr className="bg-emerald-100">
                  <td className="px-4 py-2 font-semibold">sinfo</td>
                  <td className="px-4 py-2">Muestra el estado de los nodos y las particiones</td>
                </tr>
                <tr className="bg-emerald-50">
                  <td className="px-4 py-2 font-semibold">scancel</td>
                  <td className="px-4 py-2">Cancela un job específico</td>
                </tr>
                <tr className="bg-emerald-100">
                  <td className="px-4 py-2 font-semibold">scontrol</td>
                  <td className="px-4 py-2">Herramienta administrativa para gestionar Slurm</td>
                </tr>
                <tr className="bg-emerald-50">
                  <td className="px-4 py-2 font-semibold">sacct</td>
                  <td className="px-4 py-2">Consulta el historial de jobs (si accounting está habilitado)</td>
                </tr>
                <tr className="bg-emerald-100">
                  <td className="px-4 py-2 font-semibold">sprio</td>
                  <td className="px-4 py-2">Consulta la prioridad de ejecución de jobs en espera</td>
                </tr>
                <tr className="bg-emerald-50">
                  <td className="px-4 py-2 font-semibold">sstat</td>
                  <td className="px-4 py-2">Muestra estadísticas de uso en jobs activos</td>
                </tr>
                <tr className="bg-emerald-100">
                  <td className="px-4 py-2 font-semibold">sattach</td>
                  <td className="px-4 py-2">Se conecta a una tarea en ejecución para ver su salida</td>
                </tr>
              </tbody>
            </table>
          </div>


          <div className="mt-10 space-y-12">
            {/* <!-- Título principal --> */}
            <h2 className="text-2xl font-bold text-indigo-700">Plantillas de Jobs SLURM para MAGMA</h2>
            <h2 className="text-2xl font-bold mt-20 mb-4">Ejemplo de jobs en SLURM</h2>

            {/* <!-- Plantilla Serial --> */}
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">1. Job Serial</h3>
              {/* <pre className="bg-indigo-100 p-4 rounded-md overflow-x-auto text-sm font-mono text-gray-800"> */}

              <pre className="bg-indigo-100 p-4 rounded-md overflow-x-auto text-sm font-mono text-gray-800 max-w-md">
                {/* <pre className="bg-indigo-100 p-4 rounded-md overflow-x-auto text-sm font-mono text-gray-800 whitespace-pre overflow-scroll max-w-full"> */}

                <p>#!/bin/bash </p>
                <p>#SBATCH --job-name=serial_test </p>
                <p>#SBATCH --output=output-%j.out </p>
                <p>#SBATCH --error=error-%j.err </p>
                <p>#SBATCH --partition=sandbox </p>
                <p>#SBATCH --ntasks=1 </p>
                <p>#SBATCH --cpus-per-task=1 </p>
                <p>#SBATCH --mem=2G </p>
                <p>#SBATCH --time=00:10:00 </p>
                <p>module load gcc </p>
                <p>./mi_codigo_serial.out </p>
              </pre>
            </div>

            {/* <!-- Plantilla OpenMP --> */}
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">2. Job OpenMP</h3>
              <pre className="bg-indigo-100 p-4 rounded-md overflow-x-auto text-sm font-mono text-gray-800 max-w-md">
                <p>#!/bin/bash                                 </p>
                <p>#SBATCH --job-name=openmp_test              </p>
                <p>#SBATCH --output=openmp-output-%j.out       </p>
                <p>#SBATCH --error=openmp-error-%j.err         </p>
                <p>#SBATCH --partition=test-openmp             </p>
                <p>#SBATCH --ntasks=1                          </p>
                <p>#SBATCH --cpus-per-task=8                   </p>
                <p>#SBATCH --mem=8G                            </p>
                <p>#SBATCH --time=00:20:00                     </p>
                <p>                                            </p>
                <p>module load gcc                             </p>
                <p>export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK </p>
                <p>                                            </p>
                <p>./mi_codigo_openmp.out                      </p>
              </pre>
            </div>

            {/* <!-- Plantilla MPI --> */}
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">3. Job MPI</h3>
              <pre className="bg-indigo-100 p-4 rounded-md overflow-x-auto text-sm font-mono text-gray-800 max-w-md">
                <p>#!/bin/bash                                </p>
                <p>#SBATCH --job-name=mpi_test                </p>
                <p>#SBATCH --output=mpi-output-%j.out         </p>
                <p>#SBATCH --error=mpi-error-%j.err           </p>
                <p>#SBATCH --partition=test-mpi               </p>
                <p>#SBATCH --ntasks=4                         </p>
                <p>#SBATCH --cpus-per-task=1                  </p>
                <p>#SBATCH --mem-per-cpu=2G                   </p>
                <p>#SBATCH --time=00:30:00                   </p>
                <p>                                          </p>
                <p>module load openmpi                       </p>
                <p>                                          </p>
                <p> ./mi_codigo_mpi.out                  </p>
              </pre>
            </div>

            {/* <!-- Plantilla Job Híbrido MPI + OpenMP --> */}
            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-2">4. Job Híbrido MPI + OpenMP (3 nodos)</h3>
              <pre className="bg-indigo-100 p-4 rounded-md overflow-x-auto text-sm font-mono text-gray-800 max-w-xl">
                <p>#!/bin/bash                                                   </p>
                <p>#SBATCH --job-name=hybrid_mpi_openmp                          </p>
                <p>#SBATCH --output=hybrid-output-%j.out                         </p>
                <p>#SBATCH --error=hybrid-error-%j.err                           </p>
                <p>#SBATCH --partition=hybrid-multiphysics                       </p>
                <p>#SBATCH --nodes=3                                             </p>
                <p>#SBATCH --ntasks=6 # Total MPI tasks (2 por nodo, por ejemplo)</p>
                <p>#SBATCH --cpus-per-task=5 # Hilos OpenMP por tarea MPI        </p>
                <p>#SBATCH --mem=180G # Memoria total estimada                   </p>
                <p>#SBATCH --time=02:00:00                                       </p>
                <p>                                                              </p>
                <p># Cargar módulos necesarios                                   </p>
                <p>module load intel/oneapi                                      </p>
                <p>module load openmpi                                           </p>
                <p>                                                              </p>
                <p># Establecer número de hilos OpenMP por tarea                 </p>
                <p>export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK                   </p>
                <p>                                                              </p>
                <p># Ejecutar el binario híbrido                                 </p>
                <p>./mi_codigo_hibrido.out                                       </p>
              </pre>
            </div>


          </div>











        </div>
      );
    case 'toolchain':
      return (
        <div className="space-y-6 text-gray-800" >
          <h1 className="text-3xl font-bold mb-4">Toolchain</h1>
          <p>
            In High Performance Computing (HPC), a toolchain refers to a collection of software development tools, including compilers,
            libraries, and potentially other tools, used to build and run applications on HPC systems. These toolchains are designed
            to provide a consistent and optimized environment for compiling and executing code, especially for complex, computationally
            intensive tasks
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            El clúster MAGMA utiliza <span className="font-semibold text-indigo-600">Environment Modules</span> para gestionar entornos de desarrollo y ejecución de software científico. Esta herramienta permite cargar múltiples versiones de compiladores, bibliotecas, entornos de Python y otras herramientas de manera flexible y sin conflictos.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            A continuación se enlistan los módulos actualmente disponibles en el sistema. Todos ellos pueden cargarse de forma dinámica con el comando <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-purple-700">module load &lt;nombre&gt;</code>.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left font-mono border border-gray-300">
              <thead className="bg-indigo-600 text-white uppercase sticky top-0">
                <tr>
                  <th className="px-4 py-2">Módulo</th>
                  <th className="px-4 py-2">Versión</th>
                  <th className="px-4 py-2">Descripción</th>
                  <th className="px-4 py-2">Comando de carga</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="odd:bg-indigo-100">
                  <td className="px-4 py-2 font-semibold">gcc</td>
                  <td className="px-4 py-2">13.1.0</td>
                  <td className="px-4 py-2">Compilador GNU para C/C++ y Fortran</td>
                  <td className="px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">module load gcc</code></td>
                </tr>
                <tr className="even:bg-indigo-50">
                  <td className="px-4 py-2 font-semibold">intel/oneapi</td>
                  <td className="px-4 py-2">2024.1.0</td>
                  <td className="px-4 py-2">Toolchain de Intel para HPC (Fortran, C++, MKL, MPI)</td>
                  <td className="px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">module load intel/oneapi</code></td>
                </tr>
                <tr className="odd:bg-indigo-100">
                  <td className="px-4 py-2 font-semibold">conda</td>
                  <td className="px-4 py-2">Miniconda3</td>
                  <td className="px-4 py-2">Gestor de entornos y paquetes Python</td>
                  <td className="px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">module load conda</code></td>
                </tr>
                <tr className="even:bg-indigo-50">
                  <td className="px-4 py-2 font-semibold">python</td>
                  <td className="px-4 py-2">3.8.0</td>
                  <td className="px-4 py-2">Intérprete de Python standalone</td>
                  <td className="px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded">module load python</code></td>
                </tr>
                {/* Puedes seguir agregando módulos aquí */}
              </tbody>
            </table>
          </div>

          <div>
            <p className="mb-1">Para listar los modulos disponibles: </p>
            <code className="bg-gray-100 px-2 py-1 rounded">module avail</code>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold  mb-2">Ejemplo de uso</h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm font-mono text-gray-800 max-w-fit">

              <div>
                <p> # Cargar toolchain de Intel y OpenMPI</p>
                <p> module load intel/oneapi             </p>
                <p> module load openmpi                  </p>
              </div>

              <div className="mt-3">
                <p># Ejecutar código compilado   </p>
                <p>srun ./mi_codigo_hibrido.out  </p>
              </div>
            </pre>
          </div>
        </div>
      );
    case 'stack':
      return (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-4">Cluster Stack</h1>
          <p>En un cluster de HPC, un stack de servicios se refiere al conjunto de herramientas, servicios y configuraciones necesarias para que el clúster funcione de manera eficiente, segura y coordinada. Estos servicios permiten gestionar recursos, usuarios, almacenamiento y ejecución de trabajos paralelos. En otras palabras, es el conjunto de componentes de software y configuración que permiten a múltiples usuarios ejecutar tareas de alto rendimiento de manera segura, organizada y eficiente.</p>


          <p>Actualmente, MAGMA tiene en funcionamiento los siguientes servicios:</p>
          <div className="overflow-x-auto mt-8">
            <table className="min-w-full text-sm font-mono text-left border border-gray-300">
              <thead className="bg-purple-700 text-white uppercase sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-2">Componente</th>
                  <th className="px-4 py-2">Descripción</th>
                  <th className="px-4 py-2">Estado</th>
                </tr>
              </thead>
              <tbody className="text-gray-900">
                <tr className="even:bg-purple-100">
                  <td className="px-4 py-2 font-semibold">MUNGE</td>
                  <td className="px-4 py-2">Autenticación encriptada entre nodos de procesos y credenciales UID y GID</td>
                  <td className="px-4 py-2 text-green-700 font-semibold">Instalado ✅</td>
                </tr>
                <tr className="even:bg-purple-100">
                  <td className="px-4 py-2 font-semibold">FreeIPA + Kerberos</td>
                  <td className="px-4 py-2">Autenticación centralizada de usuarios y gestión de políticas</td>
                  <td className="px-4 py-2 text-green-700 font-semibold">Instalado ✅</td>
                </tr>
                <tr className="even:bg-purple-200">
                  <td className="px-4 py-2 font-semibold">SSH con claves</td>
                  <td className="px-4 py-2">Acceso entre nodos sin contraseña (clave pública/privada)</td>
                  <td className="px-4 py-2 text-green-700 font-semibold">Instalado ✅</td>
                </tr>
                <tr className="even:bg-purple-200">
                  <td className="px-4 py-2 font-semibold">NFS + autofs</td>
                  <td className="px-4 py-2">Exportación y montaje automático de almacenamiento compartido</td>
                  <td className="px-4 py-2 text-green-700 font-semibold">Instalado ✅</td>
                </tr>
                <tr className="even:bg-purple-200">
                  <td className="px-4 py-2 font-semibold">Slurm + slurmdbd</td>
                  <td className="px-4 py-2">Planificador de trabajos HPC y contabilidad de uso</td>
                  <td className="px-4 py-2 text-green-700 font-semibold">Instalado ✅</td>
                </tr>
                <tr className="even:bg-purple-200">
                  <td className="px-4 py-2 font-semibold">Environment Modules</td>
                  <td className="px-4 py-2">Carga dinámica de entornos de desarrollo por módulo</td>
                  <td className="px-4 py-2 text-green-700 font-semibold">Instalado ✅</td>
                </tr>
                <tr className="even:bg-purple-200">
                  <td className="px-4 py-2 font-semibold">Prometheus</td>
                  <td className="px-4 py-2">Recolección de métricas del sistema y de Slurm</td>
                  <td className="px-4 py-2 text-green-700 font-semibold">Instalado ✅</td>
                </tr>
                <tr className="even:bg-purple-200">
                  <td className="px-4 py-2 font-semibold">Grafana</td>
                  <td className="px-4 py-2">Dashboards visuales con métricas y alertas</td>
                  <td className="px-4 py-2 text-green-700 font-semibold">Instalado ✅</td>
                </tr>
                <tr className="even:bg-purple-200">
                  <td className="px-4 py-2 font-semibold">/workspace x3</td>
                  <td className="px-4 py-2">Espacios temporales para cálculo en cada nodo</td>
                  <td className="px-4 py-2 text-green-700 font-semibold">Instalado ✅</td>
                </tr>
                <tr className="even:bg-purple-200">
                  <td className="px-4 py-2 font-semibold">Firewall</td>
                  <td className="px-4 py-2">Seguridad de red para acceso desde internet/red externa</td>
                  <td className="px-4 py-2 text-green-700 font-semibold">Instalado ✅</td>
                </tr>
                <tr className="even:bg-purple-200">
                  <td className="px-4 py-2 font-semibold">Block-Inode Quotas</td>
                  <td className="px-4 py-2">Limites de almacenamiento en disco y de creacion de archivos</td>
                  <td className="px-4 py-2 text-green-700 font-semibold">Instalado ✅</td>
                </tr>
                <tr className="even:bg-purple-200">
                  <td className="px-4 py-2 font-semibold">Slurm User Limits</td>
                  <td className="px-4 py-2">Restricciones de uso por usuario o grupo</td>
                  <td className="px-4 py-2 text-red-600 font-semibold">Pendiente ⛔</td>
                </tr>
                <tr className="even:bg-purple-200">
                  <td className="px-4 py-2 font-semibold">Snapshots NFS</td>
                  <td className="px-4 py-2">Backups del sistema de archivos compartido</td>
                  <td className="px-4 py-2 text-red-600 font-semibold">Pendiente ⛔</td>
                </tr>
                <tr className="even:bg-purple-200">
                  <td className="px-4 py-2 font-semibold">Puppet</td>
                  <td className="px-4 py-2">Gestión y replicación de configuración para nuevos nodos</td>
                  <td className="px-4 py-2 text-red-600 font-semibold">Pendiente ⛔</td>
                </tr>
                <tr className="even:bg-purple-200">
                  <td className="px-4 py-2 font-semibold">Intel oneAPI</td>
                  <td className="px-4 py-2">Compiladores y herramientas para cómputo científico</td>
                  <td className="px-4 py-2 text-green-700 font-semibold">Instalado ✅</td>
                </tr>
                <tr className="even:bg-purple-200">
                  <td className="px-4 py-2 font-semibold">GCC</td>
                  <td className="px-4 py-2">Compilador GNU para C, C++, Fortran y otros</td>
                  <td className="px-4 py-2 text-green-700 font-semibold">Instalado ✅</td>
                </tr>
                <tr className="even:bg-purple-200">
                  <td className="px-4 py-2 font-semibold">Python (Conda)</td>
                  <td className="px-4 py-2">Entornos virtuales para desarrollo y scripts HPC</td>
                  <td className="px-4 py-2 text-green-700 font-semibold">Instalado ✅</td>
                </tr>
                <tr className="even:bg-purple-200">
                  <td className="px-4 py-2 font-semibold">MATLAB</td>
                  <td className="px-4 py-2">Software técnico para simulación y análisis numérico</td>
                  <td className="px-4 py-2 text-red-600 font-semibold">Pendiente ⛔</td>
                </tr>
                <tr className="even:bg-purple-200">
                  <td className="px-4 py-2 font-semibold">COMSOL</td>
                  <td className="px-4 py-2">Simulación multiphysics y análisis FEM</td>
                  <td className="px-4 py-2 text-red-600 font-semibold">Pendiente ⛔</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p >Ejemplo de servicios y como acceder a estos</p>
          <ul className="space-y-6 list-inside list-none mt-10">
            <li> 🔁 Acceso SSH al cluster <code className="bg-gray-100 px-2 py-1 rounded">ssh username@magma.cluster.ub</code></li>
            <li> 📊 Prometheus <code className="bg-gray-100 px-2 py-1 rounded"><a href="http://magma:9091/targets" className="hover:text-fuchsia-700">http://magma:9091/targets</a></code></li>
            <li>🔐 Grafana <code className="bg-gray-100 px-2 py-1 rounded"><a href="http://magma:3000" className="hover:text-fuchsia-700">http://magma:3000</a></code></li>
            <li> 🖥️ Cockpit <code className="bg-gray-100 px-2 py-1 rounded"><a href="http://magma:9090" className="hover:text-fuchsia-700">http://magma:9090</a></code></li>
          </ul>

          <div className="mt-28">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Montaje Automático del Workspace Local por Nodo</h2>
            <p className="mb-4 text-gray-800">
              En cada nodo de cómputo del clúster MAGMA se dispone de un espacio de almacenamiento local (~1 TB) ubicado en <code className="bg-gray-200 px-1 rounded">/mnt/workspace</code> o <code className="bg-gray-200 px-1 rounded">/mnt/scratch</code>. Utilizando <strong>autofs</strong>, este recurso se monta automáticamente cuando un usuario accede a <code className="bg-gray-200 px-1 rounded">/workspace/&lt;nodo&gt;</code>.
            </p>

            <h3 className="text-xl font-semibold text-purple-600 mb-2 mt-14">Configuración resumida</h3>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li>Crear el directorio <code>/workspace</code> en cada nodo.</li>
              <li>Editar <code>/etc/auto.workspace</code> con la ruta local al almacenamiento temporal.</li>
              <li>Agregar entrada en <code>/etc/auto.master</code> apuntando a <code>/workspace</code>.</li>
              <li>Reiniciar el servicio <code>autofs</code>.</li>
            </ul>

            <pre className="bg-purple-100 p-4 rounded text-sm font-mono overflow-x-auto mb-4 max-w-fit">
              <p> # /etc/auto.workspace (ejemplo)          </p>
              <p> maxwell  -fstype=auto :/mnt/scratc mt-14h</p>
              <p> darcy    -fstype=auto :/mnt/workspace    </p>
              <p> ampere   -fstype=auto :/mnt/workspace    </p>
            </pre>

            <h3 className="text-lg font-semibold text-purple-600 mt-14">Esquema del comportamiento</h3>
            <div className="bg-white shadow rounded p-4 my-4 max-w-fit">
              <pre className="text-sm text-gray-700 font-mono">
                <p> +-------------------------+                                 </p>
                <p> |  Nodo de Cómputo        |                                  </p>
                <p> |  maxwell                |                                  </p>
                <p> +-------------------------+                                 </p>
                <p> |                                                           </p>
                <p> v                                                           </p>
                <p> /workspace/maxwell  ---`{'>'}`  monta /mnt/scratch (local)  </p>
                <p> |                                                           </p>
                <p> |---`{'>'}` desmonta tras 60 segundos inactivo              </p>
              </pre>
            </div>
          </div>


















        </div>
      );
    case 'metrics':
      return (
        <div className="space-y-6 text-gray-800" >
          <h1 className="text-3xl font-bold mb-4">Metrics and Monitoring</h1>
          <ul className="list-disc list-inside">
            <li>1 nodo de acceso/login (<code>magma</code>)</li>
            <li>3 nodos de cómputo (<code>darcy</code>, <code>ampere</code>, <code>maxwell</code>)</li>
          </ul>
          <p>Magma implementa servicios de monitoreo del sistem,usa <em>Prometheus</em> para recolectar datos automáticamente y <em>Grafana</em> para visualizarlos. Esto te permite ver cómo se comporta tu clúster en tiempo real, detectar problemas antes de que se agraven y optimizar el uso de los recursos de cómputo. Es como tener un panel de control centralizado para todo el clúster.</p>

          <p>Prometheus es una plataforma de monitoreo y recolección de métricas orientada a series de tiempo. Su función principal es recopilar, almacenar y consultar métricas de sistemas, aplicaciones o servicios, usando una arquitectura basada en "pull", en la que Prometheus consulta periódicamente a los servicios (exporters) para obtener métricas. En un entorno de clúster, Prometheus permite monitorear recursos críticos como uso de CPU, memoria, red, estado de nodos, jobs del scheduler (como Slurm), entre otros. </p>

          <p>Por su parte, Grafana es una herramienta de visualización de datos que se integra perfectamente con Prometheus, permitiendo crear paneles dinámicos e interactivos para representar gráficamente las métricas recolectadas.</p>


          En tu clúster Magma, Prometheus y Grafana están funcionando como el núcleo del sistema de monitoreo.
          Su uso se articula así:
          <p>En Magma...</p>

          <ul className="list-disc list-inside mt-8">
            <li> Prometheus está instalado y configurado en el nodo principal (magma). </li>

            <li> Se encarga de recopilar métricas automáticamente desde los nodos del clúster (CPU, RAM, disco, red). </li>

            <li> El exporter de Slurm, que entrega información de trabajos, usuarios, colas, tiempos de espera, etc. </li>

            <li> Cada nodo del clúster tiene exporters instalados que exponen sus métricas en forma de texto plano. Prometheus "raspa" esas métricas periódicamente. </li>

          </ul>

          <p>Grafana está instalado como el visor de datos. A través de su interfaz web puedes:</p>
          <ul className="list-disc list-inside mt-1">
            <li>Visualizar el estado general del clúster en tiempo real. </li>
            <li> Ver cuántos jobs hay activos, qué nodos están cargados o inactivos. </li>
            <li> Crear dashboards personalizados por usuario, por nodo, por trabajo o por servicio. </li>
          </ul>

          <p>  Todo esto se accede desde dentro de la red del clúster (o vía VPN fuera de la red)</p>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold mt-16">Resúmen de métricas de los nodos de computo. <em>Maxwell</em></h3>
            <img
              src="img/prome1.png"
              alt="Dashboard Prometheus"
              className="w-full rounded shadow border"
            />
            <h3 className="text-xl font-semibold mt-16">Métricas del nodo de computo <em>Maxwell</em></h3>
            <img
              src="img/prome2.png"
              alt="Panel Grafana"
              className="w-full rounded shadow border"
            />

          </div>

        </div>
      );
    case 'scalability':
      return (
        <div>
          <p className="mb-4">Actualmente, los nodos de computo posen la siguientememoria RAM</p>
          <table className="max-w-6xl text-sm font-mono text-left border border-gray-300">
            <thead className="bg-orange-600 text-white uppercase sticky top-0 z-10">
              <tr className="text-center">
                <th className="px-4 py-2">Nodo</th>
                <th className="px-4 py-2">Procesador</th>
                <th className="px-4 py-2">Modulo disponibles</th>
                <th className="px-4 py-2">Modulo ocupados</th>
                <th className="px-4 py-2">RAM Instalada por Modulo</th>
                <th className="px-4 py-2">Memoria RAM Instalada</th>
                <th className="px-4 py-2">Memoria Máxima</th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              <tr className="bg-orange-100 text-center">
                <td className="px-4 py-2 font-semibold">magma</td>
                <td className="px-4 py-2 whitespace-nowrap">Intel Core i7-2600 @ 3.40GHz</td>
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">2Gb + 4Gb</td>
                <td className="px-4 py-2">6 GB</td>
                <td className="px-4 py-2">8 GB</td>
              </tr>
              <tr className="bg-orange-200 text-center">
                <td className="px-4 py-2 font-semibold">darcy</td>
                <td className="px-4 py-2 whitespace-nowrap">Intel Xeon Gold 6240 @ 2.60GHz</td>
                <td className="px-4 py-2">16</td>
                <td className="px-4 py-2">12</td>
                <td className="px-4 py-2">16 GB</td>
                <td className="px-4 py-2">192 GB</td>
                <td className="px-4 py-2">9216 GB</td>
              </tr>
              <tr className="bg-orange-200 text-center">
                <td className="px-4 py-2 font-semibold">ampere</td>
                <td className="px-4 py-2 whitespace-nowrap">Intel Xeon E5-2640 v3 @ 2.60GHz</td>
                <td className="px-4 py-2">16</td>
                <td className="px-4 py-2">6</td>
                <td className="px-4 py-2">16 Gb</td>
                <td className="px-4 py-2">96 Gb</td>
                <td className="px-4 py-2">1024 Gb</td>
              </tr>
              <tr className="bg-orange-200 text-center">
                <td className="px-4 py-2 font-semibold">maxwell</td>
                <td className="px-4 py-2 whitespace-nowrap">Intel Xeon E5-2660 v3 @ 2.60GHz</td>
                <td className="px-4 py-2">16</td>
                <td className="px-4 py-2">6</td>
                <td className="px-4 py-2">16 Gb</td>
                <td className="px-4 py-2">96 GB</td>
                <td className="px-4 py-2">1024 GB</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-18">
            <p className="mb-4 font-bold">Sobre el nodo Darcy</p>

            <p>
              Tu placa base Fujitsu D3488-A2, usada en la workstation CELSIUS R970, está pensada para cargas extremadamente altas
              (simulación científica, IA, VMs, etc.). El procesador Xeon Gold 6240 oficialmente soporta hasta 1 TB de RAM por socket,
              pero con módulos LDRDIMM o 3DS LRDIMM puedes alcanzar mayores cantidades gracias al soporte de la plataforma Intel® Scalable.
            </p>
            <Admonition type="tip" title="Consejo técnico">
              ✅ Puedes llegar hasta 9 TB, usando módulos de gran capacidad (ej. 256 GB DIMMs)
            </Admonition>

          </div>
          <h2 className="mt-18 mb-4 text-2xl font-semibold">Características detalladas de los nodos de computo</h2>
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full border border-blue-300 rounded-lg text-sm text-left text-blue-900 bg-blue-50">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="px-4 py-2 border border-blue-600">Característica</th>
                  <th className="px-4 py-2 border border-blue-600">Ampere (R940)</th>
                  <th className="px-4 py-2 border border-blue-600">Maxwell (R940)</th>
                  <th className="px-4 py-2 border border-blue-600">Darcy (R970power)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["CPU", "2× Xeon E5-2640 v3 (8c/16t)", "2× Xeon E5-2660 v3 (10c/20t)", "2× Xeon Gold 6240 (18c/36t)"],
                  ["Total hilos", "32", "40", "72"],
                  ["Placa base", "D3358-A1", "D3358-A1", "D3488-A2"],
                  ["RAM instalada", "96 GB", "96 GB", "192 GB"],
                  ["Ranuras DIMM", "16", "16", "16"],
                  ["Ranuras ocupadas", "6", "6", "12"],
                  ["Máx. RAM soportada (BIOS)", "2×512 GB = 1 TB", "4×256 GB = 1 TB", "2×4608 GB = 9 TB"],
                  ["RAM compatible", "DDR4 ECC REG", "DDR4 ECC REG", "RDIMM, LRDIMM, 3DS, Optane"],
                  ["Velocidad RAM", "2133 MT/s (configurada a 1866)", "2133 MT/s", "2933 MT/s"],
                  ["Año de la plataforma", "2014", "2014", "2019"],
                ].map(([feature, ampere, maxwell, darcy], idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-blue-100" : "bg-blue-50"}
                  >
                    <td className="px-4 py-2 border border-blue-300 font-semibold">{feature}</td>
                    <td className="px-4 py-2 border border-blue-300">{ampere}</td>
                    <td className="px-4 py-2 border border-blue-300">{maxwell}</td>
                    <td className="px-4 py-2 border border-blue-300">{darcy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      );
    default:
      return <p>Section not found.</p>;
  }
}

