const state = Object.freeze({
    today: new Date(),
    url: "apiurlhere"
})

const isDate = date => {
    return date instanceof Date
}

const handleDate = date => {
    if(isDate(date)) {
        return date
    }

    return new Date(date)
}

const printDate = datestring => {
    const days = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']
    const date = handleDate(datestring)

    return `${days[date.getDay()]}, ${date.toLocaleDateString()}`
}

const isToday = datestring => {
    const date = handleDate(datestring)

    if(date.toDateString() == state.today.toDateString()) {
        return true
    }

    return false
}

const isPastDate = datestring => {
    const date = handleDate(datestring)

    if (date < (new Date())) {
        return true
    }

    return false
}

const isHappening = (start, end) => {
    let dates = [ handleDate(start), handleDate(end) ].sort()
    const now = new Date()

    if( dates[0] <= now && now <= dates[1] ) {
        return true
    }

    return false
}

const getWeekNumber = datestring => {
    const date = handleDate(datestring)
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay()||7))
    const yearStart = new Date(Date.UTC(date.getUTCFullYear(),0,1))
    return Math.ceil((((date - yearStart) / 86400000) + 1)/7)
}

const getDateInterval = (a, b) => {
    const dateA = handleDate(a)
    const dateB = handleDate(b)

    return timeDelta(dateA, dateB)
}

const timeDelta = (a , b) => {
    let dates = [ handleDate(a), handleDate(b) ].sort()

    //Número total de segundos entre as duas datas
    let delta = Math.abs(dates[0] - dates[1]) / 1000;
    let isPast = isPastDate(dates[1])
    let Happening = isHappening(dates[0], dates[1])

    //Eu divido o delta pelo total de segundos em um ano
    let years = Math.floor(delta / 31557600)
    //e aí eu subtraio o total de tempo que os anos gastaram do delta
    delta -= years * 31557600;
    //Aqui eu faço a mesma coisa com os meses
    let months = Math.floor(delta / 2592000)
    delta -= months * 2592000;
    //E com os dias...e por aí vai
    let days = Math.floor(delta / 86400);
    delta -= days * 86400;

    let hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    let minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    let seconds = delta % 60;
    //No final eu retorno tudo num objeto
    return {
        years: years,
        months: months,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        isPast: isPast,
        inProgress: Happening
    }
}

const messagePast = (str) => {
    return `Há ${str}`
}

const messageFuture = (str) => {
    return `Daqui a ${str}`
}

const handlePlural = (str, num) => {
    if(num > 1 && num < -1) {
        if(str.toLowerCase.endsWith('es') || str.toLowerCase.endsWith('ês')) {
            return `${num} ${str}es`
        }
        return `${num} ${str}s`
    }
    return `${num} ${str}`
}

const assembleTimeMessage = obj => {
    let prepend;
    switch(obj) {
        case obj.isPast === true:
            prepend = 'Há'
        case obj.isPast === false:
            prepend = 'Daqui a'
        case obj.isHappening:
            prepend = 'Agora'
            break;
        case obj.years != 0:
            return `${prepend} ${handlePlural('ano', obj.years)}`
            break;
        case obj.months != 0:
            return `${prepend} ${handlePlural('mês', obj.months)}`
            break;
        case obj.days != 0:
            return `${prepend} ${handlePlural('dia', obj.days)}`
            break;
        case obj.hours != 0:
            return `${prepend} ${handlePlural('hora', obj.hours)}`
            break;
        case obj.minutes != 0:
            return `${prepend} ${handlePlural('minuto', obj.minutes)}`
            break;
        case obj.seconds != 0:
            return `${prepend} ${handlePlural('segundo', obj.seconds)}`
            break;
    }

}




const test = ["2018-04-01T00:00:00-03:00", "2018-04-02T00:00:00-03:00", "2018-04-04T00:00:00-03:00", "2018-04-08T00:00:00-03:00", "2018-04-09T00:00:00-03:00"]

test.map( data => getWeekNumber(data) )

//[13, 14, 14, 14, 15]
