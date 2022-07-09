/**
 * KSB065 V0.010
 */
//% weight=10 color=#00A6F0 icon="\uf085" block="KSB065"
namespace KSB065 {

    let neoStrip: neopixel.Strip;
    let initialized = false;




    function init(): void {
        //pins.setPull(DigitalPin.P14, PinPullMode.PullUp);
        //pins.setPull(DigitalPin.P15, PinPullMode.PullUp);


        initialized = true;
    }



    /**
    * P1
    */
    //% blockId=KSB065_Slider
    //% block="Slider"
    //% weight=99
    export function Slider(): number {

        return pins.analogReadPin(AnalogPin.P1);;
    }

    /**
    * P4
    */
    //% blockId=KSB065_Light
    //% block="Light"
    //% weight=99
    export function Light(): number {

        return pins.analogReadPin(AnalogPin.P4);;
    }

    /**
    * P7
    */
    //% blockId=KSB065_Relay
    //% block="Relay trig %trig"
    //% weight=99
    export function Relay(trig: number): void {

        pins.digitalWritePin(DigitalPin.P7, trig);
    }

    /**
    * P14
    */
    //% blockId=KSB065_Ultrasonic
    //% block="Ultrasonic(cm)"
    //% weight=98
    export function Ultrasonic(): number {

        let maxCmDistance = 500
        // send pulse
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        pins.digitalWritePin(DigitalPin.P14, 0);
        control.waitMicros(2);
        pins.digitalWritePin(DigitalPin.P14, 1);
        control.waitMicros(10);
        pins.digitalWritePin(DigitalPin.P14, 0);

        const d = pins.pulseIn(DigitalPin.P14, PulseValue.High, maxCmDistance * 58);
        // read pulse

        return Math.idiv(d, 58);
    }

    /**
    * P6 P1
    */
    //% blockId=KSB065_Motor 
    //% block="Motor speed %speed"
    //% weight=85
    //% speed.min=-255 speed.max=255
    export function Motor(speed: number): void {
        if (!initialized) {
            init()
        }

        if (speed >= 0) {
            pins.digitalWritePin(DigitalPin.P6, 1)
            pins.analogWritePin(AnalogPin.P1, 1023-(speed*4))
            
        } else {
            pins.digitalWritePin(DigitalPin.P6, 0)
            pins.analogWritePin(AnalogPin.P1, -(speed*4))
        }


    }

    

    /**
    * P10
    */
    //% blockId="KSB065_RGB1" 
    //% block="RGB LED1"
    //% weight=96
    export function RGB_LED1(): neopixel.Strip {
        if (!neoStrip) {
            neoStrip = neopixel.create(DigitalPin.P10, 4, NeoPixelMode.RGB)

        }

        return neoStrip.range(0, 1);
    }
    /**
    * P10
    */
    //% blockId="KSB065_RGB2" 
    //% block="RGB LED2"
    //% weight=95
    export function RGB_LED2(): neopixel.Strip {
        if (!neoStrip) {
            neoStrip = neopixel.create(DigitalPin.P10, 4, NeoPixelMode.RGB)

        }

        return neoStrip.range(1, 1);
    }
    /**
    * P10
    */
    //% blockId="KSB065_RGB3" 
    //% block="RGB LED3"
    //% weight=94
    export function RGB_LED3(): neopixel.Strip {
        if (!neoStrip) {
            neoStrip = neopixel.create(DigitalPin.P10, 4, NeoPixelMode.RGB)

        }

        return neoStrip.range(2, 1);
    }
    /**
    * P10
    */
    //% blockId="KSB065_RGB4" 
    //% block="RGB LED4"
    //% weight=93
    export function RGB_LED4(): neopixel.Strip {
        if (!neoStrip) {
            neoStrip = neopixel.create(DigitalPin.P10, 4, NeoPixelMode.RGB)

        }

        return neoStrip.range(3, 1);
    }
    /**
    * P10
    */
    //% blockId="KSB065_RGB" 
    //% block="RGB LED Setting"
    //% weight=92
    export function RGB_LED(): neopixel.Strip {
        if (!neoStrip) {
            neoStrip = neopixel.create(DigitalPin.P10, 4, NeoPixelMode.RGB)

        }

        return neoStrip;
    }



}