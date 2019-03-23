import React from 'react';
import css from './../css/contacts.scss'

export default () => {
    return(
        <div className={css.contactsWrapper} id='contacts'>
            <div className={css.contactsText}>115409, Москва, Каширское шоссе,<br/>дом 44, корп. 1 — карта</div>
            <div className={css.contactsText}>ПОНЕДЕЛЬНИК — четверг<br/>9:30 — 18:00<br/>пятница<br/>9:30 — 16:45</div>
            <div className={css.contactsPhones}>
                <span><img src='static/phone.svg'/>+7 (499) 323-43-95<br/>(многоканальный)</span>
                <span><img src='static/phone.svg'/>+7 (499) 782-87-18</span>
                <span><img src='static/phone.svg'/>+7 (495) 786-00-80</span>
            </div>
            <div className={css.contactsEmail}><img src='static/envelope.svg'/>info@nsovet.ru</div>
        </div>
    )
}