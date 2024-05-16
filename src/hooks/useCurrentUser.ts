interface IUseCurrentUser {
  currentUser: string | null
  isLoading: boolean
}

// TODO: доделать хук для проверки
const useCurrentUser = (): IUseCurrentUser => {
  const currentUser = ''
  const isLoading = false
  return { currentUser, isLoading }
}

export default useCurrentUser
