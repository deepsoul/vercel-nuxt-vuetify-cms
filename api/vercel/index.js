const app = require('express')()
// eslint-disable-next-line import/order
const http = require('http').Server(app)
const bodyParser = require('body-parser')
const cors = require('cors')
const nodemailer = require('nodemailer')

app.use(
  cors({
    credentials: false,
  })
)
app.use(bodyParser.json())

app.get('/test-send', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/test', function (req, res) {
  function createTransport() {
    return nodemailer.createTransport({
      host: 'v115207.kasserver.com',
      port: 465,
      name: 'XTC-CodeRED',
      secure: true,
      auth: {
        user: 'm05996d0',
        pass: 'ZRu4EGCD5JovTqLp',
      },
    })
  }

  function sendMailToGF(berater, code) {
    console.log('SEND STARTED')
    const transporter = createTransport()

    // send mail with defined transport object
    transporter.sendMail(
      {
        from: '"Boris Horn 👻" <info@21-challenge.de>', // sender address
        //to: email, // list of receivers
        to: 'info@21-challenge.de',
        subject: 'Code wurde ausgelöst ✔', // Subject line
        text: 'TEXT', // plain text body
        html:
          'Hi Oli, der Berater ' +
          berater +
          ' hat Code ' +
          code +
          ' gedrückt. Du weißt was zu tun ist.', // html body,
        //     attachments: [
        // {
        //       // filename: name + '.vcf',
        //       // content: vcf,
        //       // contentType: 'text/vcard'
        //       path: __dirname + '/vcf/Max Brunner.vcf'
        //     }
        // ]
      },
      (error, info) => {
        if (error) {
          console.log('ERROR MAILER', error)
          return false
        }
        console.log('Message sent: %s', info.messageId)
      }
    )
  }

  //   function sendMailToGF(berater, code) {
  //     console.log('SEND STARTED')
  //     const transporter = createTransport()

  //     // send mail with defined transport object
  //     transporter.sendMail(
  //       {
  //         from: '"Boris Horn 👻" <boris.horn@grabarzundpartner.de>', // sender address
  //         //to: email, // list of receivers
  //         to:
  //           'oliver.heidorn@grabarzundpartner.de; boris.horn@grabarzundpartner.de',
  //         subject: 'Code wurde ausgelöst ✔', // Subject line
  //         text: 'TEXT', // plain text body
  //         html:
  //           'Hi Oli, der Berater ' +
  //           berater +
  //           ' hat Code ' +
  //           code +
  //           ' gedrückt. Du weißt was zu tun ist.', // html body,
  //         //     attachments: [
  //         // {
  //         //       // filename: name + '.vcf',
  //         //       // content: vcf,
  //         //       // contentType: 'text/vcard'
  //         //       path: __dirname + '/vcf/Max Brunner.vcf'
  //         //     }
  //         // ]
  //       },
  //       (error, info) => {
  //         if (error) {
  //           console.log('ERROR MAILER', error)
  //           return false
  //         }
  //         console.log('Message sent: %s', info.messageId)
  //       }
  //     )
  //   }

  sendMailToGF('TEST BORIS', 'red')
  res.sendFile(__dirname + '/index.html')
})

http.listen(3050, function () {
  console.log('server listening on port 3050!')
})

function createTransport() {
  return nodemailer.createTransport({
    host: 'v115207.kasserver.com',
    port: 465,
    secure: true,
    authMethod: 'ssl',
    auth: {
      user: 'm052355b',
      pass: '3CLYMBfHQnh89kTy',
    },
  })
}
