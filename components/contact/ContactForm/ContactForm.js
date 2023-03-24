import classes from './ContactForm.module.css'
import { useEffect, useState } from 'react'
import { notificationStatus } from './notificationStatus'
import Notification from '../../ui/Notification/Notification'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [requestStatus, setRequestStatus] = useState()

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null)
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [requestStatus])
    const sendFormHandler = async (e) => {
        e.preventDefault()
        setRequestStatus('pending')
        const response = await fetch('api/contact', {
            method: 'POST',
            body: JSON.stringify({ name, email, message }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        await response.json()
        if (!response.ok) {
            setRequestStatus('error')
        } else {
            setRequestStatus('success')
            setName('')
            setEmail('')
            setMessage('')
        }
    }

    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={sendFormHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>
                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </form>
            {requestStatus && (
                <Notification data={notificationStatus[requestStatus]} />
            )}
        </section>
    )
}

export default ContactForm
