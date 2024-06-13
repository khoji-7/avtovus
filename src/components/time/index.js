import React, { useState, useEffect } from 'react';
import cls from './App.module.css';
import logoCer from "../../assets/timerAvard.svg";
import logoClock from "../../assets/timerClock.svg";
import logoCheck from "../../assets/timerCheck.svg";
import tank300 from "../../assets/tank300.svg";
import tank500 from "../../assets/tank500.svg";


const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-06-16") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        timerComponents.push(
            <div className={cls.timeCircle} key={interval}>
                <span className={cls.timeNumber}>{timeLeft[interval]}</span>
                <span className={cls.timeLabel}>
                    {interval === 'days' ? 'дня' : interval === 'hours' ? 'часов' : interval === 'minutes' ? 'минут' : 'секунд'}
                </span>
            </div>
        );
    });

    return (
        <div className={cls.timerParent}>
            <div className={cls.container}>
                <div className={cls.timer}>
                    <div className={cls.timerTex}>СРОК ДЕЙСТВИЯ СПЕЦПРЕДЛОЖЕНИЯ:</div>
                    <div className={cls.timerChild}>
                        {timerComponents.length ? timerComponents.reduce((prev, curr) => [prev, <div className="colon">:</div>, curr]) : <span>Time's up!</span>}
                    </div>
                    <button className={cls.timerBtn}>Узнать цену с выгодами</button>
                </div>
                <div className={cls.guarantes}>

                    <div className={cls.guarantesCard}>
                        <img src={logoCer} alt="" className={cls.guarantesCardLogo} />
                        <div className={cls.guarantesCardTitle}>
                            <p className={cls.guarantesCardTitleH}>
                                Официальный дилер
                            </p>
                            <p className={cls.guarantesCardTitleP}>
                                Гарантируем высокое качество
                                обслуживания.
                            </p>
                        </div>
                    </div>
                    <div className={cls.guarantesCard}>
                        <img src={logoClock} alt="" className={cls.guarantesCardLogo} />
                        <div className={cls.guarantesCardTitle}>
                            <p className={cls.guarantesCardTitleH}>
                                ПОКУПКА АВТО ЗА 1 ДЕНЬ                            </p>
                            <p className={cls.guarantesCardTitleP}>
                                Удобный процесс покупки, включая оформление всех документов.
                            </p>
                        </div>
                    </div>
                    <div className={cls.guarantesCard}>
                        <img src={logoCheck} alt="" className={cls.guarantesCardLogo} />
                        <div className={cls.guarantesCardTitle}>
                            <p className={cls.guarantesCardTitleH}>
                                ВСЕ КОМПЛЕКТАЦИИ В НАЛИЧИИ                            </p>
                            <p className={cls.guarantesCardTitleP}>
                                Широкий выбор комплектаций,с полным пакетом документов
                            </p>
                        </div>
                    </div>
                </div>

                <div className={cls.timerTitle} >
                    <p className={cls.timerTitleP}>
                    ЗАБРОНИРУЙТЕ Автомобиль СЕГОДНЯ И ПОЛУЧИТЕ ДОПОЛНИТЕЛЬНУЮ ВЫГОДУ 100 000 ₽
                    </p>
                    <div className={cls.timerTitleCard}>
                        <div className={cls.cardchild}>
                            <img src={tank300} alt="" />
                            <p className={cls.cardchildP}>
                                tank300
                            </p>
                        </div>
                        <div className={cls.cardchild}>
                            <img src={tank500} alt="" />
                            <p className={cls.cardchildP}>
                                tank500
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

    const App = () => {
        return (
            <div className="App">
                <CountdownTimer />
            </div>
        );
    };

    export default App