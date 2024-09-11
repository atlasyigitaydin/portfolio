export const useNavigation = () => {
  const r = useRouter()
  return {
    navigateTo (_name: string) {
      r.push({
        name: _name
      }).catch((err) => {
        console.error(err)
      })
    },
    replacePath (_name: string) {
      r.replace({
        name: _name
      }).catch((err) => {
        console.error(err)
      })
    }
  }
}
