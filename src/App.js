import cls from "./App.module.css"
import logoNavbar from "../src/assets/LogoNavbar.svg"
import logoNavbarLoc from "../src/assets/LogoNavbarLoc.svg"
import logoNavbarLocSer from "../src/assets/LogoNavbarLocSer.svg"
import logoNavbarLocSpeed from "../src/assets/logoNavbarLocSpeed.svg"
import logoPhone from "../src/assets/phone.svg"
import Timer from "./components/time"
import Tank from "./components/tank300"
import Tank500 from "./components/tank500"
import Category from "./components/kategory"
import Contact from "./components/contact"
import Footer from "./components/footer"



const App = () => {
  return (
    <div className={cls.body}>
      <section className={cls.navbar}>
        <div className={cls.container}>
          <div className={cls.navbarLogo} >
            <img src={logoNavbar} alt="logoNavbar" className={cls.navbarLogoImg} />
          </div>
          <div className={cls.navbarInfo}>
            <div className={cls.navbarInfoLoc}>
              <div className={cls.navbarInfoLocAdress}>
                <img src={logoNavbarLoc} alt="logoNavbarLoc" />
                <p className={cls.navbarInfoLocAdressP}>
                  Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
                </p>
              </div>
              <div className={cls.navbarInfoLocSer}>
                <div className={cls.navbarInfoLocSerChild}>
                  <img src={logoNavbarLocSer} alt="" />
                  <p className={cls.navbarInfoLocSerP}>
                    Записаться на сервис
                  </p>
                </div>
                <div className={cls.navbarInfoLocSerChild}>
                  <img src={logoNavbarLocSpeed} alt="" />
                  <p className={cls.navbarInfoLocSerP}>
                    Тест-драйв
                  </p>
                </div>
              </div>
            </div>
            <div className={cls.navbarInfoLine}>

            </div>
            <div className={cls.navbarInfoCont}>
              <div className={cls.navbarInfoContTitle}>
                <p className={cls.navbarInfoContTitleH}>
                  АВТОРУСЬ TANK
                </p>
                <div className={cls.navbarInfoContTitleLine}>
                </div>
                <p className={cls.navbarInfoContTitleP}>
                  Официальный дилер
                </p>
              </div>
              <div className={cls.navbarInfoContNum}>
                <div className={cls.navbarInfoContNumChild}>
                  <p className={cls.navbarInfoContNumChildNum}>
                    +7 (999) 999-99-99
                  </p>
                  <div className={cls.navbarInfoContNumChildStatusParent}>
                    <div className={cls.navbarInfoContNumChildStatus}>

                    </div>
                    <p className={cls.navbarInfoContNumChildP}>
                      Мы на связи
                    </p>
                  </div>
                </div>
                <button className={cls.navbarInfoContNumBtn}>
                  <img src={logoPhone} alt="" />
                  Заказать звонок
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cls.header}>
        <div className={cls.container}>
          <div className={cls.headerChild}>
            <div className={cls.headerChildTitle}>
              <p className={cls.headerChildTitleP}>
                Улучшим любые условия
              </p>
              <p className={cls.headerChildTitleH}>
                TANK 500
              </p>
              <p className={cls.headerChildTitleP}>
                Осталось всего 5 автомобилей!
              </p>
            </div>
            <button className={cls.headerBtn}>
              Получить предложение >
            </button>
          </div>

        </div>
      </section>
      <Timer />
      <Tank/>      
      <Tank500/>
      <Category/>
      <Contact/>
      <Footer/>
    </div>
  );

}



export default App;
