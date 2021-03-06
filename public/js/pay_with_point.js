(function() {
  payWithPoint();
  reserveGame();

  function reserveGame() {
    var payButton = $('a#pay_with_point_wallet');
    payButton.on('click', function() {
        var _this = $(this);
        bootbox.confirm("Are you sure you want to proceed with the reservation!", function(result) {
          if (result) {
          _this
            .attr('disabled', 'disabled')
            .css('background', '#ccc');

            var productId = _this.attr('data-item-id');
            var userPoint = _this.attr('data-item-price');
            var token = _this.attr('data-token');

            var message = $('p#status');

            var route = '/product/'+productId+'/pay_with_point';

        makeAjaxCall(route, {
          'point': userPoint,
          '_token': token
        }).done(function(data) {
          var buyPoint = '/add_amount';

          if (data.message == true) {
            message.html(`<div class="alert alert-success">
                Your Reservation was successful!
                </div>`
              );
            return setTimeout(function() {
              window.location.href = '/en/home';
            }, 2000);
          }
          message.html(`<div class="alert alert-danger">`+data.message+`</div>`);

          return setTimeout(function() {
            //var buyPoint = '/add_amount';
            //var checkoutUrl = '/product/'+productId+'/checkout';
            window.location.href = buyPoint;
          }, 2000);
        }).fail(function(error) {
          console.log(error);
        });
          }
      });
      return false;
    });
  }

  function payWithPoint() {
    var payButton = $('button#pay_with_point_wallet');
    payButton.on('click', function() {
        var _this = $(this);
        bootbox.confirm("Are you sure you want to proceed with the reservation!", function(result) {
          if (result) {
            //return window.location.href = href;
        _this
          .attr('disabled', 'disabled')
          .css('background', '#ccc');

        var productId = _this.attr('data-id');
        var userPoint = _this.attr('data-point');
        var token = _this.attr('data-token');

        var message = $('p#status');

        var route = '/product/'+productId+'/pay_with_point';

        makeAjaxCall(route, {
          'point': userPoint,
          '_token': token
        }).done(function(data) {
          var buyPoint = '/add_amount';

          if (data.message == true) {
            message.html(`<div class="alert alert-success">
                Your Reservation was successful!
                </div>`
              );
            return setTimeout(function() {
              window.location.href = '/en/home';
            }, 2000);
          }
          message.html(`<div class="alert alert-danger">`+data.message+`</div>`);

          return setTimeout(function() {
            //var buyPoint = '/add_amount';
            //var checkoutUrl = '/product/'+productId+'/checkout';
            window.location.href = buyPoint;
          }, 2000);
        }).fail(function(error) {
          console.log(error);
        });
          }
      });
      return false;
    });
  }

  function makeAjaxCall(url, params) {
    return $.ajax({
      url: url,
      type: 'POST',
      data: params
    });
  }
})(jQuery);