
const config = require('../configuration')
const Kefir = require('kefir')
const Gpio = require('onoff').Gpio

const pin2 = new Gpio(2, 'out')
const pin3 = new Gpio(3, 'out')
const pin4 = new Gpio(4, 'out')
const pin5 = new Gpio(5, 'out')
const pin6 = new Gpio(6, 'out')
const pin7 = new Gpio(7, 'out')
const pin8 = new Gpio(8, 'out')
const pin9 = new Gpio(9, 'out')
const pin10 = new Gpio(10, 'out')
const pin11 = new Gpio(11, 'out')
const pin12 = new Gpio(12, 'out')
const pin13 = new Gpio(13, 'out')
const pin14 = new Gpio(14, 'out')
const pin15 = new Gpio(15, 'out')
const pin16 = new Gpio(16, 'out')

const pin17 = new Gpio(17, 'in', 'both')
const pin18 = new Gpio(18, 'in', 'both')
const pin19 = new Gpio(19, 'in', 'both')
const pin20 = new Gpio(20, 'in', 'both')
const pin21 = new Gpio(21, 'in', 'both')
const pin22 = new Gpio(22, 'in', 'both')
const pin23 = new Gpio(23, 'in', 'both')

const pin24 = new Gpio(24, 'out')
const pin25 = new Gpio(25, 'out')

pin2.writeSync(1)
pin3.writeSync(1)
pin4.writeSync(1)
pin5.writeSync(1)
pin6.writeSync(1)
pin7.writeSync(1)
pin8.writeSync(1)
pin9.writeSync(1)
pin10.writeSync(1)
pin11.writeSync(1)
pin12.writeSync(1)
pin13.writeSync(1)
pin14.writeSync(1)
pin15.writeSync(1)
pin16.writeSync(1)
pin24.writeSync(1)
pin25.writeSync(1)

var emit
var dispenseStream = Kefir.stream(emitter => {
    emit = emitter.emit
}).skipDuplicates()
  .filter(ev => ev.resourceId === config.resourceId)
  .filter( ev => ev.type === 'resource-used' )
  .onValue(vend)

function setLow(pin){
    pin.writeSync(1)
}

function highLow(pin){
    console.log('pin triggered')
    pin.writeSync(0)
    setTimeout( ()=> {
        pin.writeSync(1)
    }, 1000)
}

function vend(usedEv){
    console.log("vending:", usedEv)
    switch (usedEv.notes){
        case 'A':
            highLow(pin4)
            break
        case 'B':
            highLow(pin5)
            break
        case 'C':
            highLow(pin6)
            break
        case 'D':
            highLow(pin12)
            break
        case 'E':
            highLow(pin13)
            break
        case 'F':
            highLow(pin16)
            break
    }
}

module.exports = function( ev ){
    emit(ev)
}
