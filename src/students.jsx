
export default function Student(props) {
   
  return (

    <div className={`rounde-xl  p-5 shadow ${props.note < 10 ? "text-red-400 rounde-xl  p-5 shadow" : "text-green-400 rounde-xl bg-white p-5 shadow"}`}>
      <h3 className="text-lg font-bold">
        {props.nom}
      </h3>

    <p
  className="mt-2 text-slate-500"
>
  Note : {props.note} / 20
</p>
     
    </div>
  );
}
"rounde-xl bg-white p-5 shadow"