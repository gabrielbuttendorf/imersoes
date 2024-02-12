export function NoteCard() {
  return(
    <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 transition duration-150 ease-in-out'>
      <span className='text-sm font-medium text-slate-300'>
        Há 2 dias
      </span>
      <p className='text-sm leading-6 text-slate-400'>
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>

      <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/55 to-black/0 pointer-events-none'/>
    </div>
  )
}