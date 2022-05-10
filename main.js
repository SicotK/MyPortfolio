let  mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(L=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

LinkWork.forEach(L=> l.addEventListener('click', activeWork))


