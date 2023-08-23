import React from "react";
export function Info() {
    return (
      <div id="info" className="content_info">
        <div className="icon">
            <div className="players"><img  src="/group-3-dark.png" alt="sorry"/>2-4 игроков</div>
            <div className="time"><img  src="/time-dark.png" alt="sorry"/>80 минут</div>
            <div className="alert"><img  src="/alert-triangle-dark.png" alt="sorry"/>Ограничение 16+ </div>
            <div className="camera"><img  src="/camera-off-dark.png" alt="sorry"/>Съемка запрещена</div>
        </div>
        <div className="info_usefull">Что если мы скажем тебе, что тьма не всегда означает отсутствие света? <br/></div>
        <div className="info_usefull">Что если мы покажем тебе, что в темноте есть секреты, которые можно раскрыть только через ощущения?<br/></div>
        <div className="info_usefull">Вместо того, чтобы бояться темноты, давай научимся видеть свет внутри себя, даже когда вокруг темно. Изменим свое восприятие и позволим темноте стать твоим другом и учителем.</div>
      </div>
    );
  }