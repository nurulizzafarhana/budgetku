const backHomeBtn = document.querySelector("#budget_details button.back__home");
const budgetsPage = document.getElementById("budgets");
const budgetDetailPage = document.querySelector("#budget_details");
const budgetCards = document.querySelectorAll("#budgets .budget__card");
const addBudgetButton = document.querySelector("#budgets button");
const budgetForm = document.getElementById("budget__form");
const closeModalBudgetBtn = document.querySelector("#budget__form i");
const addSpentBtn = document.querySelector(".add__spent__btn");
const spentForm = document.getElementById("spent_form");
const closeModalPengeluaranBtn = document.querySelector("#spent_form i");

// Klik button Back Home > Main Page
backHomeBtn.addEventListener("click", () => {
  budgetDetailPage.classList.add("hidden");
  budgetsPage.classList.remove("hidden");
});

// Klik Budget Cards > Budget Details
budgetCards.forEach((card) => {
  card.addEventListener("click", () => {
    budgetsPage.classList.add("hidden");
    budgetDetailPage.classList.remove("hidden");
  });
});

// Klik Tambah Budget
addBudgetButton.addEventListener("click", () => {
  budgetForm.classList.remove("hidden");
});

// Close Form Tambah Budget
closeModalBudgetBtn.addEventListener("click", () => {
  budgetForm.classList.add("hidden");
});

// Add Spent Button
addSpentBtn.addEventListener("click", () => {
  spentForm.classList.remove("hidden");
});

// Close Form Tambah Pengeluaran
closeModalPengeluaranBtn.addEventListener("click", () => {
  spentForm.classList.add("hidden");
});
