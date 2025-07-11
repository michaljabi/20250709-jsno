import { createConsola } from 'consola'

function makeLogger(tag) {
    return createConsola({
        defaults: {
            tag
        },
        level: 5 // debug
    })
}


;(function fromHeader() {

    const logger = makeLogger('HeaderComponent')

    logger.log('Hello from Header')
    setTimeout(() => {
        logger.warn('Im working fine !')
    }, 4000)
})();

;(function FooterComponent() {
    const logger = makeLogger(FooterComponent.name);

    logger.debug('Hello from Footer')
    setTimeout(() => {
        logger.debug('Im working fine !')
    }, 2000)
})();