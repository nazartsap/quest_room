import React from 'react';


export function Desc() {
  return (
    <div className="conteiner_desc">
      <div className="head">Что вас ждет ?</div>
      <div className="chessboard-container">
        <div className="chessboard-cell">
          <img src="/man.jpg" alt="Image 1" />
          <p className='paragraph-style'>Квест «6 чувство» — это игра-ощущение, игра-впечатление, игра-атмосфера. Вам предстоит пройти 5 комнат в полной темноте, чтобы по-новому раскрыть 6 чувств. На протяжении всего игрового времени вы будете получать задания от мастера. Тактильные ощущения, зрение, обоняние, слух, проприоцепция – мы задействуем все органы чувств..</p>
        </div>
        <div className="chessboard-cell large-cell">
          <img src="/rain.jpg" alt="Image 2" />
          <p className='paragraph-style'>Нужно будет разгадывать запахи и предметы, услышать свою интуицию, сыграть на уникальных музыкальных инструментах. Эта игра что-то среднее между квестом, экшн-игрой в реальности, тренингом, фильмом и книгой.</p>
        </div>
        <div className="chessboard-cell">
          <img src="/inst.jpg" alt="Image 3" />
          <p className='paragraph-style'>Мы поможем заглянуть внутрь себя, подумать о своих жизненных приоритетах и получить дозу релакса. (30 мин в темноте заменяет 2 часа крепкого сна) Вы уйдёте от нас с чувством спокойствия и умиротворения. Уникальный продукт, у которого нет аналогов в Крыму.</p>
        </div>
      </div>
    </div>
  );
}
