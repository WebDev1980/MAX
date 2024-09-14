function switchLanguage(lang) {
    const esParagraphs = document.querySelectorAll('.MAX-article-1 p.spanish, .MAX-text.spanish, .footer-text.spanish, .images.spanish');
    const enParagraphs = document.querySelectorAll('.MAX-article-1 p.english, .MAX-text.english, .footer-text.english, .images.english');
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');

    if (lang === 'es') {
        esParagraphs.forEach(p => {
            p.style.display = 'block';
            p.style.opacity = '1';
        });
        enParagraphs.forEach(p => {
            p.style.display = 'none';
        });
        btnEs.style.backgroundColor = '#db9e41';
        btnEn.style.backgroundColor = '';
    } else if (lang === 'en') {
        esParagraphs.forEach(p => {
            p.style.display = 'none';
        });
        enParagraphs.forEach(p => {
            p.style.display = 'block';
            p.style.opacity = '1';
        });
        btnEn.style.backgroundColor = '#db9e41';
        btnEs.style.backgroundColor = '';
    }
}