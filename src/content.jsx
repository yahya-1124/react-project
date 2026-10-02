import Student from "./students.jsx";
import Studentclick from "./teste.jsx"
import { useState } from "react";

export default function Content() {
  const [nom , setNom] =useState("")
  const [id , setId] =useState("")
  const [note , setNote] =useState("")
  const [etudiant,SetEtudiant]   =
  useState( [{ id: 1 ,nom: " Yahya", note: 17 },
  {  id: 2 , nom: "Siham", note: 16 },
  {  id: 3 , nom: "Zakaria", note: 7 },
  {  id: 4 , nom: "Omar", note: 9 },
  {  id: 5 , nom: "Adnan", note: 10 },
  ]) 
   function ajouter(){
    SetEtudiant([...etudiant, { id: id,nom: nom, note: note }]);
  }
  function modifier(){
    const newObj = { id: id,nom: nom, note: note }
    const updateEtudiant = etudiant.map(function(item){
      if (item.id == id){
        return newObj
      }
      return item
    })
    SetEtudiant(updateEtudiant)
  }
  function supprimer(){
    const delEtudiant = etudiant.filter((item) => {
       return item.id !=id
       
    })
    SetEtudiant(delEtudiant)
    
}
  function remplire(data){
    setId(data.id)
    setNom(data.nom)
    setNote(data.note)
  }

  return (
    <main className="flex-1 p-8">
      <h2 className="text-3xl font-bold">
        Liste des étudiants
      </h2>
      <div className="flex flex-col">
      <input
       className="w-70 m-2 p-3 border rounded-lg"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID"
      />
      
      <input
        className="w-70 m-2 p-3 border rounded-lg"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Nom"
      />
      

      <input
      className="w-70 m-2 p-3 border rounded-lg"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Note"
      />
      

      <button 
      className="w-80 bg-blue-600 text-white p-3 rounded-lg hover:bg-green-500 m-2"
       onClick={ajouter}>
        Ajouter
      </button>
     
      <button 
      className="w-80 bg-blue-600 text-white p-3 rounded-lg hover:bg-yellow-500 m-2"
       onClick={modifier}>
        Modifier
      </button>

      <button 
      className="w-80 bg-blue-600 text-white p-3 rounded-lg  hover:bg-red-500 m-2 "
       onClick={supprimer}>
        Supprimer
      </button>
    </div>
      <Studentclick />
      <button onClick={()=>console.log("hello !!!")} className="bg-blue-500 text-white p-4 border rounded m-2 hover:bg-gray-500">Tester Test </button>
      

      <div  className="mt-6 grid grid-cols-3 gap-5" >
        {etudiant.map(function (item) {
          return (
                <div onClick={()=>remplire(item)} className={`rounde-xl  p-5 shadow ${item.note < 10 ? "text-red-400 rounde-xl  p-5 shadow" : "text-green-400 rounde-xl bg-white p-5 shadow"} hover:bg-gray-600`}>
      <h3 className="text-lg font-bold">
        {item.nom}
      </h3>

    <p
  className="mt-2 text-slate-500"
>
  Note : {item.note} / 20
</p>
     
    </div>
  );
          
})}
      </div>

      
    </main>
  
    

  );
}

