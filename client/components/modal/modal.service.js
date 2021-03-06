'use strict';

angular.module('endApp')
  .factory('Modal', function ($rootScope, $modal) {
    /**
     * Opens a modal
     * @param  {Object} scope      - an object to be merged with modal's scope
     * @param  {String} modalClass - (optional) class(es) to be applied to the modal
     * @return {Object}            - the instance $modal.open() returns
     */
    function openModal(scope, modalClass, templateUrl) {
      var modalScope = $rootScope.$new();
      scope = scope || {};
      modalClass = modalClass || 'modal-default';

      angular.extend(modalScope, scope);

      return $modal.open({
        templateUrl: templateUrl,
        windowClass: modalClass,
        scope: modalScope
      });
    }

    // Public API here
    return {

      /* 申请接入 */
      confirm: {
        openJoin: function(e) {
          e = e || angular.noop;

          return function(ok, data) {
            data = data || {};
            var args = Array.prototype.slice.call(arguments),
                name = args.shift(),
                thisModal;
            thisModal = openModal({
              modal: {
                dismissable: true,
                title: '接入应用',
                //html: '<p>Are you sure you want to delete <strong>' + name + '</strong> ?</p>',
                buttons: [{
                  classes: 'btn-primary',
                  text: '确定',
                  click: function(data) {
                    ok(data, cb);
                    function cb() {
                      thisModal.close();
                    }
                  }
                }, {
                  classes: 'btn-default',
                  text: '取消',
                  click: function(e) {
                    thisModal.dismiss(e);
                  }
                }],
                data: {
                  name: data.name || '',
                  introduction: data.introduction || '',
                  url: data.url || '',
                  cover: data.cover || '',
                  kind: data.kind || 'other',
                  developer: data.developer || '未知',
                  popular: false,
                  keyCmd: [],
                  scope: data.scope || 'public',
                  createdAt: new Date()
                }
              }
            }, 'modal-primary', 'components/modal/modal.open.html');

            thisModal.result.then(function(event) {
              e.apply(event, args);
            });
          };
        },

        //  添加app
        appAdd: function(e) {
          e = e || angular.noop;

          return function(ok, data) {
            data = data || {};
            var args = Array.prototype.slice.call(arguments),
              name = args.shift(),
              thisModal;
            thisModal = openModal({
              modal: {
                dismissable: true,
                title: '添加应用',
                //html: '<p>Are you sure you want to delete <strong>' + name + '</strong> ?</p>',
                buttons: [{
                  classes: 'btn-primary',
                  text: '添加',
                  click: function(data) {
                    ok(data, cb);
                    function cb() {
                      thisModal.close(e);
                    }
                  }
                }, {
                  classes: 'btn-default',
                  text: '取消',
                  click: function(e) {
                    thisModal.dismiss(e);
                  }
                }],
                data: {
                  name: data.name || '',
                  introduction: data.introduction || '',
                  url: data.url || '',
                  cover: data.cover || '',
                  kind: data.kind || 'other',
                  developer: data.developer || '未知',
                  popular: false,
                  keyCmd: data.keyCmd || [],
                  createdAt: new Date()
                }
              }
            }, 'modal-primary', 'components/modal/modal.app.add.html');

            thisModal.result.then(function(event) {
              e.apply(event, args);
            });
          };
        },

        //  显示app的详情
        appShowDetail: function(e) {
          e = e || angular.noop;

          return function(ok, data) {
            data = data || {};
            var args = Array.prototype.slice.call(arguments),
              name = args.shift(),
              thisModal;
            thisModal = openModal({
              modal: {
                dismissable: true,
                title: '应用详情',
                //html: '<p>Are you sure you want to delete <strong>' + name + '</strong> ?</p>',
                buttons: [],
                data: {
                  name: data.name || '',
                  introduction: data.introduction || '暂无描述',
                  url: data.url || '',
                  cover: data.cover || '',
                  kind: data.kind || 'other',
                  developer: data.developer || '未知',
                  popular: false,
                  createdAt: new Date()
                }
              }
            }, 'modal-default', 'components/modal/modal.app.detail.html');

            thisModal.result.then(function(event) {
              e.apply(event, args);
            });
          };
        }

      }
    };
  });
