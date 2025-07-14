// import { useState } from "react";
// import { BookOpen, ChevronRight, ChevronDown } from "lucide-react";
//
// type Section = {
//   id: string;
//   label: string;
//   children?: Section[];
// };
//
// type Props = {
//   sections: Section[];
//   active: string;
//   onNavigate: (id: string) => void;
// };
//
// export default function Sidebar({ sections, active, onNavigate }: Props) {
//   const [open, setOpen] = useState<string | null>(null);
//
//   return (
//     <aside className="sticky top-0 h-screen w-64 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border-r border-gray-300 dark:border-gray-700 shadow-sm overflow-y-auto">
//       <div className="p-6 border-b border-gray-200 dark:border-gray-700">
//         <div className="flex items-center gap-2 text-xl font-semibold text-blue-800 dark:text-blue-300">
//           <BookOpen className="w-6 h-6" />
//           <span>MAGMA-docs</span>
//         </div>
//       </div>
//
//       <nav className="p-4 space-y-1">
//         {sections.map((section) => (
//           <div key={section.id}>
//             <button
//               onClick={() =>
//                 section.children
//                   ? setOpen(open === section.id ? null : section.id)
//                   : onNavigate(section.id)
//               }
//               className={`flex items-center w-full text-left px-3 py-2 rounded-md text-sm font-medium transition ${
//                 active === section.id
//                   ? "bg-blue-100 dark:bg-blue-800/40 text-blue-800 dark:text-blue-100"
//                   : "hover:bg-gray-100 dark:hover:bg-gray-800"
//               }`}
//             >
//               {section.children ? (
//                 open === section.id ? (
//                   <ChevronDown className="w-4 h-4 mr-2" />
//                 ) : (
//                   <ChevronRight className="w-4 h-4 mr-2" />
//                 )
//               ) : (
//                 <span className="w-4 h-4 mr-2" />
//               )}
//               {section.label}
//             </button>
//
//             {section.children && open === section.id && (
//               <div className="ml-6 mt-1 space-y-1">
//                 {section.children.map((child) => (
//                   <button
//                     key={child.id}
//                     onClick={() => onNavigate(child.id)}
//                     className={`block w-full text-left px-3 py-1 rounded-md text-sm ${
//                       active === child.id
//                         ? "bg-blue-100 dark:bg-blue-800/40 text-blue-800 dark:text-blue-100"
//                         : "hover:bg-gray-100 dark:hover:bg-gray-800"
//                     }`}
//                   >
//                     {child.label}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </nav>
//     </aside>
//   );
// }




import { BookOpen, CircleSmall } from "lucide-react";

type Props = {
  sections: { id: string; label: string }[];
  active: string;
  onNavigate: (id: string) => void;
};

export default function Sidebar({ sections, active, onNavigate }: Props) {
  return (
    <aside className="sticky top-0 h-screen w-64 bg-gray-900 border-r border-gray-200 shadow-sm overflow-y-auto">

      <div className="p-6 border-b border-gray-200 bg-red-700">
        <div className="flex flex-col items-center gap-2 text-xl font-semibold text-amber-50 my-10">
          <div className="flex gap-1 items-center">
            <BookOpen className="w-6 h-6" />
            <span>Docs</span>
          </div>
          <span className="text-center text-2xl font-bold">MAGMA</span>
        </div>
      </div>



      <nav className="p-4 space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onNavigate(section.id)}
            className={`flex items-center w-full text-left px-3 py-2 rounded-md text-sm font-medium transition ${active === section.id
                ? "bg-rose-100 text-red-600"
                : "text-gray-200 hover:bg-orange-700"
              }`}
          >
            <CircleSmall className="w-4 h-4 mr-2 opacity-60" />
            {section.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

