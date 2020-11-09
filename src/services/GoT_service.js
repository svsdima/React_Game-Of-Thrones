/* Работаем с API of Ice and Fire https://anapioficeandfire.com */
/* База данных на основе Игры Престолов */
class GotService {

    constructor() {
        /* Нижнее подчёркивание - знак для других разработчиков, что здесь статичные данные и  ничего менять нельзя вообще */
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    /* Получаем список персонажей (1 страница - 10 персонажей, pageSize устанавливает кол-во персонажей на странице ) */
    getAllCharacters() {
        return this.getResource('/characters?page=5&pageSize=10');
    }
    /* Получаем персонажа по id */
    getCharacter(id) {
        return this.getResource(`/characters/${id}`);
    }
}

const got = new GotService();

got.getAllCharacters()
    /* В res получаю массив с данными, дальше в консоль вывожу имя каждого элемента, который буду перебирать в forEach */
    .then(res => {
        res.forEach(item => console.log(item.name));

    });

got.getCharacter(130)
    .then(res => console.log(res));