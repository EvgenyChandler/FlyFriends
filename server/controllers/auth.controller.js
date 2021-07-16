/* eslint-disable no-unused-vars,consistent-return,no-underscore-dangle,no-param-reassign,camelcase,object-curly-newline,max-len */
const _ = require('lodash')
const { OAuth2Client } = require('google-auth-library')
const { validationResult } = require('express-validator')
const fetch = require('node-fetch')
const jwt = require('jsonwebtoken')
const sgMail = require('@sendgrid/mail')
const User = require('../models/User.model')
const { errorHandler } = require('../helpers/dbErrorHandling')

sgMail.setApiKey(process.env.MAIL_KEY)

// Предварительная регистрация кандидата
exports.registrationController = (req, res) => {
  const { name, email, password, city } = req.body
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0]
    return res.status(422).json({
      errors: firstError,
    })
  }
  User.findOne({ email }).exec((err, candidate) => {
    if (candidate) {
      return res.status(400).json({
        errors: 'Такой Email уже существует',
      })
    }
  })

  // Генерация JWT токена
  const token = jwt.sign(
    {
      name,
      email,
      password,
      city,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: '15m',
    },
  )

  // Данные для отправки email
  const emailData = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Ссылка для активации аккаунта',
    html: `
<!DOCTYPE HTML
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <title></title>

  <style type="text/css">
    table,
    td {
      color: #000000;
    }

    a {
      color: #0000ee;
      text-decoration: underline;
    }

    @media only screen and (min-width: 620px) {
      .u-row {
        width: 600px !important;
      }

      .u-row .u-col {
        vertical-align: top;
      }

      .u-row .u-col-100 {
        width: 600px !important;
      }

    }

    @media (max-width: 620px) {
      .u-row-container {
        max-width: 100% !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
      }

      .u-row .u-col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
      }

      .u-row {
        width: calc(100% - 40px) !important;
      }

      .u-col {
        width: 100% !important;
      }

      .u-col>div {
        margin: 0 auto;
      }
    }

    body {
      margin: 0;
      padding: 0;
    }

    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }

    p {
      margin: 0;
    }

    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }

    * {
      line-height: inherit;
    }

    a[x-apple-data-detectors='true'] {
      color: inherit !important;
      text-decoration: none !important;
    }
  </style>



  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" type="text/css">
  <!--<![endif]-->

</head>

<body class="clean-body"
  style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
  <table
    style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%"
    cellpadding="0" cellspacing="0">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">


          <div class="u-row-container" style="padding: 0px;background-color: transparent">
            <div class="u-row"
              style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">

                <div class="u-col u-col-100"
                  style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                  <div style="width: 100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                      <!--<![endif]-->

                      <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
                        width="100%" border="0">
                        <tbody>
                          <tr>
                            <td
                              style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                              align="left">

                              <div
                                style="color: #afb0c7; line-height: 170%; text-align: center; word-wrap: break-word;">
                                <p style="font-size: 14px; line-height: 170%;"><span
                                    style="font-size: 14px; line-height: 23.8px;">View Email in Browser</span></p>
                              </div>

                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div class="u-row-container" style="padding: 0px;background-color: transparent">
              <div class="u-row"
                style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">

                  <div class="u-col u-col-100"
                    style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                        <!--<![endif]-->

                        <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                          cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td
                                style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Cabin',sans-serif;"
                                align="left">

                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                    <td style="padding-right: 0px;padding-left: 0px;" align="center">

                                      <img align="center" border="0" src="https://i.ibb.co/j3RLNqv/image-2.png" alt="Image"
                                        title="Image"
                                        style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 22%;max-width: 123.2px;"
                                        width="123.2" />

                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row"
                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">

                    <div class="u-col u-col-100"
                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                      <div style="width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div
                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                          <!--<![endif]-->

                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                            cellspacing="0" width="100%" border="0">
                            <tbody>
                              <tr>
                                <td
                                  style="overflow-wrap:break-word;word-break:break-word;padding:40px 10px 10px;font-family:'Cabin',sans-serif;"
                                  align="left">

                                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                    <tr>
                                      <td style="padding-right: 0px;padding-left: 0px;" align="center">

                                        <img align="center" border="0" src="https://i.ibb.co/zfth2Mx/image-1.png" alt="Image"
                                          title="Image"
                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 26%;max-width: 150.8px;"
                                          width="150.8" />
                                      </td>
                                    </tr>
                                  </table>

                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                            cellspacing="0" width="100%" border="0">
                            <tbody>
                              <tr>
                                <td
                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                  align="left">

                                  <div
                                    style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                    <p style="font-size: 14px; line-height: 140%;"><span
                                        style="font-size: 24px; line-height: 33.6px;">Благодарим за регистрацию!</span>
                                    </p>
                                  </div>

                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                            cellspacing="0" width="100%" border="0">
                            <tbody>
                              <tr>
                                <td
                                  style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 31px;font-family:'Cabin',sans-serif;"
                                  align="left">
                                   <div
                                    style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                    <p style="font-size: 14px; line-height: 140%;"><span
                                        style="font-size: 20px; line-height: 28px;">Подтвердите Ваш <span
                                          style="line-height: 28px; font-size: 20px;">email</span></span></p>
                        </div>
        </td>
      </tr>
    </tbody>
  </table>

  </div>
  </div>
  </div>
  </div>
  </div>



  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row"
      style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">

        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
          <div style="width: 100% !important;">
            <!--[if (!mso)&(!IE)]><!-->
            <div
              style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
              <!--<![endif]-->

              <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
                width="100%" border="0">
                <tbody>
                  <tr>
                    <td
                      style="overflow-wrap:break-word;word-break:break-word;padding:33px 55px;font-family:'Cabin',sans-serif;"
                      align="left">

                      <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                        <p style="line-height: 160%; font-size: 14px;"><span
                            style="font-size: 22px; line-height: 35.2px;">Привет, друг!</span></p>
                        <p style="line-height: 160%; font-size: 14px;"><span
                            style="font-size: 22px; line-height: 35.2px;">Тебя отделает всего один шаг от
                            использования нашего сервиса...</span></p>
                      </div>

                    </td>
                  </tr>
                </tbody>
              </table>

              <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
                width="100%" border="0">
                <tbody>
                  <tr>
                    <td
                      style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                      align="left">
                      <div align="center">
                        <a href="${process.env.CLIENT_URL}/activation/${token}" target="_blank"
                          style="box-sizing: border-box;display: inline-block;font-family:'Cabin',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #ff6600; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
                          <span style="display:block;padding:14px 44px 13px;line-height:120%;"><span
                              style="font-size: 16px; line-height: 19.2px;"><strong><span
                                  style="line-height: 19.2px; font-size: 16px;">ПОДТВЕРДИТЬ
                                  EMAIL</span></strong></span></span>
                        </a>
                      </div>

                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row"
        style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #e5eaf5;">
        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">

          <div class="u-col u-col-100"
            style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
            <div style="width: 100% !important;">
              <!--[if (!mso)&(!IE)]><!-->
              <div
                style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                <!--<![endif]-->

                <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
                  width="100%" border="0">
                  <tbody>
                    <tr>
                      <td
                        style="overflow-wrap:break-word;word-break:break-word;padding:41px 55px 18px;font-family:'Cabin',sans-serif;"
                        align="left">

                        <div style="color: #003399; line-height: 160%; text-align: center; word-wrap: break-word;">

                        </div>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="u-row-container" style="padding: 0px;background-color: transparent">
        <div class="u-row"
          style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">

            <div class="u-col u-col-100"
              style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
              <div style="width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!-->
                <div
                  style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                  <!--<![endif]-->

                  <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
                    width="100%" border="0">
                    <tbody>
                      <tr>
                        <td
                          style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                          align="left">

                          <div style="color: #fafafa; line-height: 180%; text-align: center; word-wrap: break-word;">
                            <p style="font-size: 14px; line-height: 180%;"><span
                                style="color: #ecf0f1; font-size: 20px; line-height: 36px;"><a style="color: #ecf0f1;"
                                  href="https://zen-swirles-e5bb81.netlify.app/" target="_blank"
                                  rel="noopener">Fly-Friends</a></span></p>
                          </div>

                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        </td>
        </tr>
        </tbody>
        </table>
</body>

</html>
    `,
  }

  // Отправка письма
  sgMail.send(emailData).then((sent) => res.json({
    message: `Письмо успешно отправлено на почту ${email}`,
  })).catch((error) => res.status(400).json({
    errors: errorHandler(error),
  }))
}

// Активация аккаунта и сохранение в базу
exports.activationController = (req, res) => {
  const { token } = req.body

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
      if (error) {
        console.log('Ошибка активации')
        return res.status(401).json({
          errors: 'Срок действия ссылки истек. Зарегистрируйтесь снова',
        })
      }
      const { name, email, password, city } = jwt.decode(token)

      const newUser = new User({
        name,
        email,
        password,
        city,
      })

      newUser.save((err, user) => {
        if (err) {
          console.log('Ошибка сохранения нового пользователя', errorHandler(err))
          return res.status(401).json({
            errors: errorHandler(err),
          })
        }
        return res.json({
          success: true,
          message: 'Аккаунт успешно активирован',
          user,
        })
      })
    })
  } else {
    return res.json({
      message: 'Ошибка, попробуйте снова',
    })
  }
}

// Авторизация пользователя
exports.loginController = (req, res) => {
  const { email, password } = req.body
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0]
    return res.status(422).json({
      errors: firstError,
    })
  }

  User.findOne({
    email,
  }).exec((error, user) => {
    if (error || !user) {
      return res.status(400).json({
        errors: 'Пользователь с таким email не найден, пожалуйста авторизуйтесь',
      })
    }

    if (!user.authenticate(password)) {
      return res.status(400).json({
        errors: 'Email или пароль не верные',
      })
    }

    const token = jwt.sign(
      {
        _id: user._id,
      }, process.env.JWT_SECRET_KEY,
      {
        expiresIn: '7d',
      },
    )
    const { _id, name, role, avatar, friends, city } = user

    return res.json({
      token,
      user: {
        _id,
        name,
        email,
        role,
        avatar,
        friends,
        city,
      },
    })
  })
}

// Аутентификация пользователя (проверка токена)
exports.authController = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id })
    const token = jwt.sign(
      {
        _id: user._id,
      }, process.env.JWT_SECRET_KEY,
      {
        expiresIn: '7d',
      },
    )

    const { _id, name, role, avatar, friends, city, email } = user

    return res.json({
      token,
      user: {
        _id,
        name,
        email,
        role,
        avatar,
        friends,
        city,
      },
    })
  } catch (e) {
    console.log('===', e)
    res.send({ message: 'Ошибка сервера' })
  }
}

// Обработка забытого пароля
exports.forgotController = (req, res) => {
  const { email } = req.body
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0]
    return res.status(422).json({
      errors: firstError,
    })
  }
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        errors: 'Пользователь с таким email не найден',
      })
    }

    const token = jwt.sign({
      _id: user._id,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: '10m',
    })

    const emailData = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Ссылка для сброса пароля',
      html: `
      <h1>Перейдите по ссылке для сброса пароля</h1>
      <p>${process.env.CLIENT_URL}/reset/${token}</p>
      <hr />
      <p>Fly Friends:</p>
      <p>${process.env.CLIENT_URL}</p>
      `,
    }

    return user.updateOne(
      {
        resetPasswordLink: token,
      },
      (error, success) => {
        if (error) {
          return res.status(400).json({
            error:
                'Ошибка подключения к базе данных на запросе обновления пароля пользователя',
          })
        }
        sgMail
          .send(emailData)
          .then((sent) => res.json({
            message: `Письмо отправлено на ${email}. Следуйте инструкциям.`,
          }))
          .catch((er) => res.json({
            message: er.message,
          }))
      },
    )
  })
}

// Сброс пароля
exports.resetController = (req, res) => {
  const { resetPasswordLink, newPassword } = req.body
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0]
    return res.status(422).json({
      errors: firstError,
    })
  }
  if (resetPasswordLink) {
    jwt.verify(resetPasswordLink, process.env.JWT_SECRET_KEY, (
      err,
      decoded,
    ) => {
      if (err) {
        return res.status(400).json({
          errors: 'Срок действия ссылки истек. Попробуй еще раз.',
        })
      }
      User.findOne(
        {
          resetPasswordLink,
        },
        (error, user) => {
          if (error || !user) {
            return res.status(400).json({
              errors: 'Что-то пошло не так. Попробуйте позже.',
            })
          }

          const updatedFields = {
            password: newPassword,
            resetPasswordLink: '',
          }

          user = _.extend(user, updatedFields)

          user.save((er, result) => {
            if (er) {
              return res.status(400).json({
                errors: 'Ошибка сброса пароля',
              })
            }
            res.json({
              message: 'Отлично! Теперь вы можете войти со своим новым паролем.',
            })
          })
        },
      )
    })
  }
}

// Авторизация Google
const client = new OAuth2Client(process.env.GOOGLE_CLIENT)

exports.googleController = (req, res) => {
  const { idToken } = req.body

  client.verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT })
    .then((response) => {
      const { email_verified, name, email } = response.payload
      if (email_verified) {
        User.findOne({ email }).exec((err, user) => {
          if (user) {
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
              expiresIn: '7d',
            })
            const { _id, role, avatar, friends, city } = user
            return res.json({
              token,
              user: { _id, email, name, role, avatar, friends, city },
            })
          }
          const password = email + process.env.JWT_SECRET_KEY
          user = new User({ name, email, password })
          user.save((error, data) => {
            if (error) {
              console.log('GOOGLE LOGIN ошибка сохранения пользователя', err)
              return res.status(400).json({
                errors: 'Ошибка авторизации пользователя через google',
              })
            }
            const token = jwt.sign(
              { _id: data._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: '7d' },
            )
            const { _id, role } = data
            return res.json({
              token,
              user: { _id, email, name, role },
            })
          })
        })
      } else {
        return res.status(400).json({
          errors: 'Авторизоваться через google не удалось. Попробуйте еще раз.',
        })
      }
    })
}

// Авторизация Facebook
exports.facebookController = (req, res) => {
  console.log('FACEBOOK LOGIN REQ BODY', req.body)
  const { userID, accessToken } = req.body

  const url = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`

  return (
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        const { email, name } = response
        console.log('FB response ===>>>', response)
        User.findOne({ email }).exec((err, user) => {
          if (user) {
            console.log('user ===>>>', user)
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
              expiresIn: '7d',
            })
            const { _id, role, avatar, friends, city } = user
            return res.json({
              token,
              user: { _id, email, name, role, avatar, friends, city },
            })
          }
          const password = email + process.env.JWT_SECRET_KEY
          user = new User({ name, email, password })
          user.save((error, data) => {
            if (error) {
              console.log('Ошибка сохранения пользователя авторизованного через facebook', err)
              return res.status(400).json({
                errors: 'Ошибка авторизации через facebook',
              })
            }
            const token = jwt.sign(
              { _id: data._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: '7d' },
            )
            const { _id, role } = data
            return res.json({
              token,
              user: { _id, email, name, role },
            })
          })
        })
      }).catch((error) => {
        res.json({
          errors: 'Ошибка авторизации через facebook. Попробуйте позже.',
        })
      })
  )
}
