/*
 * Нужно реализовать компонент Buttons с произвольным набором cчетчиков, которые по нажатию увеличивают своё cобственное значение.
 * <button сlass=<<стиль кнопки>> type="button">{значение счетчика}</button>
 * Число кнопок принимает компонент в своих properties (пропсы) как count.
 * Все кроме последней нажатой кнопки (Она должна быть зеленой btn-success) должны быть окрашены в синий (btn-primary).
 * Каждая кнопка отвечает за свой счетчик.
 * Cтарайтесь написать один единственный компонент, без переусложнений.
 *
Кнопки с нулевым значением счетчика:

<button className="btn btn-primary m-1" type="button">0</button>
<button className="btn btn-primary m-1" type="button">0</button>
<button className="btn btn-primary m-1" type="button">0</button>

Кнопки на которые нажимали. Последняя была вторая (btn-primary => btn-success):

<button className="btn btn-primary m-1" type="button">3</button>
<button className="btn btn-success m-1" type="button">1</button>
<button className="btn btn-primary m-1" type="button">2</button>
*/

const Buttons = () => {
  return <div />
};

export default Buttons;
