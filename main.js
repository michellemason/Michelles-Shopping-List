$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const inputItem = $('#shopping-list-entry').val();
    let test = createNewItem(inputItem);
    $('.shopping-list').append(createNewItem(inputItem));
});

$('ul').on('click', '.shopping-item-delete', function(event) {
    $(this).parents('li').remove();
});

$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
});

function createNewItem(inputString) {
    let liSpan = '<li><span class="shopping-item">' + inputString + '</span>';
    let liDiv = '<div class="shopping-item-controls">';
    let toggleButton = ' <button class="shopping-item-toggle">';
    let togButSpan = '<span class="button-label">check</span></button>';
    let deleteBut = '<button class="shopping-item-delete">';
    let delButSpan = ' <span class="button-label">delete</span></button></div></li>';
    let allElements = liSpan + liDiv + toggleButton + togButSpan + deleteBut + delButSpan;
    return allElements;
}