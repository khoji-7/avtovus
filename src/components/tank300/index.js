import cls from "./index.module.css"
import warning from "../../assets/warning.svg"
import tank300 from "../../assets/tank300.png"
import cert from "../../assets/tankCert.svg"
import perc from "../../assets/tankPercent.svg"
import disco from "../../assets/tankDisc.svg"
import check from "../../assets/tankcheck.svg"
import one from "../../assets/tank3001.png"
import two from "../../assets/tank3002.png"
import three from "../../assets/tank3003.png"
import four from "../../assets/tank3004.png"
import five from "../../assets/tank3005.png"


const Tank = () => {
    return (
        <section className={cls.parent} >
            <div className={cls.container}>
                <div className={cls.header}>
                    <div className={cls.headerTitle}>
                        <div className={cls.headerTitleName}>
                            <p className={cls.headerTitleNameP}>
                                Только в АВТОРУСЬ!
                            </p>
                            <p className={cls.headerTitleNames}>
                                TANK 300
                            </p>
                        </div>
                        <div className={cls.headerTitlePrice}>
                            <p className={cls.headerTitlePriceP} >
                                Выгода по Trade-In
                                до 450 000 ₽
                            </p>
                            <div className={cls.headerTitleWarning}>
                                <img src={warning} alt="" />
                                <p className={cls.headerTitleWarningP}>
                                    Ограниченное предложение!
                                </p>
                                <img src={warning} alt="" />

                            </div>
                            <div className={cls.headerBtnParent}>
                                <button className={cls.headerBtn}>
                                    Узнать стоимость по акции
                                </button>
                                <button className={cls.headerBtn}>
                                    Узнать стоимость по акции
                                </button>
                                <button className={cls.headerBtn}>
                                    Узнать стоимость по акции
                                </button>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className={cls.headerImg}>
                        <img src={tank300} alt="" className={cls.headerTank} />
                        <div className={cls.headerImgTitle}>
                            <p>
                                Осталось
                                5 автомобилей
                                по спец цене
                            </p>
                        </div>
                        <div className={cls.headerImgColor}>
                            <div className={cls.red} >
                            </div>
                            <div className={cls.redd} >
                            </div>
                            <div className={cls.gray} >
                            </div>
                            <div className={cls.black} >
                            </div>
                            <div className={cls.white} >
                            </div>

                        </div>
                    </div>
                </div>
                <div className={cls.main}>
                    <div className={cls.mainCard}>
                        <img src={check} alt="" className={cls.mainCardImg} />
                        <p className={cls.mainCardP}>
                            Автомобили в наличии
                            с ПТС
                        </p>

                    </div>
                    <div className={cls.mainCard}>
                        <img src={cert} alt="" className={cls.mainCardImg} />
                        <p className={cls.mainCardP}>
                            Сервисная поддержка
                            до 5 лет / 150 000 км
                        </p>

                    </div>
                    <div className={cls.mainCard}>
                        <img src={disco} alt="" className={cls.mainCardImg} />
                        <p className={cls.mainCardP}>
                            Улучшим любое
                            предложение
                        </p>

                    </div>
                    <div className={cls.mainCard}>
                        <img src={perc} alt="" className={cls.mainCardImg} />
                        <p className={cls.mainCardP}>
                        Кредит 0,01%
                        </p>

                    </div>

                </div>
                <div className={cls.img}>
                    <img src={one} alt="" className={cls.imgChild} />
                    <img src={two} alt="" className={cls.imgChild} />
                    <img src={three} alt="" className={cls.imgChild} />
                    <img src={four} alt="" className={cls.imgChild} />
                    <img src={five} alt="" className={cls.imgChild} />

                </div>
            </div>
        </section>
    );
}



export default Tank;