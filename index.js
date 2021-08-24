// Random Words

var words = [
    "floofer",
    "chonk",
    "good doge",
    "baby doggo",
    "smol doge",
    "retired doge",
    "bitzer",
    "yappy doge",
    "rescue pupper",
    "big doge",
    "scruffy doge",
    "fashion pupper",
    "hooman name",
    "great dane",
    "frenchie",
    "pug",
    "aussie",
    "pitty",
    "husky",
    "weenie",
    "goldie",
    "corgi",
    "german shepherd",
    "lab",
    "pointer"
]

// Generate random words
function shuffle(words) {
  for (let i = words.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [words[i], words[j]] = [words[j], words[i]];
  }

  return words;
}


console.log(shuffle(words));

function calcRowSize(words) {
    return Math.sqrt(words.length);
}

function isEndOfRow(rowSize, index) {
    return Number.isInteger(index + 1 / rowSize);
}

function isStartOfRow(rowSize, index) {
    return Number.isInteger(index / rowSize);
}

function isFreeSpace(wordCount, index) {
    var freeSpaceIndex = Math.floor(wordCount / 2);
    return freeSpaceIndex == index;
}

function insertData(words) {
    var table = document.getElementById("table");
    table.innerHTML=""; // Initialize the table



    var tr=""; // Intitialize the table row
    var rowSize = calcRowSize(words);
    words.forEach((word, index) => {
        // Handle 4 scenarios:
        // - [start of row] start table row & insert table data
        // - [end of row] insert table data & end table row
        // - [is the free space] insert blank table data
        // - [middle of row] insert table data
        if (isStartOfRow(rowSize, index)) {
            tr+= '<tr>' ;
            tr+= '<td>' + word + '</td>';
        } else if (isEndOfRow(rowSize, index)) {
            tr+= '<td>' + word + '</td>';
            tr+= '</tr>';
        } else if (isFreeSpace(words.length, index)) {
            tr+= '<td class="freeSpace"><img src="images/paw.svg"></td>';
        } else {
            tr+= '<td>' + word + '</td>';
        }
    });
    table.innerHTML += tr;
}

insertData(shuffle(words));

// Toggle highlighted cells
table.onclick = function(event) {
    highlight(event.target);
};

function highlight(td) {
    td.classList.toggle('highlight');
}
