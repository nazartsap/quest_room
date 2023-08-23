import React from 'react';

export function Navbar() {
  return (
    <nav className="navbar_mainpage">
      <div className="navbar_all">
        <div className="nav_links">
          <div className="nav_address"><img  src="/location1.png" alt="sorry"/>г.Симферополь, ул.Киевская 139</div>
          <ul className="nav_links_block1">
            <li><a href="#info">Описание</a></li>
            <li><a href="#tariff">Тарифы</a></li>
            <li><a href="#desc">Контакты</a></li>
            <li><a href="#desc">Бронирование</a></li>
          </ul>
          <div className="nav_address"><img  src="/phone2.png" alt="sorry"/>+7(978)-682-04-02</div>
        </div>
      </div>
    </nav>
  );
}