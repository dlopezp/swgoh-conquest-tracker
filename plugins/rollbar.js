import Vue from 'vue'
import Rollbar from 'rollbar'

Vue.prototype.$rollbar = new Rollbar({
  accessToken: '93890c05fb024441b401331d24e79183',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

Vue.config.errorHandler = (err, vm, info) => {
  vm.$rollbar.error(err);
  throw err;
}
