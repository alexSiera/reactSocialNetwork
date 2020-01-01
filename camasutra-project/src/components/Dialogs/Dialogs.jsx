import React from 'react';
import s from './Dialogs.module.scss';
const Dialogs = (props) => {
    return (
        <div className={s.dialogs} >
            <div className={s.dialogs_items}>
                <div className={s.dialog}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Viktor
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>

                <div className={s.message}>YO</div>

            </div>
        </div>
    )
}
export default Dialogs;