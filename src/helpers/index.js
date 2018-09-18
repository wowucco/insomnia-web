/**
 * Created by wowucco on 18.09.18.
 */
export let helper = {
  prepareSeconds(seconds) {
    let rest = seconds % 60;
    return rest >= 10 ? rest : '0' + rest;
  },

  timeFromSecToStr: function (seconds) {
    return seconds > 0
      ? Math.floor(seconds/60) + ':' + this.prepareSeconds(seconds)
      : 'unknown';
  }
};