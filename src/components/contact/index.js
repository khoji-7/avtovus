import cls from "./style.module.css"

const contact = () => {
    return (
        <section className={cls.contact}>
            <div className={cls.container}>
                <p className={cls.bannerName}>
                    Оставьте заявку
                    на кредит
                </p>
                <p className={cls.bannerNameP}> 
                    и получите одобрение за 1 день!
                </p>
                <div className={cls.inputParent}>
                    <div className={cls.inputChild}>
                        <p className={cls.inputChildP}>
                            Телефон
                        </p>
                        <input type="text" name="" id="" placeholder="+7 (___) ___ - __ - __" className={cls.inputPhone} />
                        <div className={cls.checkboxPar}>
                        <input type="checkbox" className={cls.checkbox}/>
                        <p className={cls.checkboxP}>
                            Согласен на обработку персональных данных.
                        </p>
                        </div>
                    </div>
                    <button className={cls.bannerBtn}>
                    Отправить заявку
                    </button>
                </div>

            </div>
        </section>
    );
}
export default contact;