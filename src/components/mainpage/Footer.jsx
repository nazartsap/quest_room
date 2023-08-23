export function Footer(){
    return(
      <div className="footer_cont">
        <div>
            <div className="logo_footer">
                 <img className="img_logo_footer" src="/logo.png" alt="sorry" />
            </div>
            <div className="nav_footer">
              <ul className="nav_links_block1">
                <li><a href="#info">Описание</a></li>
                <li><a href="#tariff">Тарифы</a></li>
                <li><a href="#desc">Контакты</a></li>
                <li><a href="#desc">Бронирование</a></li>
              </ul>
            </div>
            <div className="div"></div>
            <div className="all_right">
              2023. Все права защищены
            </div>
        </div>
      </div>
    )
}