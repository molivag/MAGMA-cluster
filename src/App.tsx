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
      <main className="flex-1 p-10 bg-gray-300 border-l border-blue-500">
        <SectionContent sectionId={activeSection} />
      </main>
    </div>
  );
}

export default App;
