export default function Navbar() {
    return (
        <nav>
            <div className="nav-logo-div">
                
                <img id="nav-logo" src="./images/kurek.jpeg" alt="odtü kürek logosu" />
                <span>ODTÜ KÜREK TAKIMI</span>
            </div>
            <ul>
                    <li><a href="tarih.html">Tarihimiz</a></li>
                    <li><a href="iletisim.html">İletişim</a></li>
                    <li><a href="#main">Randevu Al</a></li>
                    <li><a href="randevu.html">Hesap Oluştur</a></li>
                    <li><a href="randevu.html">Giriş Yap</a></li>
            </ul>

        </nav>
    )
}
