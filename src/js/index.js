
const digit_button = document.querySelectorAll('.digit');
const operation_button = document.querySelectorAll('.operation');
const modifier_button = document.querySelector('.modifier');
const total = document.querySelector('#total');


let first_num = '', second_num = '', op = '';
const rule_cal = ['+', '-', 'X', '/'];

const LIMIT = { NUM: 3 };
const MESSAGE = { LEN: '숫자의 3자리수를 넘어 갈 수 없습니다.', RESULT: '올바른 연산 시행' }


const init = () => {
    addEventListener();
}

const calcultateResult = () => {
    console.log(first_num, op, second_num);
    switch (op) {
        case '+':
            return Number(first_num) + Number(second_num);
        case '-':
            return Number(first_num) - Number(second_num);
        case 'X':
            return Number(first_num) * Number(second_num);
        case '/':
            return parseInt(Number(first_num) / Number(second_num), 10);
        default:
            break;
    }


}

const isValidateGetResult = () => {

    if (first_num === '' || second_num === '' || !op) {
        alert(MESSAGE.RESULT);
        clear_All();
        return false;
    }

    return true;

}

const get_result = () => {
    if (isValidateGetResult()) {
        console.log(calcultateResult());
        total.innerText = calcultateResult();
    }
}

const clear_All = () => {
    first_num = '', second_num = '', op = '';
    total.innerText = 0;
}

const isValidateInputNum = (num) => {
    if (String(num).length > LIMIT.NUM) {
        alert(MESSAGE.LEN);
        clear_All();
        return false;
    }
    return true;
}


const onClickOpertaionEventListener = (e) => {
    if (!rule_cal.includes(e.target.innerText)) {
        get_result();
    } else if (first_num !== '') {
        op = e.target.innerText;
    } else {

    }
}
const onClickClearEventListener = (e) => {
    clear_All();
}

const onClickDigitEventListener = (e) => {
    let temp = e.target.innerText;
    if (op) {
        second_num += temp;
        second_num = Number(second_num);
        if (isValidateInputNum(second_num)) {
            second_num = second_num;
            total.innerText = second_num;
        }

    } else {

        first_num += temp;
        if (isValidateInputNum(Number(first_num))) {
            first_num = Number(first_num);
            total.innerText = first_num;
        }
    }

}




const addEventListener = () => {
    digit_button.forEach((element) => {
        element.addEventListener('click', onClickDigitEventListener);
    });

    operation_button.forEach((element) => {
        element.addEventListener('click', onClickOpertaionEventListener);
    });
    modifier_button.addEventListener('click', onClickClearEventListener);

}


init();





