const students = ['Ruslan', 'Asema', 'Samir', 'Adilet'];

function getStudents(names) {
    const result = names.join(', ');

    if (names.length > 3) {
        console.log('Большая группа');
    } else {
        console.log('Маленькая группа');
    }

    return result;
}

console.log(getStudents(students));

const skills = 'HTML, CSS, JavaScript, React';

function getSkills(str) {
    const result = str.split(', ');

    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }

    return result;
}

const skillsArray = getSkills(skills);

console.log('Количество навыков:', skillsArray.length);

const frontend = ['HTML', 'CSS', 'JavaScript'];
const backend = ['Node.js', 'Python', 'PHP'];

function combineSkills(arr1, arr2) {
    const result = arr1.concat(arr2);

    if (result.length > 5) {
        console.log('Много навыков');
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }

    return result;
}

console.log(combineSkills(frontend, backend));

const scores = [75, 90, 60, 85, 100, 45];

function getTopScores(arr) {
    const copy = arr.slice(0, 3);

    copy[0] = 100;

    console.log('Исходный массив:', arr);
    console.log('Копия:', copy);

    return copy;
}

getTopScores(scores);


const data = [
    'Hello',
    100,
    true,
    ['HTML', 'CSS'],
    { name: 'Ruslan' },
    null
];

function checkData(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            console.log('Это массив');
            count++;
        } else {
            console.log('Это не массив');
        }
    }

    return count;
}

console.log('Количество вложенных массивов:', checkData(data));