export default async function ({ $content, store }) {
  // ToDo: Parametrizar
  // ToDo: sacar del store y meter en un mixin
  const currentConquestId = 'CONQUEST_13'
  const conquest = await $content(currentConquestId).fetch()
  store.commit('SET_CONQUEST', { conquest })
}
