// ข้อมูลธาตุ (ตัวอย่างบางส่วน)
const elements = [
    { number: 1, symbol: "H", name: "Hydrogen", category: "mo1" },
    { number: 3, symbol: "Li", name: "Lithium", category: "mo1" },
    { number: 11, symbol: "Na", name: "Sodium", category: "mo1" },
    { number: 19, symbol: "K", name: "Potassium", category: "mo1" },
    { number: 37, symbol: "Rb", name: "Rubidium", category: "mo1" },
    { number: 55, symbol: "Cs", name: "Cesium", category: "mo1" },
    { number: 87, symbol: "Fr", name: "Francium", category: "mo1" },
    { number: 4, symbol: "Be", name: "Beryllium", category: "mo2" },
    { number: 12, symbol: "Mg", name: "Magnesium", category: "mo2" },
    { number: 20, symbol: "Ca", name: "Calcium", category: "mo2" },
    { number: 38, symbol: "Sr", name: "Strontium", category: "mo2" },
    { number: 21, symbol: "Sc", name: "Scandium", category: "mo3" },
    { number: 39, symbol: "Y", name: "Yttrium", category: "mo3" },
    { number: 57, symbol: "La", name: "Lanthanum", category: "mo3" },
    { number: 89, symbol: "Ac", name: "Actinium", category: "mo3" },
    { number: 22, symbol: "Ti", name: "Titanium", category: "mo4" },
    { number: 40, symbol: "Zr", name: "Zirconium", category: "mo4" },
    { number: 72, symbol: "Hf", name: "Hafnium", category: "mo4" },
    { number: 104, symbol: "Rf", name: "Rutherfordium", category: "mo4" },
    { number: 23, symbol: "V", name: "Vanadium", category: "mo5" },
    { number: 41, symbol: "Nb", name: "Niobium", category: "mo5" },
    { number: 73, symbol: "Ta", name: "Tantalum", category: "mo5" },
    { number: 105, symbol: "Db", name: "Dubnium", category: "mo5" },
    { number: 24, symbol: "Cr", name: "Chromium", category: "mo6" },
    { number: 42, symbol: "Mo", name: "Molybdenum", category: "mo6" },
    { number: 74, symbol: "W", name: "Tungsten", category: "mo6" },
    { number: 106, symbol: "Sg", name: "Seaborgium", category: "mo6" },
    { number: 25, symbol: "Mn", name: "Manganese", category: "mo7" },
    { number: 43, symbol: "Tc", name: "Technetium", category: "mo7" },
    { number: 75, symbol: "Re", name: "Rhenium", category: "mo7" },
    { number: 107, symbol: "Bh", name: "Bohrium", category: "mo7" },
    { number: 26, symbol: "Fe", name: "Iron", category: "mo8" },
    { number: 44, symbol: "Ru", name: "Ruthenium", category: "mo8" },
    { number: 76, symbol: "Os", name: "Osmium", category: "mo8" },
    { number: 108, symbol: "Hs", name: "Hassium", category: "mo8" },
    { number: 27, symbol: "Co", name: "Cobalt", category: "mo9" },
    { number: 45, symbol: "Rh", name: "Rhodium", category: "mo9" },
    { number: 77, symbol: "Ir", name: "Iridium", category: "mo9" },
    { number: 109, symbol: "Mt", name: "Meitnerium", category: "mo9" },
    { number: 28, symbol: "Ni", name: "Nickel", category: "mo10" },
    { number: 46, symbol: "Pd", name: "Palladium", category: "mo10" },
    { number: 78, symbol: "Pt", name: "Platinum", category: "mo10" },
    { number: 110, symbol: "Ds", name: "Darmstadtium", category: "mo10" },
    { number: 29, symbol: "Cu", name: "Copper", category: "mo11" },
    { number: 47, symbol: "Ag", name: "Silver", category: "mo11" },
    { number: 79, symbol: "Au", name: "Gold", category: "mo11" },
    { number: 111, symbol: "Rg", name: "Roentgenium", category: "mo11" },
    { number: 30, symbol: "Zn", name: "Zinc", category: "mo12" },
    { number: 48, symbol: "Cd", name: "Cadmium", category: "mo12" },
    { number: 80, symbol: "Hg", name: "Mercury", category: "mo12" },
    { number: 112, symbol: "Cn", name: "Copernicium", category: "mo12" },
    { number: 5, symbol: "B", name: "Boron", category: "mo13" },
    { number: 13, symbol: "Al", name: "Aluminum", category: "mo13" },
    { number: 31, symbol: "Ga", name: "Gallium", category: "mo13" },
    { number: 49, symbol: "In", name: "Indium", category: "mo13" },
    { number: 81, symbol: "Tl", name: "Thallium", category: "mo13" },
    { number: 113, symbol: "Nh", name: "Nihonium", category: "mo13" },
    { number: 6, symbol: "C", name: "Carbon", category: "mo14" },
    { number: 14, symbol: "Si", name: "Silicon", category: "mo14" },
    { number: 32, symbol: "Ge", name: "Germanium", category: "mo14" },
    { number: 50, symbol: "Sn", name: "Tin", category: "mo14" },
    { number: 82, symbol: "Pb", name: "Lead", category: "mo14" },
    { number: 114, symbol: "Fl", name: "Flerovium", category: "mo14" },
    { number: 7, symbol: "N", name: "Nitrogen", category: "mo15" },
    { number: 15, symbol: "P", name: "Phosphorus", category: "mo15" },
    { number: 33, symbol: "As", name: "Arsenic", category: "mo15" },
    { number: 51, symbol: "Sb", name: "Antimony", category: "mo15" },
    { number: 83, symbol: "Bi", name: "Bismuth", category: "mo15" },
    { number: 115, symbol: "Mc", name: "Moscovium", category: "mo15" },
    { number: 8, symbol: "O", name: "Oxygen", category: "mo16" },
    { number: 16, symbol: "S", name: "Sulfur", category: "mo16" },
    { number: 34, symbol: "Se", name: "Selenium", category: "mo16" },
    { number: 52, symbol: "Te", name: "Tellurium", category: "mo16" },
    { number: 84, symbol: "Po", name: "Polonium", category: "mo16" },
    { number: 116, symbol: "Lv", name: "Livermorium", category: "mo16" },
    { number: 9, symbol: "F", name: "Fluorine", category: "mo17" },
    { number: 17, symbol: "Cl", name: "Chlorine", category: "mo17" },
    { number: 35, symbol: "Br", name: "Bromine", category: "mo17" },
    { number: 53, symbol: "I", name: "Iodine", category: "mo17" },
    { number: 85, symbol: "At", name: "Astatine", category: "mo17" },
    { number: 117, symbol: "Ts", name: "Tennessine", category: "mo17" },
    { number: 2, symbol: "He", name: "Helium", category: "mo18" },
    { number: 10, symbol: "Ne", name: "Neon", category: "mo18" },
    { number: 18, symbol: "Ar", name: "Argon", category: "mo18" },
    { number: 36, symbol: "Kr", name: "Krypton", category: "mo18" },
    { number: 54, symbol: "Xe", name: "Xenon", category: "mo18" },
    { number: 86, symbol: "Rn", name: "Radon", category: "mo18" },
    { number: 118, symbol: "Og", name: "Oganesson", category: "mo18" },
];

let currentElement = null;

const categorySelect = document.getElementById('category-select');
const modeSelect = document.getElementById('mode-select');
const questionTypeSelect = document.getElementById('question-type-select');
const elementSelectContainer = document.getElementById('element-select-container');
const elementSelect = document.getElementById('element-select');
const questionEl = document.getElementById('question');
const answerInput = document.getElementById('answer');
const resultEl = document.getElementById('result');

function filterElementsByCategory(category) {
  if (category === 'all') {
    return elements;
  }
  return elements.filter(el => el.category === category);
}

function populateElementSelect(filteredElements) {
  elementSelect.innerHTML = '';
  filteredElements.forEach((el, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${el.symbol} (${el.name})`;
    elementSelect.appendChild(option);
  });
}

function updateElementSelectVisibility() {
  if (modeSelect.value === 'select') {
    elementSelectContainer.style.display = 'block';
  } else {
    elementSelectContainer.style.display = 'none';
  }
}

function nextQuestion() {
  const category = categorySelect.value;
  const mode = modeSelect.value;
  const questionType = questionTypeSelect.value;
  const filteredElements = filterElementsByCategory(category);

  if (filteredElements.length === 0) {
    questionEl.textContent = 'ไม่มีธาตุในหมวดหมู่นี้';
    currentElement = null;
    return;
  }

  if (mode === 'random') {
    const index = Math.floor(Math.random() * filteredElements.length);
    currentElement = filteredElements[index];
  } else if (mode === 'select') {
    const selectedIndex = elementSelect.value;
    currentElement = filteredElements[selectedIndex];
  }

  if (questionType === 'symbol-to-name') {
    questionEl.textContent = currentElement.symbol;
  } else if (questionType === 'name-to-symbol') {
    questionEl.textContent = currentElement.name;
  }

  answerInput.value = '';
  resultEl.textContent = '';
}

function checkAnswer() {
  if (!currentElement) return;
  const input = answerInput.value.trim().toLowerCase();
  const questionType = questionTypeSelect.value;
  let correctAnswer = '';

  if (questionType === 'symbol-to-name') {
    correctAnswer = currentElement.name.toLowerCase();
  } else if (questionType === 'name-to-symbol') {
    correctAnswer = currentElement.symbol.toLowerCase();
  }

  if (input === correctAnswer) {
    resultEl.textContent = '✅ ถูกต้อง!';
    resultEl.style.color = 'green';
  } else {
    resultEl.textContent = `❌ ผิด! คำตอบคือ ${correctAnswer}`;
    resultEl.style.color = 'red';
  }
}

// เริ่มต้น
function initialize() {
  const initialCategory = categorySelect.value;
  const filteredElements = filterElementsByCategory(initialCategory);
  populateElementSelect(filteredElements);
  updateElementSelectVisibility();
  nextQuestion();
}

categorySelect.addEventListener('change', () => {
  const selectedCategory = categorySelect.value;
  const filteredElements = filterElementsByCategory(selectedCategory);
  populateElementSelect(filteredElements);
  nextQuestion();
});

modeSelect.addEventListener('change', () => {
  updateElementSelectVisibility();
  nextQuestion();
});

elementSelect.addEventListener('change', () => {
  nextQuestion();
});

questionTypeSelect.addEventListener('change', () => {
  nextQuestion();
});

initialize();
