import { Input } from '@nextui-org/react'
import styles from './contact.module.scss'

const Contact = () => {
  return (
    <section className={styles.section_book}>
      <div className="row">
        <div className={styles.book}>
          <div className={styles.book_form}>
            <form className={styles.form}>
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">
                  Let&apos;s take a coffee?
                </h2>
              </div>

              <Input type={'text'} placeholder={'Name'} name={'name'} />
              <Input type={'email'} placeholder={'Email'} name={'email'} />
              <Input type={'tel'} placeholder={'Phone'} name={'phone'} />

              <div className="form-group">
                <a className={`${styles.btn_2} ${styles.btn_green} ${styles.btn_animated}`}>Send &rarr;</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Contact }