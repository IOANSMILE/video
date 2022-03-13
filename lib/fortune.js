
exports.getFortune =   () => {
    let fortunesCooki = [
        'Первое',
        'Второе',
        'Третье',
        'Четыре',
        'Пять',
        'Шесть'
    ]
    const idx = Math.floor(Math.random()* fortunesCooki.length)
    return fortunesCooki[idx]
}