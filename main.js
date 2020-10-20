$(function () {
  $('#js-shopping-list-form').submit((evt) => {
    //   Stop page from refreshing
    evt.preventDefault();
    //  Get the value submitted
    let newItem = $('#shopping-list-entry').val();
    // Append value to UL
    $('ul.shopping-list').append(`<li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>
    `);
  });
  //   On click check buttom
  $('ul').on('click', 'button', (event) => {
    const buttonName = $(event.currentTarget).children().text();
    if (buttonName === 'delete') {
      $(event.currentTarget).closest('li').remove();
    } else {
      $(event.currentTarget)
        .parent('div.shopping-item-controls')
        .siblings('span.shopping-item')
        .toggleClass('shopping-item__checked');
    }
  });
});

function buttonHandle(event) {}
