const Calendar = ({ data }: any) => {
  return (
    <div className="min-w-[650px] bg-secondary rounded-xl overflow-hidden">
      <div className="grid grid-cols-7 bg-primary">
        <div className="py-5 text-center font-extrabold italic text-white uppercase text-xl border-r border-white/30">Dom</div>
        <div className="py-5 text-center font-extrabold italic text-white uppercase text-xl border-r border-white/30">Seg</div>
        <div className="py-5 text-center font-extrabold italic text-white uppercase text-xl border-r border-white/30">Ter</div>
        <div className="py-5 text-center font-extrabold italic text-white uppercase text-xl border-r border-white/30">Qua</div>
        <div className="py-5 text-center font-extrabold italic text-white uppercase text-xl border-r border-white/30">Qui</div>
        <div className="py-5 text-center font-extrabold italic text-white uppercase text-xl border-r border-white/30">Sex</div>
        <div className="py-5 text-center font-extrabold italic text-white uppercase text-xl border-r border-white/30">Sáb</div>
      </div>

      <div className="grid grid-cols-7">
        {data.map((row: any, index: number) => row.map((item: any, index: number) => (
          <div key={index} className="py-3 px-2 text-center font-bold italic text-white uppercase border-r border-b border-white/20 flex flex-col justify-center">
            <h5 className="text-lg">{item.title}</h5>
            <h6 className="text-sm text-white/50 font-normal leading-none">{item.description}</h6>
          </div>  
        )))}
      </div>
    </div>
  )
}

export default Calendar
