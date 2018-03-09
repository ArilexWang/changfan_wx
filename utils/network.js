var get_no_para = function _get(url, success, fail) {
  wx.request({
    url: url,
    header: {
      'Content-Type': 'application/json'
    },
    success: function (res) {
      success(res);
    },
    fail: function (res) {
      fail(res);
    }
  });
}

var get_with_para = function get_with_para(url, para, success, fail) {
  wx.request({
    url: url,
    data: para,
    header: { 'Content-Type': 'application/json' },
    method: "GET",
    success: function (res) { success(res) },
    fail: function (res) { fail(res) },
    complete: function (res) { },
  })
}


var post = function post(url, para, success, fail) {
  wx.request({
    url: url,
    data: para,
    header: { 'Content-Type': 'application/json' },
    method: "POST",
    success: function (res) { success(res) },
    fail: function (res) { fail(res) },
    complete: function (res) { },
  })
}

module.exports = {
  _get: get_no_para,
  _get_with_para: get_with_para,
  _post: post
}