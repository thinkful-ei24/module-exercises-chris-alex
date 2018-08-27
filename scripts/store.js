// eslint-disable-next-line no-unused-vars
'use strict';
const store = (function() {

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';
  const findById = function(id){
    return store.items.find(function(item){
      return item.id === id;
    });
  };
  const addItem = function(name){
    try {
      Item.validateName(name);
      store.items.push(Item.create(name));
    } catch (error) {
      console.log('Cannot add item: ' + error.message);
        }
  };
  const findAndToggleChecked = function(id){
    const foundItem = this.findById(id);
    foundItem.checked = !foundItem.checked;
  };
  const findAndUpdateName = function(id, newName){
    try {
      Item.validateName(newName);
      const item = this.findById(id);
      item.name = newName;
    } catch (error) {
      console.log('Cannot update name: {error.message');
    }
  };
  const findAndDelete = function(id){
    const item = findById(id);
    let idx = store.items.indexOf(item);
    store.items.splice(idx, 1);
  };
  return {
    items,
    hideCheckedItems,
    searchTerm,
    addItem,
    findById,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };
})();

console.log('test');
