import cls from "./style.module.css"
import img from "../../assets/tank3000.png"
import boxImg from "../../assets/box.svg"
import discImg from "../../assets/tankDisc.svg"
import bannerImg from "../../assets/banner.png"

const category = () => {

    return (
        <section className={cls.category}>
            <div className={cls.container}>
                <p className={cls.categoryTitle}>
                    ПОДБЕРИТЕ КОМПЛЕКТАЦИЮ
                </p>
                <div className={cls.inputParent}>
                    <div className={cls.inputParentChild} >
                        <p className={cls.inputParentP}>
                            Модель
                        </p>
                        <select name="" id=""></select>
                    </div>
                    <div className={cls.inputParentChild} >
                        <p className={cls.inputParentP}>
                            Комплектация
                        </p>
                        <select name="" id=""></select>
                    </div>
                    <div className={cls.inputParentChild} >
                        <p className={cls.inputParentP}>
                            Двигатель
                        </p>
                        <select name="" id=""></select>
                    </div>
                </div>
                <div className={cls.menuParent}>
                    <div className={cls.menu}>
                        <img src={img} alt="" className={cls.menuImg} />

                        <div className={cls.charac}>
                            <p className={cls.characName}>
                                TANK 300
                            </p>
                            <p className={cls.characP}>
                                2.0 л. Бензин, Полный, Автоматическая
                            </p>
                            <del>
                                3 649 000 P
                            </del>
                            <div className={cls.charChild}>
                                <img src={discImg} alt="" />
                                <p>
                                    Выгода по Trade-in до 450 000 ₽
                                </p>
                                <img src={boxImg} alt="" />
                            </div>
                        </div>

                        <div className={cls.headerBtnParent}>
                            <button className={cls.headerBtn}>
                                Получить предложение
                            </button>
                            <button className={cls.headerBtn}>
                                Тест-драйв
                            </button>
                        </div>

                    </div>
                    <div className={cls.menu}>
                        <img src={img} alt="" className={cls.menuImg} />

                        <div className={cls.charac}>
                            <p className={cls.characName}>
                                TANK 300
                            </p>
                            <p className={cls.characP}>
                                2.0 л. Бензин, Полный, Автоматическая
                            </p>
                            <del>
                                3 649 000 P
                            </del>
                            <div className={cls.charChild}>
                                <img src={discImg} alt="" />
                                <p>
                                    Выгода по Trade-in до 450 000 ₽
                                </p>
                                <img src={boxImg} alt="" />
                            </div>
                        </div>

                        <div className={cls.headerBtnParent}>
                            <button className={cls.headerBtn}>
                                Получить предложение
                            </button>
                            <button className={cls.headerBtn}>
                                Тест-драйв
                            </button>
                        </div>

                    </div>
                    <div className={cls.menu}>
                        <img src={img} alt="" className={cls.menuImg} />

                        <div className={cls.charac}>
                            <p className={cls.characName}>
                                TANK 300
                            </p>
                            <p className={cls.characP}>
                                2.0 л. Бензин, Полный, Автоматическая
                            </p>
                            <del>
                                3 649 000 P
                            </del>
                            <div className={cls.charChild}>
                                <img src={discImg} alt="" />
                                <p>
                                    Выгода по Trade-in до 450 000 ₽
                                </p>
                                <img src={boxImg} alt="" />
                            </div>
                        </div>

                        <div className={cls.headerBtnParent}>
                            <button className={cls.headerBtn}>
                                Получить предложение
                            </button>
                            <button className={cls.headerBtn}>
                                Тест-драйв
                            </button>
                        </div>

                    </div>

                </div>
                <button className={cls.mainBtn}>
                    Загрузить еще
                </button>
                <div className={cls.banner}>
                    <img src={bannerImg} alt="" />
                    <div className={cls.bannerMenu}>
                        <p  className={cls.bannermenuP}>
                            ОБМЕН ПО TRADE-IN
                            <br />
                            НА ВЫГОДНЫХ УСЛОВИЯХ
                        </p>
                        <button className={cls.bannerBtn}>
                        Отправить заявку
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default category;