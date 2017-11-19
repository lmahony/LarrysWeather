export default {
  // Functions return fixtures
  getCurrent: () => {
    return {
      ok: true,
      data: require('../Fixtures/currentConditions.json')
    }
  }
}
