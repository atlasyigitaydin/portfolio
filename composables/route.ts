import { useRouter } from '#app'

export function useNavigation () {
  const r = useRouter()
  return {
    navigateTo (_name: string) {
      r.push({
        name: _name
      })
    },
    replacePath (_name: string) {
      r.replace({
        name: _name
      })
    }
  }
}
