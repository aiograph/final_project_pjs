//ДІСТАЄМ ТІЛО
const body = document.querySelector('body');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

//ДЛЯ МОДАЛОК
let ismodalactive = true;


//ДРОПДАУН МЕНУ (самий надійний)
const dropdownbtn = document.querySelector('#dropdownbtn');
const dropdownmenu = document.querySelector('#dropdownmenu');

const dropch = document.querySelector('#dropch');
const dropig = document.querySelector('#dropig');
const dropoz = document.querySelector('#dropoz');
const chs = document.querySelectorAll('.ch');
const igs = document.querySelectorAll('.ig');
const ozs = document.querySelectorAll('.oz');
const sections = document.querySelectorAll('section');

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

dropch.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.goawaydino').style.display = 'none';
    document.querySelector('.goawaydinoleft').style.display = 'none';
    document.querySelector('.goawaydinorigth').style.display = 'none';

    sections.forEach(section => {
        section.style.display = 'none';
    });

    chs.forEach(ch => {
        ch.style.display = 'block';
    });
});

dropig.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.goawaydino').style.display = 'block';
    document.querySelector('.goawaydinoleft').style.display = 'block';
    document.querySelector('.goawaydinorigth').style.display = 'block';

    sections.forEach(section => {
        section.style.display = 'none';
    });

    igs.forEach(ig => {
        ig.style.display = 'block';
    });
});

dropoz.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.goawaydino').style.display = 'none';
    document.querySelector('.goawaydinoleft').style.display = 'none';
    document.querySelector('.goawaydinorigth').style.display = 'none';

    sections.forEach(section => {
        section.style.display = 'none';
    });

    ozs.forEach(oz => {
        oz.style.display = 'block';
    });
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

        document.querySelectorAll('a, button, p:not(.no-theme), div:not(.no-theme), section, header, svg, path, footer').forEach(element => {
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

        document.querySelectorAll('.svg').forEach(svg => {
            svg.style.display = 'none';
        });
    } else{
        lightsvg.classList.remove('light-right');
        darksvg.classList.remove('dark-right');

        lightsvg.classList.add('light-left');
        darksvg.classList.add('dark-left');

        document.querySelectorAll('a, button, p:not(.no-theme), div:not(.no-theme), section, header, svg, path, footer').forEach(element => {
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

        document.querySelectorAll('.svg').forEach(svg => {
            svg.style.display = 'block';
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

//football
const field = document.querySelector('#field');
const ball = document.querySelector('#ball');

let rotation = 0;

field.addEventListener('click', (e) => { //layerX, layerY
    rotation += 360;
    ball.style.transform = `translate(${e.layerX - 115}px, ${e.layerY - 108}px) rotate(${rotation}deg)`;
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

//СЛайдерок
const slider = document.querySelector('.ourteam_wrapper_slider');
const next = document.querySelector('.ourteam--next');
const prev = document.querySelector('.ourteam--prev');
const dots = document.querySelectorAll('.dot');

let index = 0;

const updatebtns = () => {
    prev.classList.toggle('slider-disabled', index === 0);
    next.classList.toggle('slider-disabled', index === 6);
};

const updatedots = () => {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
};

next.addEventListener('click', () => {
    if(index < 6){
        index++;
        slider.style.transform = `translateX(-${index * 168}px)`;
        updatebtns();
        updatedots();
    };
});

prev.addEventListener('click', () => {
    if(index > 0){
        index--;
        slider.style.transform = `translateX(-${index * 168}px)`;
        updatebtns();
        updatedots();
    }
});

updatebtns();
updatedots();



//scientists
const scientists = [
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1,
        src: 'imgs/scientists/einstein.jpg'
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2,
        src: 'imgs/scientists/isaac.jpg'
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3,
        src: 'imgs/scientists/galileo.jpg'
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4,
        src: 'imgs/scientists/marie.png'
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5,
        src: 'imgs/scientists/johannes.jpg'
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6,
        src: 'imgs/scientists/nicolaus.jpg'
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7,
        src: 'imgs/scientists/max.jpg'
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8,
        src: 'imgs/scientists/katherine.jpg'
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9,
        src: 'imgs/scientists/ada.png'
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10,
        src: 'imgs/scientists/sarah.jpg'
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11,
        src: 'imgs/scientists/lise.jpg'
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12,
        src: 'imgs/scientists/hanna.png'
    }
];

const scientistscont = document.querySelector('#scientistscont');

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');

const cardCreation = (obj) => {
    const card = document.createElement("img");
    card.src = obj.src;
    card.classList.add('bbtn');

    return card;
};

//19ст
btn1.addEventListener('click', (e) => {
    scientistscont.innerHTML = "";

    e.preventDefault();

    const result = scientists.filter((scientist) => {
        return scientist.born >= 1801 && scientist.born <= 1900;
    });

    result.forEach((post) => {
        scientistscont.append(cardCreation(post));
    });
});

//рік альберта
btn2.addEventListener('click', (e) => {
    alert('1879');
});

//алфавіт
btn3.addEventListener('click', (e) => {
    scientistscont.innerHTML = "";

    e.preventDefault();

    const sorted = [...scientists].sort((a, b) => a.name.localeCompare(b.name));

    sorted.forEach((post) => {
        scientistscont.append(cardCreation(post));
    });
});

//буква с
btn4.addEventListener('click', (e) => {
    scientistscont.innerHTML = "";

    e.preventDefault();

    const result = scientists.filter(scientist =>
        scientist.surname.startsWith("C")
    );

    result.forEach(scientist => {
        scientistscont.append(cardCreation(scientist));
    });
});

//роки
btn5.addEventListener('click', (e) => {
    scientistscont.innerHTML = "";

    e.preventDefault();

    const sorted = [...scientists].sort((a, b) => (b.dead - b.born) - (a.dead - a.born));

    sorted.forEach((post) => {
        scientistscont.append(cardCreation(post));
    });
});

//видаляєм де на а
btn6.addEventListener('click', (e) => {
    scientistscont.innerHTML = "";

    e.preventDefault();

    const filtered = scientists.filter(scientist => !scientist.name.startsWith("A"));

    filtered.forEach(scientist => {
        scientistscont.append(cardCreation(scientist));
    });
});

//народився найпізніше
btn7.addEventListener('click', (e) => {
    scientistscont.innerHTML = "";

    e.preventDefault();

    const latestBorn = scientists.reduce((max, current) => current.born > max.born ? current : max);

    scientistscont.append(cardCreation(latestBorn));
});

//найдовше і найменше прожив
btn8.addEventListener('click', (e) => {
    e.preventDefault();
    scientistscont.innerHTML = "";

    const withLife = scientists.map(scientist => ({
        ...scientist,
        life: scientist.dead - scientist.born
    }));

    const sorted = [...withLife].sort((a, b) => a.life - b.life);

    const shortest = sorted[0];
    const longest = sorted[sorted.length - 1];

    scientistscont.append(cardCreation(shortest));
    scientistscont.append(cardCreation(longest));
});

//перші літера співпадають
btn9.addEventListener('click', (e) => {
    e.preventDefault();

    scientistscont.innerHTML = "";

    const result = scientists.filter(scientist =>
        scientist.name[0].toLowerCase() ===
        scientist.surname[0].toLowerCase()
    );

    result.forEach(scientist => {
        scientistscont.append(cardCreation(scientist));
    });
});

btn10.addEventListener('click', (e) => {
        e.preventDefault();
        scientistscont.innerHTML = "";
});

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

//ДОДАТКОВА ПЛЮШКА
document.querySelectorAll('img', 'svg').forEach(img => {
    img.setAttribute('draggable', 'false');
});

main.style.backgroundColor = '#EEEEEE';