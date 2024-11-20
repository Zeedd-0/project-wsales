// use of data- attribute to change values
// ================================================== CLASS
class WolFamilyProduct {
    constructor() {
        this.yearSubs = {
            monthlyPayment: {
                price: { month: 0, year: 0,},
                points: 0,
            },
            onePayment: {
                price: { month: 0, year: 0,},
                points: 0,
            },
            atsightPayment: {
                price: { year: 0,},
                points: 0,
            },
        };
        this.lifetimeSubs = {
            monthlyPayment: {
                price: { month: 0, year: 0,},
                points: 0,
            },
            onePayment: {
                price: { month: 0, year: 0,},
                points: 0,
            },
            atsightPayment: {
                price: { year: 0,},
                points: 0,
            },
        
        };
    };

    setValues(string) {
        if (string === 'wol') {
            this.yearSubs.monthlyPayment.price.month = 162;
            this.yearSubs.monthlyPayment.price.year = this.yearSubs.monthlyPayment.price.month * 12;
            this.yearSubs.onePayment.price.month = this.yearSubs.monthlyPayment.price.month;
            this.yearSubs.onePayment.price.year = this.yearSubs.monthlyPayment.price.year;
            this.yearSubs.atsightPayment.price.year = 1652;
            this.yearSubs.monthlyPayment.points = 0.5;
            this.yearSubs.onePayment.points = 2;
            this.yearSubs.atsightPayment.points = 2.5;

            this.lifetimeSubs.monthlyPayment.price.month = 266;
            this.lifetimeSubs.monthlyPayment.price.year = this.lifetimeSubs.monthlyPayment.price.month * 12;
            this.lifetimeSubs.onePayment.price.month = this.lifetimeSubs.monthlyPayment.price.month;
            this.lifetimeSubs.onePayment.price.year = this.lifetimeSubs.monthlyPayment.price.year;
            this.lifetimeSubs.atsightPayment.price.year = 2872;
            this.lifetimeSubs.monthlyPayment.points = 0.75;
            this.lifetimeSubs.onePayment.points = 2.5;
            this.lifetimeSubs.atsightPayment.points = 3;
        
        } else if (string === 'wolMulti') {
            this.yearSubs.monthlyPayment.price.month = 50;
            this.yearSubs.monthlyPayment.price.year = this.yearSubs.monthlyPayment.price.month * 12;
            this.yearSubs.onePayment.price.month = this.yearSubs.monthlyPayment.price.month;
            this.yearSubs.onePayment.price.year = this.yearSubs.monthlyPayment.price.year;
            this.yearSubs.atsightPayment.price.year = 570;
            this.yearSubs.monthlyPayment.points = 0.5;
            this.yearSubs.onePayment.points = 0.5;
            this.yearSubs.atsightPayment.points = 0.5;

            this.lifetimeSubs.monthlyPayment.price.month = this.yearSubs.monthlyPayment.price.month;
            this.lifetimeSubs.monthlyPayment.price.year = this.lifetimeSubs.monthlyPayment.price.month * 12;
            this.lifetimeSubs.onePayment.price.month =  this.lifetimeSubs.monthlyPayment.price.month;
            this.lifetimeSubs.onePayment.price.year = this.lifetimeSubs.monthlyPayment.price.year;
            this.lifetimeSubs.atsightPayment.price.year = this.lifetimeSubs.monthlyPayment.price.year;
            this.lifetimeSubs.monthlyPayment.points = 0.5;
            this.lifetimeSubs.onePayment.points = 0.5;
            this.lifetimeSubs.atsightPayment.points = 0.5;
        };
    };
}

class LiveFamilyProduct {
    constructor() {
        this.price = {
            subscription: 0,
            monthly: 0,
        };
        this.points = 0;
    };

    setValues(string) {
        if (string === 'live') {
            this.price.subscription = 250;
            this.price.monthly = 198;
            this.points = 1;
        
        } else if (string === 'liveMulti') {
            this.price.subscription = 60;
            this.price.monthly = 60;
            this.points = 0.5;
        };
    };
}

class WolFamilyComission {
    constructor() {
        this.comission = {
            yearSubs: {
                default: 0,
                nubank: 0,
                atsight: 0,
                multi: 0,
            },
            lifetimeSubs: {
                default: 0,
                nubank: 0,
                atsight: 0,
                multi: 0,
            },
        };
    };

    setValues(string) {
        if (string === 'white') {
            this.comission.yearSubs.default = 194.4;
            this.comission.yearSubs.nubank = 178.85;
            this.comission.yearSubs.atsight = 165.20;
            this.comission.yearSubs.multi = 60;

            this.comission.lifetimeSubs.default = 319.2;
            this.comission.lifetimeSubs.nubank = 293.66;
            this.comission.lifetimeSubs.atsight = 287.20;
            this.comission.lifetimeSubs.multi = 60;

        } else if (string === 'blue') {
            this.comission.yearSubs.default = 285.77
            this.comission.yearSubs.nubank = 262.91;
            this.comission.yearSubs.atsight = 242.84;
            this.comission.yearSubs.multi = 88.20;

            this.comission.lifetimeSubs.default = 469.22;
            this.comission.lifetimeSubs.nubank = 431.69;
            this.comission.lifetimeSubs.atsight = 422.18;
            this.comission.lifetimeSubs.multi = 88.20;

        } else if (string === 'gold') {
            this.comission.yearSubs.default = 334.09;
            this.comission.yearSubs.nubank = 316.56;
            this.comission.yearSubs.atsight = 292.4;
            this.comission.yearSubs.multi = 106.2;

            this.comission.lifetimeSubs.default = 564.98;
            this.comission.lifetimeSubs.nubank = 519.79;
            this.comission.lifetimeSubs.atsight = 508.34;
            this.comission.lifetimeSubs.multi = 106.2;
            
        } else if (string === 'black') {
            this.comission.yearSubs.default = 382.97;
            this.comission.yearSubs.nubank = 352.33;
            this.comission.yearSubs.atsight = 325.44;
            this.comission.yearSubs.multi = 118.2;

            this.comission.lifetimeSubs.default = 628.82;
            this.comission.lifetimeSubs.nubank = 578.52;
            this.comission.lifetimeSubs.atsight = 565.78;
            this.comission.lifetimeSubs.multi = 118.2;
        };
    };
}

class LiveFamilyComission {
    constructor() {
        this.comission = {
            live: 0,
            multi: 0,
        };
    };

    setValues(string) {
        if (string === 'white') {
            this.comission.live = 126;
            this.comission.multi = 30;

        } else if (string === 'blue') {
            this.comission.live = 185;
            this.comission.multi = 44;

        } else if (string === 'gold') {
            this.comission.live = 223;
            this.comission.multi = 53;
            
        } else if (string === 'black') {
            this.comission.live = 248;
            this.comission.multi = 59;
        };
    };
}

// ------------------------------------------- variables from class
const WOL = new WolFamilyProduct();
const WOL_MULTI = new WolFamilyProduct();
const LIVE = new LiveFamilyProduct();
const LIVE_MULTI = new LiveFamilyProduct();
const WHITE_COMISSION = new WolFamilyComission();
const BLUE_COMISSION = new WolFamilyComission();
const GOLD_COMISSION = new WolFamilyComission();
const BLACK_COMISSION = new WolFamilyComission();
const WHITE_LIVE_COMISSION = new LiveFamilyComission();
const BLUE_LIVE_COMISSION = new LiveFamilyComission();
const GOLD_LIVE_COMISSION = new LiveFamilyComission();
const BLACK_LIVE_COMISSION = new LiveFamilyComission();

WOL.setValues('wol');
WOL_MULTI.setValues('wolMulti');
LIVE.setValues('live');
LIVE_MULTI.setValues('liveMulti');
WHITE_COMISSION.setValues('white');
BLUE_COMISSION.setValues('blue');
GOLD_COMISSION.setValues('gold');
BLACK_COMISSION.setValues('black');
WHITE_LIVE_COMISSION.setValues('white');
BLUE_LIVE_COMISSION.setValues('blue');
GOLD_LIVE_COMISSION.setValues('gold');
BLACK_LIVE_COMISSION.setValues('black');


// ================================================== FUNCTION
// ------------------------------------------- main
(function main() {
    priceValues();
    secondaryValues();
    comissionValues();
})();


function priceValues() {
    (function wolPrice() {
        const PRODUCT = {
            wol: WOL,
            wolMulti: WOL_MULTI,
        };
        const SUBS_TYPE = [
            'lifetimeSubs',
            'yearSubs'
        ];
        const PRICE = [
            "year",
            "month"
        ];
        const PAYMENT_TYPE = [
            'atsightPayment',
            'monthlyPayment',
            'onePayment',
        ];

        Object.keys(PRODUCT).forEach(product => {
            SUBS_TYPE.forEach(sub => {
                PAYMENT_TYPE.forEach(payment => {
                    PRICE.forEach(price => {
                        const POINTS = PRODUCT[product][sub][payment].points;
                        const PRICE = PRODUCT[product][sub][payment].price[price];
                        const DATA_VALUE_POINTS = `${product}-${sub}-${payment}-points`;
                        const DATA_VALUE_PRICE = `${product}-${sub}-${payment}-price-${price}`;
        
                        document.querySelectorAll(`[data-value="${DATA_VALUE_POINTS}"]`)
                            .forEach(el => el.innerText = formatNumber(POINTS, 'points'));
                        document.querySelectorAll(`[data-value="${DATA_VALUE_PRICE}"]`)
                            .forEach(el => el.innerText = formatNumber(PRICE));
                    });
                });
            });
        });
    })();
    
    (function livePrice() {
        const PRODUCT = {
            live: LIVE,
            liveMulti: LIVE_MULTI,
        };
        const PAYMENT = [
            'subscription',
            'monthly'
        ];
        Object.keys(PRODUCT).forEach(product => {
            PAYMENT.forEach(payment => {
                const POINTS = PRODUCT[product].points;
                const PRICE = PRODUCT[product].price[payment];
                const DATA_VALUE_POINTS = `${product}-points`;
                const DATA_VALUE_PRICE = `${product}-${payment}-price`;
    
                document.querySelectorAll(`[data-value="${DATA_VALUE_POINTS}"]`)
                    .forEach(el => el.innerText = formatNumber(POINTS, 'points'));
                document.querySelectorAll(`[data-value="${DATA_VALUE_PRICE}"]`)
                    .forEach(el => el.innerText = formatNumber(PRICE));
            });
        });
    })();
}


function secondaryValues() {
    const SUBS_TYPE = [
        'lifetimeSubs',
        'yearSubs'
    ];
    const PAYMENT_TYPE = [
        'atsightPayment',
        'onePayment',
    ];
    const PRICE_SET = [
        'wol-wolMulti',
        'wol-wolMulti-live',
        'wol-wolMulti-live-liveMulti',
    ];

    SUBS_TYPE.forEach(sub => {
        PAYMENT_TYPE.forEach(payment => {
            PRICE_SET.forEach(set => {

                let value_price_total = 0;
                let value_points = 0;
                let value_price_atsale = 0;
                let value_price_monthly = 0;

                if (set === 'wol-wolMulti') {
                    value_price_total = WOL[sub][payment].price.year + WOL_MULTI[sub][payment].price.year;
                    value_points = WOL[sub][payment].points + WOL_MULTI[sub][payment].points;
                    if (payment === 'atsightPayment') {
                        value_price_atsale = value_price_total;
                        value_price_monthly = '';
                    } else if (payment === 'onePayment') {
                        value_price_atsale = '';
                        value_price_monthly = WOL[sub][payment].price.month + WOL_MULTI[sub][payment].price.month;      
                    };

                } else if (set === 'wol-wolMulti-live') {
                    value_price_total = WOL[sub][payment].price.year + WOL_MULTI[sub][payment].price.year + LIVE.price.subscription;
                    value_points = WOL[sub][payment].points + WOL_MULTI[sub][payment].points + LIVE.points;
                    if (payment === 'atsightPayment') {
                        value_price_atsale = value_price_total;
                        value_price_monthly = LIVE.price.monthly;
                    } else if (payment === 'onePayment') {
                        value_price_atsale = LIVE.price.subscription;
                        value_price_monthly = WOL[sub][payment].price.month + WOL_MULTI[sub][payment].price.month + LIVE.price.monthly;      
                    };

                } else if (set === 'wol-wolMulti-live-liveMulti') {
                    value_price_total = WOL[sub][payment].price.year + WOL_MULTI[sub][payment].price.year + LIVE.price.subscription + LIVE_MULTI.price.subscription;
                    value_points = WOL[sub][payment].points + WOL_MULTI[sub][payment].points + LIVE.points + LIVE_MULTI.points;
                    if (payment === 'atsightPayment') {
                        value_price_atsale = value_price_total;
                        value_price_monthly = LIVE.price.monthly + LIVE_MULTI.price.monthly;
                    } else if (payment === 'onePayment') {
                        value_price_atsale = LIVE.price.subscription + LIVE_MULTI.price.subscription;
                        value_price_monthly = WOL[sub][payment].price.month + WOL_MULTI[sub][payment].price.month + LIVE.price.monthly + LIVE_MULTI.price.monthly;
                    };

                };

                const DATA_VALUE_PRICE_TOTAL = `wol-${sub}-${payment}-${set}-price-total`;
                const DATA_VALUE_PRICE_MONTHLY = `wol-${sub}-${payment}-${set}-price-monthly`;
                const DATA_VALUE_PRICE_ATSALE = `wol-${sub}-${payment}-${set}-price-atsale`;
                const DATA_VALUE_POINTS = `wol-${sub}-${payment}-${set}-points`;

                document.querySelectorAll(`[data-value="${DATA_VALUE_PRICE_TOTAL}"]`)
                    .forEach(el => el.innerText = formatNumber(value_price_total));
                document.querySelectorAll(`[data-value="${DATA_VALUE_PRICE_MONTHLY}"]`)
                    .forEach(el => el.innerText = formatNumber(value_price_monthly));
                document.querySelectorAll(`[data-value="${DATA_VALUE_PRICE_ATSALE}"]`)
                    .forEach(el => el.innerText = formatNumber(value_price_atsale));
                document.querySelectorAll(`[data-value="${DATA_VALUE_POINTS}"]`)
                    .forEach(el => el.innerText = formatNumber(value_points, 'points'));                    

            });
        });
    });
}


function comissionValues() {
    const SUBS_TYPE = [
        'lifetimeSubs',
        'yearSubs'
    ];
    const PAYMENT_TYPE = [
        'default',
        'nubank',
        'atsight',
        'multi',
    ];

    (function wolComission() {
        const LEVEL = {
            white: WHITE_COMISSION,
            blue: BLUE_COMISSION,
            gold: GOLD_COMISSION,
            black: BLACK_COMISSION,
        };
        SUBS_TYPE.forEach(sub => {
            PAYMENT_TYPE.forEach(payment => {
                Object.keys(LEVEL).forEach(level => {
                    const DATA_VALUE = `wol-${sub}-${payment}-comission-${level}`;
                    const VALUE = LEVEL[level].comission[sub][payment];
                    document.querySelectorAll(`[data-value="${DATA_VALUE}"]`)
                        .forEach(el => el.innerText = formatNumber(VALUE, 'comission'));
                });
            });
        });
    })();

    (function liveComission() {
        const LEVEL = {
            white: WHITE_LIVE_COMISSION,
            blue: BLUE_LIVE_COMISSION,
            gold: GOLD_LIVE_COMISSION,
            black: BLACK_LIVE_COMISSION,
        };
        Object.keys(LEVEL).forEach(level => {
            const DATA_VALUE = `live-comission-${level}`;
            const DATA_VALUE_MULTI = `live-multi-comission-${level}`;
            const VALUE = LEVEL[level].comission.live;
            const VALUE_MULTI = LEVEL[level].comission.multi;
            document.querySelectorAll(`[data-value="${DATA_VALUE}"]`)
                .forEach(el => el.innerText = formatNumber(VALUE, 'comission'));
            document.querySelectorAll(`[data-value="${DATA_VALUE_MULTI}"]`)
                .forEach(el => el.innerText = formatNumber(VALUE_MULTI, 'comission'));
        });
    })();
}


// ------------------------------------------- aux
function formatNumber(number, type = '') {
    let stringNumber = number.toString().replace('.', ',');
    let newNumber = '';
    if (type === 'points') {
        if (stringNumber.match(',')) {
        } else {
            stringNumber += ',0';
        };
        newNumber = stringNumber;
    } else {
        let i = 3;
        if (type === 'comission') {
            stringNumber += stringNumber.match(',') ? '00' : ',00';
            stringNumber = stringNumber.slice(0, stringNumber.indexOf(',') + 3);
            i = 6;
        };
        const REVERSED = stringNumber.split('').reverse();
        for (i; i < REVERSED.length; i += 4) {
            REVERSED.splice(i, 0, '.');
        };
        newNumber = REVERSED.reverse().join('');
    };
    return newNumber;
}


// ================================================== EVENT
// ------------------------------------------- eventlisteners
document.querySelectorAll(`#flowchart-section div[id^="flowchart-"]`)
    .forEach(el => {
        el.addEventListener('mouseenter', event => {
            if (event.target.id.match(/^flowchart-/)) {
                const CURRENT_TARGET = event.target.id;
                document.querySelectorAll('#flowchart-section div[id^="flowchart-"]')
                    .forEach(el => {
                        if (el.id !== CURRENT_TARGET) {
                            el.classList.add('grey-out');
                        };
                    });
            };
        });

        el.addEventListener('mouseleave', event => {
            document.querySelectorAll('#flowchart-section div[id^="flowchart-"]')
            .forEach(el => {
                el.classList.remove('grey-out');
            });
        });
    });

    // ------------------------------------------- function