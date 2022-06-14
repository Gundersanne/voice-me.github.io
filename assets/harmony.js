const notes = [
    'A',
    ['A♯', 'B♭'],
    'B',
    'C',
    ['A♯', 'B♭'],
    'D',
    ['D♯', 'E♭'],
    'E',
    'F',
    ['F♯', 'G♭'],
    'G',
    ['G♯', 'A♭'],
];

const menu = [
    // major
    'Δ7',
    'Δ7<sup>♯5</sup>',
    'Δ7<sup>♯9</sup>',
    'Δ7<sup>♯11</sup>',
    // minor
    'm7',
    ' phrygian',
    ' aeolian',
    '-7♭5',
    'min<sup>Δ7</sup>',
    // alt
    '7 <sup>(alt)</sup>',
    // sus
    'Δ7sus',
    'm7sus',
    'sus♭9',
    'sus♭6',
];

function note() {
    let note = notes[Math.floor(Math.random() * notes.length)];
    if (typeof note === "string")
        return note;
    return note[Math.floor(Math.random() * note.length)];
}

function makeRow() {
    let tables = document.getElementById('tables');
    let rows = document.createElement('table');
    tables.appendChild(rows)
    let row = rows.insertRow(0);

    for (let i = 0; i < 4; i++) {
        let cell = row.insertCell(i);
        cell.innerHTML = note() + menu[Math.floor(Math.random() * menu.length)];
    }
}

function once() {
    makeRow();

    document.addEventListener('keyup', (e) => {
        if (e.code === "KeyR") {
            let tables = document.getElementById('tables');
            tables.replaceChildren();
            makeRow();
        } else if (e.code === "Space") {
            makeRow();
        }
    });
}
once();
