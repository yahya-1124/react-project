export default function Aside(){
    return(
        <aside className="min-h-screen w-64 bg-slate-900 p-5 text-white ">
        <h2 className="mb-5 font-bold">
          Menu
        </h2>

        <ul className="space-y-3">
          <li className="hover:bg-gray-600 hover :border rounded p-2  ">Accueil</li>
          <li className="hover:bg-gray-600 hover :border rounded p-2 ">Étudiants</li>
          <li className="hover:bg-gray-600 hover :border rounded p-2 ">Notes</li>
        </ul>
      </aside>
    )
}