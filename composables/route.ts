import { useRouter } from '#app'

export function useNavigation () {
  const r = useRouter()
  return {
    navigateTo (name: string) {
      r.push({
        path: name
      })
    },
    replacePath (name: string) {
      r.replace({
        path: name
      })
    }
  }
}
