$(function(){

  function buildHTML(message){
    if(message.image) {
      var html = `
        <div class="message" data-message-id=${message.id}>
          <ul class="post-menu">
            <li class="post-menu__list">
              <ul class="post-detail">
                <li class="post-detail__user-name">
                  ${message.user_name}
                </li>
                <li class="post-detail__post-date">
                  ${message.created_at}
                </li>
              </ul>
            </li>
            <p class="post-content">
              ${message.text}
            </p>
            <img border="0" src="${message.image}" class="lower-message__image">
          </ul>
        </div>
      `;
    }else {
      var html = `
        <div class="message" data-message-id=${message.id}>
          <ul class="post-menu">
            <li class="post-menu__list">
              <ul class="post-detail">
                <li class="post-detail__user-name">
                  ${message.user_name}
                </li>
                <li class="post-detail__post-date">
                  ${message.created_at}
                </li>
              </ul>
            </li>
            <p class="post-content">
              ${message.text}
            </p>
          </ul>
        </div>
      `;
    };
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
        url:            url,
        type:           "POST",
        data:           formData,
        dataType:       'json',
        processData:    false,
        contentType:    false
    })
    .done (function(data){
      var html = buildHTML(data);
      $('.chat-main__message-list').append(html);
      $('form')[0].reset();
      $('.submit-btn').prop('disabled', false);
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
    })
    .fail (function(){
      alert("メッセージ送信に失敗しました");
    });
  });

  var reloadMessages = function(){
    var last_message_id = $('.message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: "get",
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages){
      if(messages.length !== 0){
        var insertHtml = '';
        $.each(messages, function(index, message){
          insertHtml += buildHTML(message)
        });
        $('.chat-main__message-list').append(insertHtml);
        $('.chat-main__message-list').animate({scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      }
    })
    .fail(function(){
        alert("失敗");
    });
  };

  if(document.location.href.match(/\/groups\/\d+\/messages/)){
    setInterval(reloadMessages, 7000);
  }
  
});

