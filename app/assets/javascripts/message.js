$(function(){
  function buildHTML(message){
    if(message.image) {
      var html = `<ul class="post-menu">
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
                  </ul>`;
    }else {
      var html = `<ul class="post-menu">
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
                  </ul>`;
    }
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
      $('.messages').append(html);
      $('form')[0].reset();
      $('.submit-btn').prop('disabled', false);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail (function(){
      alert("メッセージ送信に失敗しました");
    });
  });
});

