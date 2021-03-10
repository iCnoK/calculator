import React from 'react'
import s from './Calculator.module.css'

export default function Calculator() {
  return (
    <React.Fragment>
      <main className={s.main}>
        <div className={s.figureWrapper}>
          <figure className={s.figure}>
            <div className={s.textWrapper}>
              <input className={s.text} readOnly={true} />
            </div>
            <div></div>
          </figure>
        </div>
      </main>
    </React.Fragment>
  );
}