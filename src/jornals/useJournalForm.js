import { useState } from 'react'

export default function useJournalForm(addEntry) {
  const [formIsVisible, setFormIsVisible] = useState(false)

  const showForm = () => setFormIsVisible(true)

  const onSave = (entry) => {
    addEntry(entry)
    setFormIsVisible(false)
  }

  const onCancel = () => setFormIsVisible(false)

  return { formIsVisible, showForm, onSave, onCancel }
}
