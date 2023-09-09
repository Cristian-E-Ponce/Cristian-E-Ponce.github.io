var sortable = $('.sortable');
sortable.sortable({
  axis: 'y',
  cursor: 'move',
  cursorAt: {top: 10},
  handle: '.toggle',
  // helper: 'clone',
  opacity: '0.5',
  // placeholder: 'sortable-placeholder',
  change: function(event, ui) {
    var item = $('li.ui-sortable-placeholder', sortable),
        num;
    // console.log('change');
    // console.log(ui);
    // console.log($(this));
    // console.log($('.num', item).text());
    $('li:not(.ui-sortable-helper)', sortable).each(function(index, item) {
      // console.log(item);
      // console.log($('.num', item));
      // $('.num', item).text(index + 1);
      if ($('.num', item).length != 0) {
        // console.log(item);
        $('.num', item).text(index + 1);
      } else {
        console.log(index +1);
        $(".ui-sortable-helper .num").text(index + 1);
      }
    });
    // $(".num", ui.item).text($('.num', item).text());
  }
})
.disableSelection();

$('input', sortable).bind('mousedown', function(evt) {
  evt.stopPropagation();
});
$('.remove', sortable).bind({
  mousedown: function(evt) {
    evt.stopPropagation();
  },
  click: function(evt) {
    var currentRow = $(this).parents('li'),
        nextAllRow = currentRow.nextAll();
    nextAllRow.each(function(index, item) {
      $('.num', item).text($('.num', item).text() - 1);
    });
    currentRow.remove();
  }
});
// console.log(window.location);