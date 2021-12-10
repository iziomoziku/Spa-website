const specialist_1 = document.querySelector('.specialists-name-1')
const specialist_2 = document.querySelector('.specialists-name-2')
const specialist_3 = document.querySelector('.specialists-name-3')

const specialist_img_1 = document.querySelector('.specialists-img-1')
const specialist_img_2 = document.querySelector('.specialists-img-2')
const specialist_img_3 = document.querySelector('.specialists-img-3')

const about_ref_toggle_1 = document.querySelector('#about-ref-toggle-1')
const about_ref_toggle_2 = document.querySelector('#about-ref-toggle-2')
const about_ref_toggle_3 = document.querySelector('#about-ref-toggle-3')

/*
The reason i decided to run header() function in here
is that with the .hero-placeholder, I also want to add
a header.
*/
$(".hero-placeholder").load("hero.html", () => {
    header()

    if (document.title === 'About') {
        about()
    } else if (document.title === 'Massage') {
        massage()
    } else if (document.title === 'Manicure and pedicure') {
        mani_pedi()
    }
})

function header() {
    $(".header-placeholder").load("header.html", () => {
        const ham = document.querySelector('.header-hamburger')
        const headerWrapper = document.querySelector('.header-nav-wrapper')
        const close = document.querySelector('.header-close')
    
        function navigation() {
            headerWrapper.style.right = '0'
            headerWrapper.style.display = 'flex'
        }
    
        function closeNavigation() {
            headerWrapper.style.right = '-66%'
            headerWrapper.style.display = 'none'
        }
    
        if (ham) {
            ham.addEventListener('click', navigation)
        }
    
        if (close) {
            close.addEventListener('click', closeNavigation)
        }
    });
}

function darkHeader() {
    $(".darkHeader-placeholder").load("darkHeader.html", () => {
        const ham = document.querySelector('.header-hamburger')
        const headerWrapper = document.querySelector('.header-nav-wrapper')
        const close = document.querySelector('.header-close')
    
        function navigation() {
            headerWrapper.style.right = '0'
            headerWrapper.style.display = 'flex'
        }
    
        function closeNavigation() {
            headerWrapper.style.right = '-66%'
            headerWrapper.style.display = 'none'
        }
    
        if (ham) {
            ham.addEventListener('click', navigation)
        }
    
        if (close) {
            close.addEventListener('click', closeNavigation)
        }
    });
}

function loginHeader() {
    $(".loginDarkHeader-placeholder").load("loginDarkHeader.html", () => {
        const ham = document.querySelector('.header-hamburger')
        const headerWrapper = document.querySelector('.header-nav-wrapper')
        const close = document.querySelector('.header-close')
    
        function navigation() {
            headerWrapper.style.right = '0'
            headerWrapper.style.display = 'flex'
        }
    
        function closeNavigation() {
            headerWrapper.style.right = '-66%'
            headerWrapper.style.display = 'none'
        }
    
        if (ham) {
            ham.addEventListener('click', navigation)
        }
    
        if (close) {
            close.addEventListener('click', closeNavigation)
        }
    });
}

header()
darkHeader()
loginHeader()

// $(".reference-placeholder").load("reference.html")


function about() {
    const title = document.querySelector('.hero-title')
    const description = document.querySelector('.hero-subtitle')
    const bg_img = document.querySelector('.hero')

    bg_img.style.background = 'rgba(31, 30, 30, 0.822) url(pic/Images/About/About\ hero.jpg)'
    title.innerText = 'Your beauty, comfort, and satisfaction are our top priority'
    description.innerText = 'Come relax in our clean hygenic environment \
    while we pamper and take good care of you. '

}

function massage() {
    const title = document.querySelector('.hero-title')
    const description = document.querySelector('.hero-subtitle')

    title.innerText = 'Massage'
    description.innerText = 'Please enjoy our selection of massage options.  \
    From deep tissue massages to Swedish and hot massages. We have what you need.'

}

function mani_pedi() {
    const title = document.querySelector('.hero-title')
    const description = document.querySelector('.hero-subtitle')

    title.innerText = 'Manicure & Pedicure'
    description.innerText = 'Please enjoy our selection of manicure & pedicure options.  \
    From french manicures to polish pedicure application. We have what you need.'

}



$(".footer-placeholder").load("footer.html")


function specialist(e) {
    
    

    const specialists_content = document.querySelector('.specialists-content')

    const jordyn = 'Jordyn graduated from Marvel Beauty School with a aesthetics \
                    and makeup artistry diploma and completed her certification in Medical Esthetics \
                    from the Canadian Beauty College. After six years of skin care, Jordyn pursued her \
                    passion for relaxation massage and has been happily serving clients in the field for eight years.  '
    const jennifer = 'Cassidy has always been interested in the health care field and has been working \
                    and volunteering alongside several health care practitioners for the past 10 years. Her studies \
                    included skin theory, anatomy, chemical peels, microdermabrasion, facials and relaxation massage. \
                    She was passionate about her future career and ensured she learned all forms of esthetics. She \
                    comleted her Esthetician diploma from Lambton College'

    const cassidy = 'Jennifer is a highly motivated, enthusiastic and very personable Health \
                    Care Practitioner who has been in practice since 2010.  Jennifer graduated from the University \
                    of Toronto with a Bachelor’s Degree in Physical and Health Education. Further to her practice in \
                    Kinesiology, she pursued a career in Massage Therapy, graduating from Sutherland Chan School of \
                    Massage Therapy'

    if (e.target.value === 'Jordyn') {
        specialists_content.innerText = jordyn
        specialist_img_1.classList.add('specialists-img-on');
        specialist_1.classList.add('specialists-content-on')

        specialist_img_2.classList.remove('specialists-img-on')
        specialist_2.classList.remove('specialists-content-on')

        specialist_img_3.classList.remove('specialists-img-on')
        specialist_3.classList.remove('specialists-content-on')

    } else if (e.target.value === 'Jennifer') {
        specialists_content.innerText = jennifer
        specialist_img_2.classList.add('specialists-img-on');
        specialist_2.classList.add('specialists-content-on')

        specialist_img_1.classList.remove('specialists-img-on')
        specialist_1.classList.remove('specialists-content-on')

        specialist_img_3.classList.remove('specialists-img-on')
        specialist_3.classList.remove('specialists-content-on')

    } else if (e.target.value === 'Cassidy') {
        specialists_content.innerText = cassidy
        specialist_img_3.classList.add('specialists-img-on');
        specialist_3.classList.add('specialists-content-on')

        specialist_img_1.classList.remove('specialists-img-on')
        specialist_1.classList.remove('specialists-content-on')

        specialist_img_2.classList.remove('specialists-img-on')
        specialist_2.classList.remove('specialists-content-on')
    }

}





if (specialist_1) {
    specialist_1.addEventListener('click', specialist)
}

if (specialist_2) {
    specialist_2.addEventListener('click', specialist)
}

if (specialist_3) {
    specialist_3.addEventListener('click', specialist)
}

// specialist_img_3.addEventListener('click', specialist)
// specialist_img_3.addEventListener('click', specialist)
// specialist_img_3.addEventListener('click', specialist)

function cta(e) {
    const about_ref_content = document.querySelector('.about-ref-content')
    const referral_name = document.querySelector('.referral-name')
    const referral_company = document.querySelector('.referral-company')
    const referral_img = document.querySelector('.referral-img')


    const about_ref_toggle_1_name = 'Marry Curtis'
    const about_ref_toggle_2_name = 'Josephine Carrie'
    const about_ref_toggle_3_name = 'Abby King'

    // const about_ref_toggle_1_company = 'XYZ Corp'
    // const about_ref_toggle_2_company = 'ABC Alpha'
    // const about_ref_toggle_3_company = '123 Number'


    
    if (e.target.getAttribute('id') === 'about-ref-toggle-1') {
        about_ref_content.innerText = 'I‘ve been to your store multiple times and I \
                                        always love how clean, and the energy i get. I will recommend family and friends. \
                                        Thank you!'

        about_ref_toggle_1.classList.add('about-ref-toggle-on') 
        referral_name.innerText = about_ref_toggle_1_name
        // referral_company.innerText = about_ref_toggle_1_company
        referral_img.setAttribute('src', 'pic/Images/Home/Spa and Salon/Jennifer.png')


        about_ref_toggle_2.classList.remove('about-ref-toggle-on')
        about_ref_toggle_3.classList.remove('about-ref-toggle-on')

    } else if (e.target.getAttribute('id') === 'about-ref-toggle-2') {
        about_ref_content.innerText = 'Their team always does their best. Great results, very professional approach and very \
                                        knowledgeable. 5 Stars for sure! Highly recommended. '

        about_ref_toggle_2.classList.add('about-ref-toggle-on') 
        referral_name.innerText = about_ref_toggle_2_name
        // referral_company.innerText = about_ref_toggle_2_company
        referral_img.setAttribute('src', 'pic/Images/Home/Spa and Salon/Frank.png')

        about_ref_toggle_1.classList.remove('about-ref-toggle-on')
        about_ref_toggle_3.classList.remove('about-ref-toggle-on')

    } else if (e.target.getAttribute('id') === 'about-ref-toggle-3') {
        about_ref_content.innerText = 'So incredibly happy with my manicure and pedicure I had \
                                        done and can’t wait to go back for more services, professional, clean, amazing service, \
                                        and great to chat with if I could give them more than 5 stars I would!!'

        about_ref_toggle_3.classList.add('about-ref-toggle-on') 
        referral_name.innerText = about_ref_toggle_3_name
        // referral_company.innerText = about_ref_toggle_3_company
        referral_img.setAttribute('src', 'pic/Images/Home/Spa and Salon/Eliza.png')

        about_ref_toggle_2.classList.remove('about-ref-toggle-on')
        about_ref_toggle_1.classList.remove('about-ref-toggle-on')
    }
}

if (about_ref_toggle_1) {
    about_ref_toggle_1.addEventListener('click', cta)
}

if (about_ref_toggle_2) {
    about_ref_toggle_2.addEventListener('click', cta)
}

if (about_ref_toggle_3) {
    about_ref_toggle_3.addEventListener('click', cta)
}






