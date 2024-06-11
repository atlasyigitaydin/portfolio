import moment from 'moment'

export {
  moment,
}

export const copyText = async (text: string) => {
  if (text)
    await navigator.clipboard.writeText(text)
}

export const leftText = (text: string) => {
  if (text)
    return text.length > 8 ? `${text.slice(0, 8)}...` : text
  return '-'
}

export const ConfirmOpt = {
  icon: 'pi pi-info-circle',
  acceptClass: 'p-button-danger',
  header: 'Silme İşlemi',
  acceptLabel: 'Sil',
  rejectLabel: 'İptal',
  acceptIcon: 'pi pi-trash',
}
