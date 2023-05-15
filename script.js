const body = document.body

const header = document.createElement('header')
const container = document.createElement('div')
container.classList.add('container')
const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
const logo_block = document.createElement('div')
logo_block.classList.add('logo_block')
const img = document.createElement('img')
img.src = './image/60b8ee61-142c-41fe-b23f-e55fb78ec381Logo.png'
const h1 = document.createElement('h1')
h1.classList.add('nav_text')
h1.textContent = 'SLOGAN SLOGAN SLOGAN'
const nav = document.createElement('nav')
nav.classList.add('navBlock')
const ul = document.createElement('ul')
ul.classList.add('nav_block')
let navArr = ['Главная', 'О приложении', 'О проекте', 'Скачать', 'Контакты']
navArr.forEach(el => {
    const li = document.createElement('li')
    li.textContent = el
    li.classList.add('li', 'li1')
    ul.append(li)
})

logo_block.append(img)
wrapper.append(logo_block, h1)
container.append(wrapper)
nav.append(ul)
header.append(container, nav)

const main = document.createElement('main')
const section1 = document.createElement('section')
section1.classList.add('section1')

const comment1 = document.createElement('div')
comment1.classList.add('comment')
const img1 = document.createElement('img')
img1.src = 'image/rawpixel-196464-unsplashguys.png'
img1.classList.add('img1')
const p1 = document.createElement('p')
p1.textContent = 'Часто ли вы опаздываете на раоту? (Учебу?)'

const comment2 = document.createElement('div')
comment2.classList.add('comment')
const img2 = document.createElement('img')
img2.src = 'image/rawpixel-196464-unsplashguys.png'
img2.classList.add('img1')
const p2 = document.createElement('p')
p2.textContent = 'Часто ли вы опаздываете на раоту? (Учебу?)'

const comment3 = document.createElement('div')
comment3.classList.add('comment')
const img3 = document.createElement('img')
img3.src = 'image/rawpixel-196464-unsplashguys.png'
img3.classList.add('img1')
const p3 = document.createElement('p')
p3.textContent = 'Часто ли вы опаздываете на раоту? (Учебу?)'

comment1.append(img1, p1)
comment2.append(img2, p2)
comment3.append(img3, p3)
section1.append(comment1, comment2, comment3)
const otstup1 = document.createElement('div')
otstup1.classList.add('otstup')

const section2 = document.createElement('section')
const main_text = document.createElement('div')
main_text.classList.add('main_text')
const p4 = document.createElement('p')
p4.textContent = 'О приложении'
const stol = document.createElement('img')
stol.classList.add('stol')
stol.src = 'image/rawpixel-559744-unsplashstol.png'
const pusk = document.createElement('img')
pusk.classList.add('pusk')
pusk.src = 'image/play-buttonzzzzz.png'

main_text.append(p4, stol, pusk)
section2.append(main_text)

const quest = document.createElement('section')
quest.classList.add('quest')
const question = document.createElement('div')
question.classList.add('question')

const question_img1 = document.createElement('img')
question_img1.classList.add('question_img')
question_img1.src = 'image/question.png'

const question_img2 = document.createElement('img')
question_img2.classList.add('question_img')
question_img2.src = 'image/question.png'

const question_img3 = document.createElement('img')
question_img3.classList.add('question_img')
question_img3.src = 'image/question.png'

const question_img4 = document.createElement('img')
question_img4.classList.add('question_img')
question_img4.src = 'image/question.png'

const question_img5 = document.createElement('img')
question_img5.classList.add('question_img')
question_img5.src = 'image/question.png'

question.append(question_img1, question_img2, question_img3, question_img4, question_img5)
quest.append(question)

const project = document.createElement('div')
project.classList.add('project')
const h2 = document.createElement('h2')
h2.textContent = 'О проекте'
const p5 = document.createElement('p')
p5.textContent = 'Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.'

project.append(h2, p5)

const download = document.createElement('div')
download.classList.add('download')
const h21 = document.createElement('h2')
h21.textContent = 'Скачать'
const andcr = document.createElement('div')
andcr.classList.add('andcr')
const android = document.createElement('img')
android.classList.add('android')
android.src = './image/androidandr.png'
const img4 = document.createElement('img')
img4.src = './image/iconqr.png'
const p6 = document.createElement('p')
p6.textContent = 'Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.'

andcr.append(android, img4)
download.append(h21, andcr, p6)

main.append(section1, otstup1, section2, quest, otstup1, project, otstup1, download)

const footer = document.createElement('footer')
footer.classList.add('footer')

const sm = document.createElement('h2')
sm.classList.add('sm')
sm.textContent = 'SOME'
const online = document.createElement('div')
online.classList.add('online')
const img5 = document.createElement('img')
img5.src = './image/vkvk.png'
const img6 = document.createElement('img')
img6.src = './image/instagram (1)in.png'
const img7 = document.createElement('img')
img7.src = './image/facebookfac.png'

const end = document.createElement('div')
end.classList.add('end')

const contacts = document.createElement('div')
contacts.classList.add('contacts')
const h22 = document.createElement('h2')
h22.textContent = 'Контакты'
const p7 = document.createElement('p')
p7.classList.add('p1')
p7.textContent = 'Tel.: +996 (312) 915000 + '
const p8 = document.createElement('p')
p8.textContent = 'Ext.'
const p9 = document.createElement('p')
p9.textContent = 'Fax: +996 (312) 915 028'

const adres = document.createElement('div')
adres.classList.add('adres')
const h23 = document.createElement('h2')
h23.textContent = 'Адреса'
const p10 = document.createElement('p')
p10.classList.add('p2')
p10.textContent = 'American University of Central Asia'
const p11 = document.createElement('p')
p11.textContent = '7/6 Aaly Tokombaev Street'
const p12 = document.createElement('p')
p12.textContent = 'Bishkek, Kyrgyz Republic 720060'

const help = document.createElement('div')
help.classList.add('help')
const h24 = document.createElement('h2')
h24.textContent = 'Помощь'
const p13 = document.createElement('p')
p13.classList.add('p3')
p13.textContent = 'Помощь'
const p14 = document.createElement('p')
p14.textContent = 'Помощь'
const p15 = document.createElement('p')
p15.textContent = 'Помощь'

help.append(h24, p13, p14, p15)
adres.append(h23, p10, p11, p12)
contacts.append(h22, p7, p8, p9)
end.append(contacts, adres, help)
online.append(img5, img6, img7)
footer.append(sm, online, end)

body.append(header, main, footer)