const addBtn = getDOM('.footer_button');
const input = getDOM('.footer_input');
const items = getDOM('.items');
const deleteBtn = getDOM('.item_delete');

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }

  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = makeDOMwithProperties('li', { className: 'item_row' });
  const item = makeDOMwithProperties('div', { className: 'item' });
  const itemName = makeDOMwithProperties('span', {
    className: 'item_name',
    innerText: text,
  });

  const itemDeleteBtn = makeDOMwithProperties('button', {
    className: 'item_delete',
    innerHTML: `<i class="fas fa-trash-alt"></i>`,
  });

  itemDeleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const itemDivider = makeDOMwithProperties('div', {
    className: 'item_divider',
  });

  appendChildrenList(item, [itemName, itemDeleteBtn]);
  appendChildrenList(itemRow, [item, itemDivider]);

  return itemRow;
}

addBtn.addEventListener('click', onAdd);
input.addEventListener('keydown', (event) => {
  if (event.key == 'Enter') {
    onAdd();
  }
});

function getDOM(target) {
  return document.querySelector(target);
}

const makeDOMwithProperties = (domType, propertyMap) => {
  const dom = document.createElement(domType);
  Object.keys(propertyMap).map((key) => {
    dom[key] = propertyMap[key];
  });
  return dom;
};

const appendChildrenList = (target, childrenList) => {
  if (!Array.isArray(childrenList)) return;
  childrenList.forEach((children) => {
    target.appendChild(children);
  });
};
