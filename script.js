//ДІСТАЄМ ТІЛО
const body = document.querySelector('body');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

//ДЛЯ МОДАЛОК
let ismodalactive = true;


//ДРОПДАУН МЕНУ (самий надійний)
const dropdownbtn = document.querySelector('#dropdownbtn');
const dropdownmenu = document.querySelector('#dropdownmenu');

dropdownbtn.addEventListener('click', () => {
    if(!dropdownmenu.classList.contains('animatedropdown')){
        dropdownmenu.classList.remove('animatedropup');

        dropdownmenu.classList.add('showdropdown');
        dropdownmenu.classList.add('animatedropdown');
    }else{
        dropdownmenu.classList.toggle('animatedropdown');
        dropdownmenu.classList.add('animatedropup');
    }
});

document.addEventListener('click', (event) => {
    if(dropdownmenu.classList.contains('animatedropdown') && !event.target.classList.contains('non-click') && !event.target.classList.contains('header_container_right_dark') && !event.target.classList.contains('header_container_right_dark--theme') && event.target.tagName !== 'ellipse'){
        dropdownmenu.classList.toggle('animatedropdown');
        dropdownmenu.classList.add('animatedropup');
    };
});

//МІНЄЯМ ТІМУ
const themebtn = document.querySelector('#themebtn');
const lightsvg = document.querySelector('.header_container_right_dark--lightsvg');
const darksvg = document.querySelector('.header_container_right_dark--darksvg');
const header = document.querySelector('.header');

const ddmopts = document.querySelectorAll('.ddm_options_opt');

const backhover = (event) => {
    event.target.style.opacity = '0.5';
};

const leavehover = (event) => {
    event.target.style.opacity = '1';
};

document.querySelector('.gs').style.setProperty('--before-bg', '#000000');

document.querySelector('.header_container_right_dark').addEventListener('click', () => {
    if(!lightsvg.classList.contains('light-right')){
        lightsvg.classList.remove('light-left');
        darksvg.classList.remove('dark-left');

        lightsvg.classList.add('light-right');
        darksvg.classList.add('dark-right');

        document.querySelectorAll('a, button, p:not(.no-theme), div:not(.no-theme), section, header, svg, path').forEach(element => {
            element.style.color = 'white';
            element.style.backgroundColor = 'black';
            element.style.stroke = 'white';
        });

        ddmopts.forEach(opt => {
            opt.addEventListener('mouseenter', backhover);
            opt.addEventListener('mouseleave', leavehover);
        });

        darksvg.style.stroke = 'black';
        document.querySelector('.gs').style.setProperty('--before-bg', '#FFFFFF');

        document.querySelectorAll('.ksp_container_var--btn, .year_container_form--btn, .num_container_form--btn, .year_container_form, .num_container_form, .bbtn').forEach(element => {
            element.style.setProperty('border', '1px solid #FFFFFF');
        });
    } else{
        lightsvg.classList.remove('light-right');
        darksvg.classList.remove('dark-right');

        lightsvg.classList.add('light-left');
        darksvg.classList.add('dark-left');

        document.querySelectorAll('a, button, p:not(.no-theme), div:not(.no-theme), section, header, svg, path').forEach(element => {
            element.style.removeProperty('color');
            element.style.removeProperty('background-color');
            element.style.removeProperty('stroke');
        });

        ddmopts.forEach(opt => {
            opt.removeEventListener('mouseenter', backhover);
            opt.removeEventListener('mouseleave', leavehover);
        });

        document.querySelector('.gs').style.setProperty('--before-bg', '#000000');

        document.querySelectorAll('.ksp_container_var--btn, .year_container_form--btn, .num_container_form--btn, .year_container_form, .num_container_form, .bbtn').forEach(element => {
            element.style.removeProperty('border');
        });
    }
});

//МОДАЛКА №1
const modalinput = document.querySelector('#modalinput');
const modalsub = document.querySelector('#modalsub');
const username = document.querySelector('#username');
const modalw = document.querySelector('#modalw');
const modalcross = document.querySelector('#modalcross');

const modalwtwo = document.querySelector('#modalwtwo');
const modalwtwocross = document.querySelector('#modalwtwocross');

modalsub.addEventListener('click', (e) => {
    e.preventDefault();

    if(!modalinput.value.trim().length == 0){
        modalw.style.display = 'none';
        username.textContent = modalinput.value;
        // modal 2
        modalwtwo.style.display = 'block';
        modalwtwocross.addEventListener('click', () => {
            modalwtwo.style.display = 'none';
            ismodalactive = false;
            body.style.background = 'none';
            //opacity
            header.style.opacity = 1;
            main.style.opacity = 1;
            footer.style.opacity = 1;
        });
    } else{
        modalinput.placeholder = 'Incorrect name';
        modalinput.classList.add('red-placeholder');
        modalinput.value = '';
    }
});

modalcross.addEventListener('click', () => {
    modalw.style.display = 'none';
    ismodalactive = false;
    body.style.background = 'none';
    //opacity
    header.style.opacity = 1;
    main.style.opacity = 1;
    footer.style.opacity = 1;
});

if(ismodalactive){
    body.style.backgroundColor = 'black';
    modalw.style.opacity = 2;
    //opacity
    header.style.opacity = 0.8;
    main.style.opacity = 0.8;
    footer.style.opacity = 0.8;
    main.style.backgroundColor = 'white';
    footer.style.backgroundColor = 'white';
};

// ВИСІКОСНИЙ РІК
const testyear = document.querySelector('#testyear');
const yearinp = document.querySelector('#yearinp');
const yearres = document.querySelector('#yearres');

testyear.addEventListener('click', (e) => {
    e.preventDefault();

    if(yearinp.value % 1 != 0 && yearinp.value.length != 0){
        yearres.textContent = 'НЕ ПРАВИЛЬНИЙ РІК!!!!!';
        yearres.style.color = 'pink';
    } else if(yearinp.value % 4 == 0 && yearinp.value % 100 != 0 && yearinp.value.length != 0){
        yearres.textContent = 'Ви народилися у високосний рік!';
        // yearres.style.color = '#039900 !important';
        yearres.style.setProperty('color', '#039900', 'important');
    } else if(yearinp.value % 400 == 0 && yearinp.value.length != 0){
        yearres.textContent = 'Ви народилися у високосний рік!';
        // yearres.style.color = '#039900 !important';
        yearres.style.setProperty('color', '#039900', 'important');
    } else{
        yearres.textContent = 'Ви народилися не у високосний рік!';
        // yearres.style.color = '#990000 !important';
        yearres.style.setProperty('color', '#990000', 'important');
    }
});

// ГЕС ЗЕ НАМБЕР
const numtest = document.querySelector('#numtest');
const numinp = document.querySelector('#numinp');
const numres = document.querySelector('#numres');

numtest.addEventListener('click', (e) => {
    e.preventDefault();

    let gnum = Math.round(Math.random() * 10);

    if(numinp.value == gnum && numinp.value >= 0){
        numres.textContent = `Вітаю, ви вгадали число! (${gnum})`;
        numres.style.color = '#039900';
    } else if(numinp.value != gnum && numinp.value >= 0){
        numres.textContent = `Ви програли, комп’ютер загадав(${gnum})`;
        numres.style.color = '#990000';
    } else{
        numres.textContent = `ЦЕ НЕ-ЧИСЛО/ПОГАНЕ ЧИСЛО`;
        numres.style.color = 'pink';
    }
});

//КАМІНЬ-НОЖНИЦІ-ПАПІР
const stone = document.querySelector('#stone');
const scissors = document.querySelector('#scissors');
const paper = document.querySelector('#paper');
const compw = document.querySelector('#compw');
const userw = document.querySelector('#userw');
const wtchcomp = document.querySelector('#wtchcomp');

const kspres = document.querySelector('#kspres');

const counter = {
    user: 0,
    computer: 0
};

stone.addEventListener('click', () => {
    wtchcomp.textContent = 'Варіант комп’ютера';

    let rndmv = Math.round(Math.random() * 10);
    let m;

    if(rndmv >= 3 && rndmv <= 6){
        m = 'stone';
    } else if(rndmv > 6){
        m = 'scissors';
    } else{
        m = 'paper';
    };

    if(m == 'scissors'){
        kspres.textContent = 'Ви виграли раунд!';
        kspres.style.color = '#039900';
        counter.user++;
    } else if(m == 'paper'){
        kspres.textContent = 'Комп’ютер виграв раунд!';
        kspres.style.color = '#990000';
        counter.computer++;
    } else{
        kspres.textContent = 'нічия';
        kspres.style.color = 'pink';
    }

    wtchcomp.addEventListener('click', () => {
        wtchcomp.textContent = m;
    });

    compw.textContent = counter.computer;
    userw.textContent = counter.user;
});

scissors.addEventListener('click', () => {
    wtchcomp.textContent = 'Варіант комп’ютера';

    let rndmv = Math.round(Math.random() * 10);
    let m;

    if(rndmv >= 3 && rndmv <= 6){
        m = 'stone';
    } else if(rndmv > 6){
        m = 'scissors';
    } else{
        m = 'paper';
    };

    if(m == 'paper'){
        kspres.textContent = 'Ви виграли раунд!';
        kspres.style.color = '#039900';
        counter.user++;
    } else if(m == 'stone'){
        kspres.textContent = 'Комп’ютер виграв раунд!';
        kspres.style.color = '#990000';
        counter.computer++;
    } else{
        kspres.textContent = 'нічия';
        kspres.style.color = 'pink';
    }

    wtchcomp.addEventListener('click', () => {
        wtchcomp.textContent = m;
    });

    compw.textContent = counter.computer;
    userw.textContent = counter.user;
});

paper.addEventListener('click', () => {
    wtchcomp.textContent = 'Варіант комп’ютера';

    let rndmv = Math.round(Math.random() * 10);
    let m;

    if(rndmv >= 3 && rndmv <= 6){
        m = 'stone';
    } else if(rndmv > 6){
        m = 'scissors';
    } else{
        m = 'paper';
    };

    if(m == 'stone'){
        kspres.textContent = 'Ви виграли раунд!';
        kspres.style.color = '#039900';
        counter.user++;
    } else if(m == 'scissors'){
        kspres.textContent = 'Комп’ютер виграв раунд!';
        kspres.style.color = '#990000';
        counter.computer++;
    } else{
        kspres.textContent = 'нічия';
        kspres.style.color = 'pink';
    }

    wtchcomp.addEventListener('click', () => {
        wtchcomp.textContent = m;
    });

    compw.textContent = counter.computer;
    userw.textContent = counter.user;
});

//CALC
const fnum = document.querySelector('#fnum');
const snum = document.querySelector('#snum');
const plus = document.querySelector('#plus');
const mult = document.querySelector('#mult');
const minus = document.querySelector('#minus');
const devide = document.querySelector('#devide');
const eq = document.querySelector('#eq');
const opres = document.querySelector('#opres');

let currop;

plus.addEventListener('click', () => {
    currop = 'plus';
});

minus.addEventListener('click', () => {
    currop = 'minus';
});

mult.addEventListener('click', () => {
    currop = 'mult';
});

devide.addEventListener('click', () => {
    currop = 'devide';
});

eq.addEventListener('click', () => {
    const num1 = Number(fnum.value);
    const num2 = Number(snum.value);

    let result;

    switch(currop){
        case 'plus':
            result = num1 + num2;
            break;

        case 'minus':
            result = num1 - num2;
            break;

        case 'mult':
            result = num1 * num2;
            break;

        case 'devide':
            if(num2 === 0){
                opres.value = 'ERROR';
                return;
            };
            result = num1 / num2;
            break;

        default:
            opres.value = 'Choose op';
            return;
    }

    opres.value = result;
});

//TIME CALC
const timeinp = document.querySelector('#timeinp');
const timeres = document.querySelector('#timeres');
const timecalc = document.querySelector('#timecalc');

timecalc.addEventListener('click', (e) => {
    e.preventDefault();

    let timetocalc = timeinp.value;// 2900;
    
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let result = 0;

    if(timetocalc == 0){
        result = '00:00:00';
    }

    while(timetocalc != 0){

        timetocalc--;
        minutes++;

        if(minutes == 60){
            minutes = 0;
            hours++;
        }

        if(hours == 24){
            hours = 0;
            days++;
    }
   };

    if(hours < 10){
        hours = '0' + String(hours);
    }

    if(minutes < 10){
        minutes = '0' + String(minutes);
    }

    if(days > 0){
        result = `${days} dn. ${hours}:${minutes}:00`;
    } else if(timeinp.value == 0){
        result = `00:00:00`;
    } else if(days == 0){
        result = `${hours}:${minutes}:00`;
    }

    timeres.textContent = result;
});



//INPUT THREE NUMS
tnumf = document.querySelector('#tnumf');
tnums = document.querySelector('#tnums');
tnumt = document.querySelector('#tnumt');
tnumres = document.querySelector('#tnumres');


function maxNum() {
    const max = Math.max(
        Number(tnumf.value),
        Number(tnums.value),
        Number(tnumt.value)
    );

    tnumres.textContent = `Найбільше число, яке ви ввели - ${max}`;
}


tnumf.addEventListener('input', maxNum);
tnums.addEventListener('input', maxNum);
tnumt.addEventListener('input', maxNum);



//footer subscribe
const subinp = document.querySelector('#subinp');
const subbtn = document.querySelector('#subbtn');

subbtn.addEventListener('click', (e) => {
    e.preventDefault();

    ismodalactive = true;

    if(!subinp.value.trim().length == 0){
        body.style.backgroundColor = 'black';
        modalw.style.opacity = 2;
        //opacity
        header.style.opacity = 0.8;
        main.style.opacity = 0.8;
        footer.style.opacity = 0.8;
        main.style.backgroundColor = 'white';
        footer.style.backgroundColor = 'white';
        modalwtwo.style.display = 'block';
        modalwtwocross.addEventListener('click', () => {
            modalwtwo.style.display = 'none';
            ismodalactive = false;
            body.style.background = 'none';
            //opacity
            header.style.opacity = 1;
            main.style.opacity = 1;
            footer.style.opacity = 1;
        });
    }else{
        subinp.placeholder = 'Incorrect value';
        subinp.classList.add('red-placeholder');
        subinp.value = '';
    }
});

main.style.backgroundColor = '#EEEEEE';