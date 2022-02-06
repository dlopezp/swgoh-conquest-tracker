export default async function ({ $content, store }, inject) {
  // ToDo: Parametrizar
  const currentConquestId = 'CONQUEST_13'
  const conquest = await $content(currentConquestId).fetch()
  store.commit('SET_CONQUEST', { conquest })
}