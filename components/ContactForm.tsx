import styles from '../styles/contactForm.module.css'

export default function ContactForm() {
    return (
        <form className={styles.contactForm} action='https://formspree.io/f/xqkngrgy' method='POST'>
            <label>
                First Name:
                <input name='firstName' type='text' placeholder='First Name' required />
            </label>
            <label>
                Last Name:
                <input name='lastName' type='text' placeholder='Last Name' required />
            </label>
            <label>
                Email:
                <input name='email' type='text' placeholder='Email' required />
            </label>
            <label>
                Message:
                <textarea name='message' rows={6} placeholder='Message' required/>
            </label>
            <input type='submit' value='Submit' />
        </form>
    )
}