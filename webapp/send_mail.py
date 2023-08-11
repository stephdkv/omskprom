import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


def sendMail(text):
    email_sender = "stephdiakiv@gmail.com"
    email_getter = "s.ulanov@ad-omsk.ru"
    password = "eovpiavetrlrzroo"

    smtp_server = smtplib.SMTP("smtp.gmail.com", 587)
    smtp_server.starttls()

    msg = MIMEMultipart()
    msg['From'] = 'Сайт Омск Промысел'
    msg['Subject'] = 'Заявка'
    msg.attach(MIMEText(str(text)))

    smtp_server.login(email_sender, password)
    smtp_server.sendmail(email_sender, email_getter, msg.as_string())
