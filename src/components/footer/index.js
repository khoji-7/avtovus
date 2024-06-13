import cls from "./style.module.css";
import opa from "../../assets/footerSis.png"
import karta from "../../assets/map.png"
import loca from "../../assets/location.svg"
import service from "../../assets/LogoNavbarLocSer.svg"
import speed from "../../assets/logoNavbarLocSpeed.svg"
import phone from "../../assets/phone.svg"


const Footer = () => {
    return (
        <section className={cls.footer}>
            <div className={cls.container}>
                <div className={cls.thoughts}>
                    <div className={cls.thoughtsTitle}>
                        <p className={cls.thoughtsTitleP}>
                            Индивидуальное предложение
                            для корпоративных клиентов
                        </p>
                        <button className={cls.bannerBtn}>
                            Отправить заявку
                        </button>
                    </div>
                    <div className={cls.thoughtsName}>
                        <img src={opa} alt="" />
                        <div className={cls.thoughtsNameChild}>
                            <p className={cls.thoughtsNameChildName}>
                                Татьяна Санникова
                            </p>
                            <p className={cls.thoughtsNameChildP}>
                                Отдел корпоративных
                                продаж АВТОРУСЬ
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cls.mapsParent}>
                    <img src={karta} alt="" />
                </div>
                <div className={cls.contacTsection}>
                    <div className={cls.contactInfo}>
                        <div className={cls.address}>
                            <p className={cls.addressP}>Адрес</p>
                            <p className={cls.title}>Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)</p>
                        </div>
                        <div className={cls.phone}>
                            <p className={cls.addressP}>Телефон</p>
                            <p className={cls.title}>+7 (999) 999-99-99</p>
                            <div className={cls.statusDotPar}>
                                <div className={cls.statusDot}></div>
                                <p className={cls.addressP} > Мы на связи</p>
                            </div>

                        </div>
                        <div className={cls.workingHouse}>
                            <p className={cls.addressP}>Режим работы</p>
                            <p className={cls.title}>Ежедневно с 09:00 до 21:00</p>
                        </div>
                    </div>
                    <button className={cls.btn}>Заказать звонок</button>
                </div>
                <div className={cls.disklaymer}>
                    <p className={cls.disklaymerH}>
                        Дисклеймер ^
                    </p>
                    <p className={cls.disklaymerP}>
                        TANK 300 за 3 799 000руб с учетом поддержек. Цена на модель TANK (ТЭНК) 300 в комплектации Adventure (Эдвенчер) с двигателем 2,0T 4WD, 2023 года производства, цвет автомобиля: белый, с учетом выгоды по трейд-ин 300 000 рублей. В трейд-ин принимаются автомобили с пробегом со сроком владения и регистрации (постановки на учет) в органах ГИБДД не менее 6 месяцев (в отношении автомобилей бренда TANK, Haval, Great Wall – 3 месяца) до сдачи автомобиля в трейд-ин. В качестве документов, подтверждающих срок владения сдаваемого в трейд-ин автомобиля, собственнику необходимо предоставить копию ПТС или СТС или карточку учета ТС из ГИБДД с печатью и подписью. Подробности уточняйте у менеджеров отдела продаж TANK АВТОРУСЬ. Предложение ограничено, не является офертой и действует с 01.04.2024г.
                        <br /> <br /> TANK 500 за 5 349 000 руб с учетом поддержек. Цена на модель TANK (ТЭНК) 500 в комплектации Adventure (Эдвенчер) с двигателем 3,0T 4WD, 2023 года производства, цвет автомобиля: белый, с учетом прямой выгоды в 950 000 рублей. Подробности уточняйте у менеджеров отдела продаж TANK АВТОРУСЬ. Предложение ограничено, не является офертой и действует с 01.04.2024г.
                    </p>
                </div>
                <div className={cls.line}>

                </div>
                <div className={cls.footerContact}>
                    <div>
                        <div>
                            <p className={cls.footerContactH}>
                                АВТОРУСЬ TANK Лосиный Остров
                            </p>
                            <p className={cls.footerContactP}>
                                Официальный дилер
                            </p>
                        </div>
                        <div className={cls.footerContactLoca}>
                            <img src={loca} alt="" />
                            <p className={cls.footerContactP}>
                                Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
                            </p>
                        </div>
                        <div>
                            <p className={cls.footerContactP}>
                                Официальный дилер                            </p>
                            <p className={cls.footerContactH}>
                                ООО А АВТОРУСЬ МЫТИЩИ | ОГРН - 1147746695161, ИНН - 7728881903                            </p>
                        </div>

                    </div>
                    <div className={cls.footerSup}>
                        <div className={cls.footerSupChild}>
                            <div className={cls.phone}>
                                <p className={cls.title}>+7 (999) 999-99-99</p>
                                <div className={cls.statusDotPar}>
                                    <div className={cls.statusDot}></div>
                                    <p className={cls.addressP} > Мы на связи</p>
                                </div>
                            </div>
                            <button className={cls.btn}> <img src={phone} alt="" />Заказать звонок</button>
                        </div>
                        <div className={cls.footerSer}>
                            <img src={service} alt="" />
                            <p>
                                Записаться на сервис
                            </p>
                            <img src={speed} alt="" />
                            <p>
                                Тест-драйв
                            </p>
                        </div>
                    </div>


                </div>
                <div className={cls.line}>

                </div>
                <div className={cls.footerText}>
                    <p className={cls.disklaymerP}>
                        © 2024, АВТОРУСЬ ТАНК
                    </p>
                    <div className={cls.footerTextChild}>
                        <p className={cls.disklaymerP}>
                            Правовая информация
                        </p>
                        <p className={cls.disklaymerP}>
                            Условия
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer
