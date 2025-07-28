// Question 1 dropdown, radio, checkbox using data.json
fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    // 1. Dropdown Menue
    const fruitSelect = document.createElement("select");
    fruitSelect.id = "fruitsDropdown"; 
    data.fruits.forEach(function (fruit) {
      const option = document.createElement("option");
      option.value = fruit.toLowerCase();
      option.text = fruit;
      fruitSelect.appendChild(option);
    });
    document.getElementById("fruit-dropdown").appendChild(fruitSelect);

    // 2. Radio buttons for countries
    const radioContainer = document.getElementById("radio-container");
    data.countries.forEach((country) => {
      const label = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "country";
      radio.value = country;
      label.appendChild(radio);
      label.appendChild(document.createTextNode(" " + country));
      radioContainer.appendChild(label);
    });

    // 3. Checkboxes for colors
    const checkboxContainer = document.getElementById("checkbox-container");
    data.colors.forEach((color) => {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "colors[]";
      checkbox.value = color;
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(" " + color));
      checkboxContainer.appendChild(label);
    });
  })
  .catch((err) => {
    console.error("Error loading JSON:", err);
  });

// Question 2 enable disable radio btn

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("radio-container2");

    data.options.forEach((label, index) => {
      const div = document.createElement("div");
      div.className = "radio-group";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "customRadio";
      radio.id = "radio" + index;
      radio.value = label;

      const radioLabel = document.createElement("label");
      radioLabel.setAttribute("for", radio.id);
      radioLabel.textContent = label;

      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = "Disable";

      toggleBtn.addEventListener("click", function () {
        radio.disabled = !radio.disabled;
        toggleBtn.textContent = radio.disabled ? "Enable" : "Disable";
      });

      div.appendChild(radio);
      div.appendChild(radioLabel);
      div.appendChild(toggleBtn);
      container.appendChild(div);
    });
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });

// Question 3 casesensitive include

const fruits = ["Apple", "Banana", "Cherry"];
const searchItem = "apple";
const found = fruits.some(
  (item) => item.toLowerCase() === searchItem.toLowerCase()
);
console.log("apple includes in fruits :",found);

// Question 4 intersection of array

const array1 = ["Apple", "Banana", "Cherry", "Mango"];
const array2 = ["banana", "CHERRY", "Grapes", "apple"];

const lowerArray2 = array2.map((item) => item.toLowerCase());
const intersection = array1.filter((item) =>
  lowerArray2.includes(item.toLowerCase())
);
console.log("Common values:", intersection);

// Question 5 custom .find() method

const users = [
  {
    id: 1,
    name: "Ruchit",
    age: 22,
    email: "ruchit@example.com",
    city: "gnr",
  },
  {
    id: 2,
    name: "Dipak",
    age: 21,
    email: "dipak@example.com",
    city: "Los Angeles",
  },
  {
    id: 3,
    name: "Uday",
    age: 20,
    email: "Upay@example.com",
    city: "rjk",
  },
];
// Find user by name and city
const userExists = users.find(
  (user) => user.name === "Ruchit" && user.city === "gnr"
);
if (userExists) {
  console.log("User found:", userExists);
} else {
  console.log("User not found.");
}

// Question 6 debuncing dropdown

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const countries = [
  "Argentina",
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Canada",
  "Chile",
  "China",
  "Colombia",
  "Denmark",
  "Egypt",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "India",
  "Indonesia",
  "Ireland",
  "Italy",
  "Japan",
  "Mexico",
  "Netherlands",
  "Norway",
  "Poland",
  "Portugal",
  "Russia",
  "South Africa",
  "Spain",
  "Sweden",
  "Switzerland",
  "United Kingdom",
  "United States",
  "Vietnam",
];

const input = document.getElementById("countryInput");
const dropdown = document.getElementById("countryDropdown");

function renderCountries(list) {
  dropdown.innerHTML = "";
  list.forEach((country) => {
    const option = document.createElement("option");
    option.text = country;
    dropdown.add(option);
  });
}

const filterCountries = debounce(function (e) {
  const search = e.target.value.toLowerCase();
  const matched = countries.filter((country) =>
    country.toLowerCase().includes(search)
  );
  renderCountries(matched);
}, 3000);

renderCountries(countries);
input.addEventListener("input", filterCountries);

// Question 7 editable tabel

document.querySelectorAll("#editableTable td").forEach(function (cell) {
  cell.addEventListener("click", function () {
    if (cell.querySelector("input")) return;

    const originalValue = cell.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = originalValue;

    cell.classList.add("editing");
    cell.textContent = "";
    cell.appendChild(input);
    input.focus();

    input.addEventListener("blur", function () {
      cell.textContent = input.value;
      cell.classList.remove("editing");
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        input.blur();
      }
    });
  });
});

// Canva Js

window.onload = function () {
  var chartExam = new CanvasJS.Chart("chartContainerExam", {
    animationEnabled: true,
    title: { text: "Exam Scores - Semester 1" },
    axisY: {
      title: "Score",
      maximum: 15,
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Math", y: 10 },
          { label: "Science", y: 12 },
          { label: "English", y: 6 },
        ],
      },
    ],
  });
  chartExam.render();
// };

// Pie chart

// window.onload = function () {
  var pieChart = new CanvasJS.Chart("pieChartContainer", {
    animationEnabled: true,
    title: {
      text: "Subject-wise Score Distribution",
    },
    data: [
      {
        type: "pie",
        startAngle: 240,
        indexLabel: "{label} - {y}",
        dataPoints: [
          { y: 35, label: "Math" },
          { y: 25, label: "Science" },
          { y: 20, label: "English" },
          { y: 10, label: "History" },
          { y: 10, label: "Art" },
        ],
      },
    ],
  });
  pieChart.render();
// };

//Line Chart

// window.onload = function () {
  var lineChart = new CanvasJS.Chart("lineChartContainer", {
    animationEnabled: true,
    title: {
      text: "Score Trend - Weekly Tests",
    },
    axisY: {
      title: "Score",
      maximum: 100,
    },
    data: [
      {
        type: "line",
        dataPoints: [
          { label: "Week 1", y: 78 },
          { label: "Week 2", y: 82 },
          { label: "Week 3", y: 69 },
          { label: "Week 4", y: 90 },
          { label: "Week 5", y: 85 },
        ],
      },
    ],
  });
  lineChart.render();
};
