const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.send({
    to: 'f20190083@goa.bits-pilani.ac.in',
    from: 'karthiku19@gmail.com',
    subject: 'Caught you scammer',
    text: 'Hehe i am coming from Nodejs. Be ready to be scammed'
})

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'karthiku19@gmail.com',
        subject: 'Thanks for joining!',
        text: `Hello ${name}, Welcome to the Task Manager App. Glad to join you in our community.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'karthiku19@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye ${name}, We hope to see you again.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
