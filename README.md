# Syntecxhub Expense Tracker

A modern, responsive, and performance-optimized Expense Tracker web application built using **React** and **Vite** as part of the Syntecxhub Web Development Internship program.

## 🚀 Key Features & React Hooks Implemented

This project fulfills all core assignment criteria by implementing advanced React state management and optimization hooks:

* **Data Fetching (`useEffect`):** Automatically fetches and loads initial starter expense entries from a local mock API (`mockData.json`) upon application mounting.
* **State Management (`useState`):** Powers controlled form inputs (Title, Amount, Category) and dynamically updates the core expenses tracker matrix array.
* **Focus Control (`useRef`):** Provides sharp UX flow by auto-focusing the cursor directly into the 'Expense Title' input box on initial landing and instantly refocussing after every transaction submission.
* **Performance Optimization (`useMemo`):** Caches and restricts the mathematical compilation of running balance totals, preventing redundant recalculations during isolated keyboard tracking inputs.
* **Callback Optimization (`useCallback`):** Memoizes the item removal workflow function, preventing expensive function reconstruction cycles across basic rendering sequences.
* **Responsive Styling:** Uses modern CSS Flexbox structures to transition elegantly across varying desktop viewports and compact mobile viewports.

## 🛠️ Installation & Local Setup

To run this project locally on your machine, execute the following instructions inside your terminal:

1. Clone the repository:
   ```bash
   git clone [https://github.com/NagamaniGM/Syntecxhub_Expense_Tracker.git](https://github.com/NagamaniGM/Syntecxhub_Expense_Tracker.git)