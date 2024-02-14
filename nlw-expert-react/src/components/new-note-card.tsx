import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner'

interface NewNoteCardProps {
  onNoteCreated: (content: string) => void
}

export function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
    const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true)
    const [content, setContent] = useState('')

    function handleStartEditor() {
      setShouldShowOnboarding(false)
    }

    function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
      setContent(event.target.value)
      if (event.target.value === '') {
        setShouldShowOnboarding(true)
      }
    }

    function handleSaveNote(event: FormEvent) {
      event.preventDefault()

      onNoteCreated(content)

      setContent('')
      setShouldShowOnboarding(true)
      
      toast.success('Nota criada com sucesso!')
    }

  return (
    <Dialog.Root>
      <Dialog.Trigger className='rounded-md text-left flex flex-col bg-slate-700 p-5 gap-3 outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-1 focus-visible:ring-lime-400 transition duration-150 ease-in-out'>
        <span className='text-sm font-medium text-slate-200'>
          Adicionar nota
        </span>
        <p className='text-sm leading-6 text-slate-400'>
          Grave uma nota em áudio que será convertida para texto automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className='inset-0 fixed bg-black/50'/>
        <Dialog.Content className='fixed rounded-md overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounder-md flex flex-col outline-none'>
          <Dialog.Close className='absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100 transition duration-100 ease-in-out'>
            <X className='size-5'/>
          </Dialog.Close>

          <form onSubmit={handleSaveNote} className='flex-1 flex flex-col'>
            <div className='flex flex-1 flex-col gap-3 p-5'>
              <span className='text-sm font-medium text-slate-300'>
                Adicionar nota
              </span>
              {shouldShowOnboarding ? (
                <p className='text-sm leading-6 text-slate-400'>
                Comece <button className='font-medium text-lime-400 hover:underline'>gravando uma nota</button> em áudio ou se preferir <button onClick={handleStartEditor} className='font-medium text-lime-400 hover:underline'>utilize apenas texto</button>.
              </p>
              ): (
                <textarea 
                  autoFocus
                  onChange={handleContentChanged}
                  className='text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none'
                  value={content}
                />
              )}
            </div>

            <button 
              type="submit"
              className='w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500 transition duration-100 ease-in-out'
            >
              Salvar nota
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}