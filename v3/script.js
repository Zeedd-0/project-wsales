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
            atSightPayment: {
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
            atSightPayment: {
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
            this.yearSubs.atSightPayment.price.year = 1652;
            this.yearSubs.monthlyPayment.points = 0.5;
            this.yearSubs.onePayment.points = 2;
            this.yearSubs.atSightPayment.points = 2.5;

            this.lifetimeSubs.monthlyPayment.price.month = 266;
            this.lifetimeSubs.monthlyPayment.price.year = this.lifetimeSubs.monthlyPayment.price.month * 12;
            this.lifetimeSubs.onePayment.price.month = this.lifetimeSubs.monthlyPayment.price.month;
            this.lifetimeSubs.onePayment.price.year = this.lifetimeSubs.monthlyPayment.price.year;
            this.lifetimeSubs.atSightPayment.price.year = 2872;
            this.lifetimeSubs.monthlyPayment.points = 0.75;
            this.lifetimeSubs.onePayment.points = 2.5;
            this.lifetimeSubs.atSightPayment.points = 3;
        
        } else if (string === 'wolMulti') {
            this.yearSubs.monthlyPayment.price.month = 50;
            this.yearSubs.monthlyPayment.price.year = this.yearSubs.monthlyPayment.price.month * 12;
            this.yearSubs.onePayment.price.month = this.yearSubs.monthlyPayment.price.month;
            this.yearSubs.onePayment.price.year = this.yearSubs.monthlyPayment.price.year;
            this.yearSubs.atSightPayment.price.year = 570;
            this.yearSubs.monthlyPayment.points = 0.5;
            this.yearSubs.onePayment.points = 0.5;
            this.yearSubs.atSightPayment.points = 0.5;

            this.lifetimeSubs.monthlyPayment.price.month = this.yearSubs.monthlyPayment.price.month;
            this.lifetimeSubs.monthlyPayment.price.year = this.lifetimeSubs.monthlyPayment.price.month * 12;
            this.lifetimeSubs.onePayment.price.month =  this.lifetimeSubs.monthlyPayment.price.month;
            this.lifetimeSubs.onePayment.price.year = this.lifetimeSubs.monthlyPayment.price.year;
            this.lifetimeSubs.atSightPayment.price.year = this.lifetimeSubs.monthlyPayment.price.year;
            this.lifetimeSubs.monthlyPayment.points = 0.5;
            this.lifetimeSubs.onePayment.points = 0.5;
            this.lifetimeSubs.atSightPayment.points = 0.5;
        };
    };
}

class LiveFamilyProduct {
    constructor() {
        this.price = {
            subs: 0,
            monthly: 0,
        };
        this.points = 0;
    };

    setValues(string) {
        if (string === 'live') {
            this.price.subs = 250;
            this.price.monthly = 198;
            this.points = 1;
        
        } else if (string === 'liveMulti') {
            this.price.subs = 60;
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
                atSight: 0,
                multi: 0,
            },
            lifetimeSubs: {
                default: 0,
                nubank: 0,
                atSight: 0,
                multi: 0,
            },
        };
    };

    setValues(string) {
        if (string === 'white') {
            this.comission.yearSubs.default = 194.4;
            this.comission.yearSubs.nubank = 178.85;
            this.comission.yearSubs.atSight = 165.20;
            this.comission.yearSubs.multi = 60;

            this.comission.lifetimeSubs.default = 319.2;
            this.comission.lifetimeSubs.nubank = 293.66;
            this.comission.lifetimeSubs.atSight = 287.20;
            this.comission.lifetimeSubs.multi = 60;

        } else if (string === 'blue') {
            this.comission.yearSubs.default = 285.77
            this.comission.yearSubs.nubank = 262.91;
            this.comission.yearSubs.atSight = 242.84;
            this.comission.yearSubs.multi = 88.20;

            this.comission.lifetimeSubs.default = 469.22;
            this.comission.lifetimeSubs.nubank = 431.69;
            this.comission.lifetimeSubs.atSight = 422.18;
            this.comission.lifetimeSubs.multi = 88.20;

        } else if (string === 'gold') {
            this.comission.yearSubs.default = 334.09;
            this.comission.yearSubs.nubank = 316.56;
            this.comission.yearSubs.atSight = 292.4;
            this.comission.yearSubs.multi = 106.2;

            this.comission.lifetimeSubs.default = 564.98;
            this.comission.lifetimeSubs.nubank = 519.79;
            this.comission.lifetimeSubs.atSight = 508.34;
            this.comission.lifetimeSubs.multi = 106.2;
            
        } else if (string === 'black') {
            this.comission.yearSubs.default = 382.97;
            this.comission.yearSubs.nubank = 352.33;
            this.comission.yearSubs.atSight = 325.44;
            this.comission.yearSubs.multi = 118.2;

            this.comission.lifetimeSubs.default = 628.82;
            this.comission.lifetimeSubs.nubank = 578.52;
            this.comission.lifetimeSubs.atSight = 565.78;
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


const WOL_YEARSUBS_












document.querySelectorAll('[data-value="wol-multi-points"]')
.forEach(el => el.innerText = WOL_MULTI.yearSubs.monthlyPayment.points);

document.querySelectorAll('[data-value="live-multi-points"]')
.forEach(el => el.innerText = LIVE_MULTI.points);

document.querySelectorAll('[data-value="wol-lifetime-monthly-price-month"]')
.forEach(el => el.innerText = WOL.lifetimeSubs.monthlyPayment.price.month);

document.querySelectorAll('[data-value="wol-lifetime-monthly-price-year"]')
.forEach(el => el.innerText = WOL.lifetimeSubs.monthlyPayment.price.year);