import { useState } from 'react';
import Sidebar from './components/Sidebar';
import SectionContent from './components/SectionContent';

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'systemover', label: 'System Overview' },
  { id: 'login', label: 'Logging In' },
  { id: 'job', label: 'Job Scheduling' },
  { id: 'toolchain', label: 'Toolchain' },
  { id: 'stack', label: 'Cluster Stack' },
  { id: 'metrics', label: 'Metrics and Monitoring' },
  { id: 'scalability', label: 'Scalability' },
];

// const sections = [
//   {
//     id: "getting-started",
//     label: "Getting Started",
//     children: [
//       { id: "introduction", label: "Introduction" },
//       { id: "installation", label: "Installation" },
//     ],
//   },
//   {
//     id: "guide",
//     label: "Guide",
//     children: [
//       { id: "usage", label: "Usage" },
//       { id: "api", label: "API Reference" },
//     ],
//   },
//   { id: "faq", label: "FAQ" },
// ];
//
function App() {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <div className="flex min-h-screen bg-green-50 ">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-300 bg-white">
        <Sidebar
          sections={sections}
          active={activeSection}
          onNavigate={setActiveSection}
        />
      </div>

      {/* Contenido principal */}
      {/* <main className="flex-1 p-10 bg-gray-300 border-l border-blue-500 max-w-6xl"> */}
      {/*   <SectionContent sectionId={activeSection} /> */}
      {/* </main> */}
      {/* <main className="relative flex-1 p-10 max-w-6xl bg-gray-100 border-l border-blue-500"> */}
      {/*   <SectionContent sectionId={activeSection} /> */}
      {/**/}
      {/*   <aside className="absolute top-10 right-[-300px] w-64 bg-white shadow rounded p-4 text-sm border border-gray-200 hidden xl:block"> */}
      {/*     <h4 className="font-semibold mb-2">En esta sección</h4> */}
      {/*     <ul className="list-disc ml-4 text-gray-700 space-y-1"> */}
      {/*       <li><a href="#metricas">Métricas</a></li> */}
      {/*       <li><a href="#hardware">Hardware</a></li> */}
      {/*       <li><a href="#recomendaciones">Recomendaciones</a></li> */}
      {/*     </ul> */}
      {/*   </aside> */}
      {/* </main> */}
      {/**/}




<main className="relative flex-1 p-10 max-w-6xl bg-gray-100 border-l border-blue-500 overflow-hidden">
  <SectionContent sectionId={activeSection} />

  {/* Fondo decorativo a la derecha (solo visible en pantallas grandes) */}
  <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-br from-blue-100 to-white pointer-events-none hidden xl:block -z-10" />
</main>






    </div>
  );
}

export default App;
