import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <div>
      <ul className='menu'>
        <li onClick={() => navigate(-1)}>Geri</li> //geri butonu
        <li>
          <Link to='/'>Anasayfa</Link>
        </li>
        <li>
          <Link to='users'>Kullanıcılar</Link>
        </li>
        <li>
          <Link to='contact'>İletişim</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
