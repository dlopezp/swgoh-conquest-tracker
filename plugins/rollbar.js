import Vue from 'vue'
import Rollbar from 'rollbar'

const rollbar = new Rollbar({
  accessToken: '93890c05fb024441b401331d24e79183',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

export default (ctx, inject) => {
  ctx.$rollbar = rollbar
  inject('rollbar', rollbar)
  Vue.rollbar = rollbar
}

Vue.config.errorHandler = (err, vm, info) => {
  vm.$rollbar.error(err);
  throw err;
}
