const shops = [
    { "id": "1", "order": "1", "name": "ГУМ", "address": "Минск, пр. Независимости, 21", "workingHours": "9:00 - 21:00" },
    { "id": "2", "order": "2", "name": "ЦУМ", "address": "Минск, пр. Независимости, 54", "workingHours": "9:00 - 21:00" },
    { "id": "3", "order": "3", "name": "Торгово-развлекательный центр Galileo", "address": "Минск, ул.Бобруйская, 6", "workingHours": "7:00 - 23:00" },
    { "id": "4", "order": "4", "name": "Торгово-развлекательный центр Dana Mall", "address": "Минск, ул. Петра Мстиславца, 11", "workingHours": "9:00 - 23:00" },
    { "id": "5", "order": "5", "name": "Торгово-развлекательный центр Galleria", "address": "Минск, пр. Победителей, 9", "workingHours": "9:00 - 23:00" },
    { "id": "6", "order": "6", "name": "Торгово-развлекательный центр Arena City", "address": "Минск, пр. Победителей, 84", "workingHours": "10:00 - 22:00" },
    { "id": "7", "order": "7", "name": "Торговый центр «Замок»", "address": "Минск, пр. Победителей, 56", "workingHours": "9:00 - 22:00" }
];

var products = [
    { "id": 1, "name": "Мягкая игрушка FANCY Кот Беляш", "description": "Кот-кругляш, кот-милаш наш кот Беляш! Эта чудная мягкая игрушка от белорусского бренда игрушек FANCY станет крутым презентом вашему ребенку, или даже взрослому, ведь без умиления смотреть на кота Беляша просто невозможно, а еще приятнее - его обнимать! Мягкая игрушка Кот Беляш имеет округлую форму туловища, игривые глазки и милую мордашку. Шерсть питомца выполнена в белом цвете, очень приятна на ощупь, благодаря чему игрушка идеально подходит для обнимашек, а необычная форма котика подойдет для того, чтобы устроить с ним фотосессию или украсить детскую комнату.", "shops": [1, 2, 3, 6] },
    { "id": 2, "name": "Арбуз", "description": "Это источник необходимых аминокислот, антиоксидантов, витаминов и минералов. В нём мало калорий и жиров, зато есть клетчатка. Эти ягоды уже давно используются в косметологии, а сейчас их свойства активно изучаются медиками. При употреблении умеренных порций арбуз способствует поддержанию нормального функционирования сердечно-сосудистой и пищеварительной систем, также он вносит свой вклад в антиоксидантную защиту организма и помогает предотвратить развитие многих хронических заболеваний.", "shops": [1, 2, 3, 6] },
    { "id": 3, "name": "Виноград", "description": "Уже в древние времена виноград и его производные ценили не только за вкусовые качества, но и за их лечебные свойства. Современная научная медицина подтверждает, что в ягодах содержится большое количество антиоксидантов, которые защищают организм от хронических заболеваний сердечно-сосудистой и нервной систем, а также способствуют борьбе со свободными радикалами. Даже высокое содержание сахара не портит ягоду, поскольку в ней также есть вещества, улучшающие усваивание глюкозы.", "shops": [2, 4, 5, 7] },
    { "id": 4, "name": "Курица", "description": "Первые куры, появившиеся в царской России, именовались простые или русские. Петухи имели хорошо развитый красный гребень и такие же сережки по бокам головы, золотистое оперение на шее, темно-красные или ржаво-красные перья, огненную окраску задней части спины с металлически-зеленым отливом больших серповидных косиц. Курица имела небольшой гребень и имела скромное куропатчатое оперение буроватого тона с неясным рисунком на спине и красноватым рисунком на шее. Сейчас куры - одни из самых распорстраненных птиц домашнего хозяйства.", "shops": [2, 4, 6, 7] },
    { "id": 5, "name": "Баранина", "description": "Баранина - мясо овец, баранов. Наиболее ценным является мясо молодых (до 18 месяцев) кастрированных баранов или овец, непригодных для разведения. Вкусно также мясо хорошо откормленных овец, не старше 3 лет. Оно отличается светло-красным оттенком, жир упругий и белый. У мяса старых или плохо откормленных овец - темно-красный оттенок, жир желтый. Это мясо жилистое, и поэтому его лучше всего употреблять в виде фарша. Излюбленное мясо народов Востока.", "shops": [4, 7] },
    { "id": 6, "name": "Ветчина", "description": "Упоминания о ветчине, которая использовалась в приготовлении множества блюд, встречаются в китайских текстах, предшествующих Империи Сун (X-XIII вв.) Несколько типов ветчины были описаны во время Династии Цин (XVII-XX вв.), где она использовалась, кроме всего прочего, для приготовлении так называемых азиатских супов. Ветчина - это просоленый и прокопченый свиной окорок, задняя или передняя лопатка; коптят и другие части, напр. ребра; бывает также ветчина медвежья, оленья и прочее.", "shops": [1, 2, 3, 6] },
    { "id": 7, "name": "Мягкая игрушка FANCY Медведь Мика", "description": "Мягкая игрушка Fancy Медведь Мика выполнена в виде очаровательного мишки. Удивительно мягкая игрушка принесет радость и подарит своему обладателю мгновения нежных объятий и приятных воспоминаний. На Новый год и День влюбленных, на 8 марта и День рождения плюшевый мишка будет прекрасным выбором для подарка для вашей девушки или для ребенка.", "shops": [1, 4] },
    { "id": 8, "name": "Чистящее средство для ковров и текстиля VANISH Gold", "description": "Vanish Gold Антибактериальный для ручной чистки: удаляет в 5 раз больше грязи по сравнению с уборкой пылесосом. Устраняет неприятные запахи. Экстра мягкость. Экстра свежесть. Удаляет в три раза больше шерсти домашних животных.", "shops": [5] },
    { "id": 9, "name": "Очиститель-спрей для ковров и обивки HG", "description": "Средство HG разработано специально для очистки всех типов ковров и тканевой обивки. Быстро и легко справляется со сложными загрязнениями. Оставляет после обработки защитный слой, который не позволяет загрнязнениям въедаться в структуру ковра или обивки и препятствует накоплению пыли.", "shops": [1, 2, 3, 6] },
    { "id": 10, "name": "Универсальный моющий порошок для уборки дома MR PROPER", "description": "Mr. Proper Универсал — универсальное порошковое средство с отбеливателем для уборки дома. Средство отмывает полы и стены за короткое время без особых усилий. Оно эффективно удаляет загрязнения, не оставляет разводов и главное — его не нужно смывать.", "shops": [1] },
    { "id": 11, "name": "Кофта", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [5] },
    { "id": 12, "name": "Куртка", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [3] },
    { "id": 13, "name": "Джинсы", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [1, 4] },
    { "id": 14, "name": "Брюки", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [4] },
    { "id": 15, "name": "Плащ", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [2, 4, 5, 7] },
    { "id": 16, "name": "Шляпа", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [4] },
    { "id": 17, "name": "Зонтик", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [2, 4, 5, 7] },
    { "id": 18, "name": "Лампа", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [5] },
    { "id": 19, "name": "Стул", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [1, 2, 3, 6] },
    { "id": 20, "name": "Майка", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [6] },
    { "id": 21, "name": "Джемпер", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [6] },
    { "id": 22, "name": "Телефон", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [1, 4] },
    { "id": 23, "name": "Стакан", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [3] },
    { "id": 24, "name": "Сумка", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [1, 2, 3, 6] },
    { "id": 25, "name": "Рюкзак", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [1, 2, 3, 6] },
    { "id": 26, "name": "Лак для волос", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [1] },
    { "id": 27, "name": "Туфли", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [2, 3] },
    { "id": 28, "name": "Кроссовки", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [2] },
    { "id": 29, "name": "Телевизор", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [2] },
    { "id": 31, "name": "Коньяк", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [1, 4] },
    { "id": 32, "name": "Вино", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [5] },
    { "id": 33, "name": "Виски", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [1, 2, 3, 6] },
    { "id": 34, "name": "Вода", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [1, 4] },
    { "id": 35, "name": "Пиво", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info.", "shops": [2, 3] },
    { "id": 36, "name": "Портвейн", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [7] },
    { "id": 37, "name": "Перчатки", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [1, 2, 3, 6] },
    { "id": 38, "name": "Зарядное устройство", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [2, 4, 5, 7] },
    { "id": 39, "name": "Вентилятор", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [1] },
    { "id": 40, "name": "Карандаш", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info.", "shops": [2, 3] },
    { "id": 41, "name": "Ручка", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [2, 4, 5, 7] },
    { "id": 42, "name": "Бумага", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [1, 4] },
    { "id": 43, "name": "Краска", "description": "Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. Info. ", "shops": [5] }
];

const navbar = document.querySelector('.navbar-list');

// Создаем список магазинов 

const setShope = (e) => {
        let li = document.createElement('li');
        li.classList.add('navbar-item');
        let address = document.createElement('small');
        address.classList.add('address');
        let timeWork = document.createElement('small');
        timeWork.classList.add('timework');
        address.textContent = `Адрес: ${e.address}`;
        timeWork.textContent = `Режим работы: ${e.workingHours}`;
        let id = document.createElement('span');
        id.classList.add('id');
        let shopeName = document.createElement('span');
        shopeName.classList.add('shope-name')
        id.classList.add('order');
        id.textContent = `${e.order}.`;
        shopeName.textContent = `${e.name}`;
        li.prepend(id);
        li.append(shopeName)
        li.append(address);
        li.append(timeWork);
        navbar.append(li);
        let button = document.createElement('button');
        button.classList.add('button-list-items');
        button.textContent = 'Список товаров';
        button.id = e.id;
        li.append(button);
}
shops.forEach(e => {
    setShope(e);
})

// Добавляем кнопку Добамить магазин и Редактировать
const blockButton = document.createElement('div');
const changeShopeButton = document.createElement('button');
const addShopeButton = document.createElement('button');
blockButton.classList.add('block-button');
changeShopeButton.classList.add('change-shope-button');
changeShopeButton.textContent = 'Редактировать';
addShopeButton.classList.add('add-scope-button');
addShopeButton.textContent = 'Добавить магазин';
blockButton.append(addShopeButton, changeShopeButton);
navbar.after(blockButton);



// Перебираем все элементы списка и присваиваем значение true
const dragg = () => {
    const navbarItem = document.querySelectorAll('.navbar-item');
    for (item of navbarItem) {
        item.draggable = true;
    }
}
dragg();

navbar.addEventListener(`dragstart`, (e) => {
    e.target.classList.add(`selected`);
})
  
navbar.addEventListener(`dragend`, (evt) => {
    evt.target.classList.remove(`selected`);
});

// Перемещение элемента
navbar.addEventListener(`dragover`, (e) => {
    e.preventDefault();
    const activeElement = navbar.querySelector(`.selected`);
    const currentElement = e.target;
    const isMoveable = activeElement !== currentElement && currentElement.classList.contains(`navbar-item`);
    if (!isMoveable) {
      return;
    }
    const nextElement = (currentElement === activeElement.nextElementSibling) ?
        currentElement.nextElementSibling :
        currentElement;
    navbar.insertBefore(activeElement, nextElement);
    changeOrder();    
});

// Изменение порядкового номера
const changeOrder = () => {
    const items = document.querySelectorAll('.navbar-item');
    const orders = document.querySelectorAll('.order');
    const id = document.querySelectorAll('.button-list-items');
    for (let i = 0; i < items.length; i++) {
        if (id[i].id !== i+1) {
            items[i].order = i+1;
            shops[id[i].id - 1].order = i + 1;
            orders[i].textContent =`${items[i].order}. `;
        } 
        
    }
    for (let i = 0; i < items.length; i++) {
        shops[id[i].id - 1].order = i + 1;
    }
}


// Создаем модальное окно
const createDomNode = (element, ...classes) => {
    const node = document.createElement(element);
    node.classList.add(...classes);
    return node
};

const overlay = createDomNode('div', 'overlay', 'overlay_modal');
const modal = createDomNode('div', 'modal', 'tools-modal');
const modalContent = createDomNode('div', 'modal__content');
const modalCloseBtn = createDomNode('span', 'modal__close-icon');
modalCloseBtn.innerHTML = '<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z" fill="#2F281E"/></svg>'

const setContent = (e) => {
        const tbl = document.createElement('table');
        const tblBody = document.createElement('tbody');
        const el = e.currentTarget.id;
        products.forEach(e => {
            for (i of e.shops) {
                if (i === +el) {
                    const row = document.createElement('tr');
                    for (let k = 0; k < 2; k++) {
                        const td = document.createElement('td');
                        if (k == 1) {
                            td.textContent = e.description;
                            row.appendChild(td);
                        } else {
                            td.textContent = e.name;
                            row.appendChild(td);
                        }
                        }
                        tblBody.appendChild(row);
                    tbl.appendChild(tblBody);
                }
            }
        })
        modalContent.innerHTML = '';
        modalContent.appendChild(tbl);
    
}

// Создаем форму добавления магазина
const setContentAddShope = () => {
    const form = document.createElement('form');
    const shopeName = setInput('название магазина');
    const shopeAddress = setInput('адрес');
    const shopeTimeWork = setInput('режим работы');
    const addButton = document.createElement('button');
    addButton.classList.add('add-button');
    addButton.textContent = 'Добавить';
    modalContent.innerHTML = '';
    form.append(shopeName, shopeAddress, shopeTimeWork, addButton);
    modalContent.append(form);
    addButton.addEventListener('click', addShope); 
}

let numLabel = 1;
const setInput = (elem, e = 'string') => {
    const div = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    div.classList.add('add-list');
    input.id = 'text' + numLabel;
    input.name = 'text' + numLabel;
    input.type = 'text';
    input.required = true;
    if (e == 'string') {
        input.placeholder = elem;
        label.textContent = `Введите ${elem}`;
    } else {
        input.value = elem;
        label.textContent = elem;
    }
    input.classList.add(`text`);
    label.htmlFor = 'text' + numLabel;
    numLabel++;
    div.append(label, input);
    return div;
}

const appendModalElements = () => {
    modal.append(modalCloseBtn);
    modal.append(modalContent);
    overlay.append(modal);
}

const openModal = (e) => {
    setContent(e);
    appendModalElements();
    document.body.append(overlay);
}

const openAddShope = () => {
    setContentAddShope();
    appendModalElements();
    modal.classList.add('add');
    document.body.append(overlay);
}

const closeModal = (e) => {
    let classes = e.target.classList;
    if(classes.contains('overlay') || classes.contains('modal__close-icon')) {
        document.querySelector('.overlay').remove();
    }
}

const addShope = (e) => {
    e.preventDefault();
    const inp = document.querySelectorAll('.text');
    if (inp[0].value !== '' && inp[1].value !== '' && inp[2].value !== ''){
        shops.push({
            "id": shops.length + 1, "order": shops.length + 1, "name": inp[0].value, "address": inp[1].value, "workingHours": inp[2].value
        })
        setShope(shops[shops.length-1]);
        dragg();
        openListItems();
        document.querySelector('.overlay').remove();
    } else {
        const err = document.createElement('span');
        err.classList.add('error');
        err.textContent = 'Необходимо заполните все поля ввода'
        if (!modalContent.querySelector('.error')){
            modalContent.append(err);
        }
    }
    
}

overlay.addEventListener('click', closeModal);

const openListItems = () => {
    document.querySelectorAll('.button-list-items').forEach(e => {
        e.addEventListener('click', openModal)
    })
}

openListItems();

addShopeButton.addEventListener('click', openAddShope);

// Создадим форму редактировать магазин

let num = 0;
const setContentChangeShope = (e) => {
    const id = setInput('порядковый номер');
    modalContent.innerHTML = '';
    modalContent.append(id);
    id.querySelector('.text').addEventListener('change', setChangeShope);
}

const setChangeShope = (e) => {
    e.preventDefault()
    const id = document.querySelector('.text').value;
    num = id;
    shops.forEach(e => {
        if (e.order === +id) {
            const form = document.createElement('form');
            const shopeName = setInput(e.name, e);
            const shopeAddress = setInput(e.address, e);
            const shopeTimeWork = setInput(e.workingHours, e);
            const changeButton = document.createElement('button');
            changeButton.classList.add('add-button', 'change-button');
            changeButton.textContent = 'Изменить';
            modalContent.innerHTML = '';
            form.innerHTML = '';
            form.append(shopeName, shopeAddress, shopeTimeWork, changeButton);
            modalContent.append(form);
            changeButton.addEventListener('click', changeShope);
        }
    })
    
}


const openChangeShope = () => {
    setContentChangeShope();
    appendModalElements();
    modal.classList.add('add');
    document.body.append(overlay);
}

const changeShope = (e) => {
    e.preventDefault();
    const inp = document.querySelectorAll('.text');
    if (inp[0].value !== '' && inp[1].value !== '' && inp[2].value !== ''){
        shops.forEach(e => {
            if (e.order === +num) {
                e.name = inp[0].value;
                e.address = inp[1].value;
                e.workingHours = inp[2].value;
                document.querySelectorAll('.shope-name')[num - 1].textContent = e.name;
                document.querySelectorAll('.address')[num - 1].textContent = `Адрес: ${e.address}`;
                document.querySelectorAll('.timework')[num - 1].textContent = `Режим работы: ${e.workingHours}`;
                document.querySelector('.overlay').remove();
                console.log(shops)
            }
        })
    } else {
        const err = document.createElement('span');
        err.classList.add('error');
        err.textContent = 'Поле не может быть пустым'
        if (!modalContent.querySelector('.error')){
            modalContent.append(err);
        }
    }
}

changeShopeButton.addEventListener('click', openChangeShope);