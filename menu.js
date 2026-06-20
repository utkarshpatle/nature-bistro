const menuCategories = [
  {
    name: "Starters and Siders",
    items: [
      ["Misal Pav", "69"],
      ["Special Misal Pav (with papad, achar, dahi, salad)", "99"],
      ["Chhole Bhature (2 bhature)", "89"],
      ["Pav Bhaji", "69"],
      ["French Fries - Classic / Peri-peri / Cheese", "65 / 75 / 85"],
      ["Crispy Corn / Crispy Corn Bhel", "109 / 119"],
      ["Onion Rings / Onion Pakoda / Aloo Pakoda", "99"],
      ["Veg Sandwich", "119"],
      ["Cheese Sandwich", "129"],
      ["Paneer Sandwich", "139"],
      ["Corn and Cheese Sandwich", "139"],
      ["Bombay Masala Sandwich", "139"],
      ["Wada Pav", "30"],
      ["Roasted Papad", "30"],
      ["Fried Papad", "40"],
      ["Masala Papad (Roasted / Fried)", "60"],
      ["Hara Bhara Kabab", "169"],
      ["Paneer Pakoda", "169"],
      ["Soup - Cream of Tomato", "129"],
      ["Soup - Manchow / Hot and Sour", "139"],
      ["Soup - Corn and Mushroom", "149"]
    ]
  },
  {
    name: "Udupi Cuisine",
    items: [
      ["Plain Dosa", "65"],
      ["Masala Dosa", "75"],
      ["Mysore Masala Dosa", "89"],
      ["Paneer Dosa", "109"],
      ["Cheese Dosa", "109"],
      ["Idli Sambhar Chutney (4 pcs idli)", "59"],
      ["Onion / Tomato Uttapam", "69"]
    ]
  },
  {
    name: "Sizzlers",
    items: [
      ["Veg Sizzler", "339"],
      ["Chinese Sizzler", "359"],
      ["Paneer Sizzler", "359"]
    ]
  },
  {
    name: "Italian Pastas",
    items: [
      ["Red / Pink / White Sauce", "189"]
    ]
  },
  {
    name: "Pizzas",
    items: [
      ["Margarita", "119"],
      ["Onion / Capsicum / Tomato", "129"],
      ["Corn Mushroom", "139"],
      ["Farmhouse", "149"],
      ["Paneer Pizza", "159"],
      ["Veggies Overload", "169"],
      ["Stuffed Cheese Garlic Bread with Cheese Dip", "179"]
    ]
  },
  {
    name: "Brews and Tonics",
    items: [
      ["Cold Drinks (Sprite, Thums Up, Jeera, Maaza, Appy)", "Ask us"],
      ["Tea", "30"],
      ["Coffee", "40"],
      ["Black Coffee", "25"],
      ["Cold Coffee - Regular / With Ice Cream", "69 / 89"],
      ["Cad B (Dark Chocolate Shake)", "85"],
      ["Crushers - Orange, Strawberry, Pineapple, Mix Fruit (Water / Soda)", "55 / 70"],
      ["Crushers - Mojito, Alphonso, Blue Lagoon, Litchi (Water / Soda)", "70 / 85"],
      ["Milkshake - Oreo / KitKat", "99 / 109 / 119"],
      ["Lemon Soda", "35"]
    ]
  },
  {
    name: "Chinatown Delicacies",
    items: [
      ["Hakka Noodles", "119"],
      ["Schezwan Noodles", "139"],
      ["Veg Triple Noodles (Large Portion)", "259"],
      ["Fried Rice", "139"],
      ["Schezwan Fried Rice", "159"],
      ["Manchurian (Rice / Noodles)", "169"],
      ["Manchurian (Dry / Gravy)", "119 / 129"],
      ["Gobi Manchurian", "139"],
      ["Paneer Chilli", "179"],
      ["Paneer 65", "179"],
      ["Veg 65", "159"],
      ["Veg Crispy", "159"],
      ["Honey Chilli Potato", "159"]
    ]
  },
  {
    name: "Maggie Point",
    items: [
      ["Plain Maggie", "65"],
      ["Cheese Maggie", "79"],
      ["Corn and Cheese Maggie", "89"],
      ["Veggie Masala Maggie", "79"],
      ["Peri Peri Maggie", "89"],
      ["Veggie Overload Maggie", "99"]
    ]
  },
  {
    name: "Roti and Rice",
    items: [
      ["Tawa Roti (Plain / Butter)", "15 / 20"],
      ["Steam Rice", "100"],
      ["Jeera Rice", "119"],
      ["Peas Pulao", "139"],
      ["Veg Pulao", "139"],
      ["Paneer Pulao", "159"],
      ["Curd Rice", "159"],
      ["Dal Khichdi", "159"],
      ["Veg Biryani (served with Raita / Gravy)", "189"],
      ["Paneer Biryani (served with Raita / Gravy)", "209"]
    ]
  },
  {
    name: "Dal and Sabji",
    items: [
      ["Plain Dal", "100"],
      ["Dal Fry", "119"],
      ["Dal Tadka", "135"],
      ["Sev Bhaji", "159"],
      ["Chhole Masala", "159"],
      ["Gobi Masala", "169"],
      ["Mix Veg", "179"],
      ["Veg Handi", "189"],
      ["Veg Kadhai", "189"],
      ["Paneer Masala", "219"],
      ["Matar Paneer", "229"],
      ["Palak Paneer*", "229"],
      ["Paneer Butter Masala", "239"],
      ["Paneer Do-Pyaza", "239"],
      ["Methi Matar Malai", "239"],
      ["Paneer Handi", "249"],
      ["Paneer Kadhai", "249"],
      ["Paneer Kolhapuri", "249"],
      ["Paneer Tikka Masala", "269"],
      ["Veg Anda Curry", "269"]
    ]
  },
  {
    name: "Sweet Endings",
    items: [
      ["Sizzling Brownie with Ice Cream", "200"],
      ["Vanilla Ice Cream with Choco Chips (1 Scoop / 2 Scoops)", "40 / 65"],
      ["Rasgulla (2 pcs)", "50"]
    ]
  },
  {
    name: "Extras",
    items: [
      ["Butter", "20"],
      ["Cheese", "30"],
      ["Chhole Bowl", "40"],
      ["Misal Bowl", "35"],
      ["Pav (for Pav Bhaji)", "15"],
      ["Pav (for Misal Pav)", "10"],
      ["Bhatura", "30"],
      ["Idli", "15"],
      ["Exotic Veggies (Jalapeno, Olive, Paprika, Mushroom)", "30"],
      ["Maggie Masala", "10"]
    ]
  }
];

const popularItems = new Set([
  "Special Misal Pav (with papad, achar, dahi, salad)",
  "Pav Bhaji",
  "Masala Dosa",
  "Farmhouse",
  "Cold Coffee - Regular / With Ice Cream",
  "Paneer Chilli",
  "Paneer Butter Masala",
  "Sizzling Brownie with Ice Cream"
]);

const catalog = document.querySelector("#menu-catalog");
const categoryNav = document.querySelector("#category-nav");
const search = document.querySelector("#menu-search");
const suggestions = document.querySelector("#search-suggestions");
const clearSearch = document.querySelector("#clear-search");
const filterChips = document.querySelectorAll(".filter-chip");
const menuCount = document.querySelector("#menu-count");
const categoryCount = document.querySelector("#category-count");
let totalMenuItems = 0;
let activeFilter = "all";
let activeSuggestion = -1;

const slugify = value => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const escapeHtml = value => value.replace(/[&<>"']/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
}[character]));
const escapeRegExp = value => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\b(shejwan|shezwan|sezwan)\b/g, "schezwan")
    .replace(/\bmaggi\b/g, "maggie")
    .replace(/\bchole\b/g, "chhole")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function levenshtein(a, b) {
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const row = Array.from({ length: b.length + 1 }, (_, index) => index);

  for (let i = 1; i <= a.length; i += 1) {
    let previous = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const current = row[j];
      row[j] = Math.min(
        row[j] + 1,
        row[j - 1] + 1,
        previous + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
      previous = current;
    }
  }
  return row[b.length];
}

function fuzzyScore(text, query) {
  if (!query) return 0;
  const target = normalizeText(text);
  if (target === query) return 0;
  if (target.startsWith(query)) return 1;
  if (target.includes(query)) return 2;

  const targetTokens = target.split(" ");
  const queryTokens = query.split(" ");
  let totalDistance = 0;

  for (const queryToken of queryTokens) {
    const distances = targetTokens.map(targetToken => {
      if (targetToken.startsWith(queryToken) || targetToken.includes(queryToken)) return 0;
      return levenshtein(queryToken, targetToken);
    });
    const bestDistance = Math.min(...distances);
    const tolerance = queryToken.length <= 4 ? 1 : queryToken.length <= 7 ? 2 : 3;
    if (bestDistance > tolerance) return Infinity;
    totalDistance += bestDistance;
  }

  return 10 + totalDistance;
}

function getPrices(price) {
  return (price.match(/\d+/g) || []).map(Number);
}

function matchesActiveFilter(item) {
  const prices = item.dataset.prices.split(",").filter(Boolean).map(Number);
  if (activeFilter === "popular") return item.dataset.popular === "true";
  if (activeFilter === "under-100") return prices.some(price => price < 100);
  if (activeFilter === "100-199") return prices.some(price => price >= 100 && price <= 199);
  if (activeFilter === "200-plus") return prices.some(price => price >= 200);
  return true;
}

function highlightMatch(name, query, isFuzzyMatch) {
  const safeName = escapeHtml(name);
  if (!query) return safeName;
  const terms = query.split(" ").filter(term => term.length > 1);
  let highlighted = safeName;
  let found = false;

  terms.forEach(term => {
    const pattern = new RegExp(`(${escapeRegExp(term)})`, "ig");
    if (pattern.test(highlighted)) found = true;
    highlighted = highlighted.replace(pattern, "<mark>$1</mark>");
  });

  return !found && isFuzzyMatch ? `<mark class="fuzzy">${safeName}</mark>` : highlighted;
}

function renderMenu() {
  categoryNav.innerHTML = menuCategories.map(category => {
    const id = slugify(category.name);
    return `<a class="category-link" href="#${id}">${category.name}<span>${category.items.length}</span></a>`;
  }).join("");

  catalog.innerHTML = menuCategories.map(category => {
    const id = slugify(category.name);
    return `
      <section class="menu-category" id="${id}" data-category="${escapeHtml(category.name)}">
        <button class="category-heading" type="button" aria-expanded="true" aria-controls="${id}-items">
          <span class="category-title">${category.name}</span>
          <span class="category-meta">
            <span class="category-count" aria-label="${category.items.length} items">${category.items.length}</span>
            <span class="category-chevron" aria-hidden="true">⌄</span>
          </span>
        </button>
        <ul class="menu-list" id="${id}-items">
          ${category.items.map(([name, price]) => {
            const popular = popularItems.has(name);
            return `
              <li class="menu-item" data-name="${escapeHtml(name)}" data-prices="${getPrices(price).join(",")}" data-popular="${popular}">
                <span class="item-label">
                  <span class="item-name">${escapeHtml(name)}</span>
                  ${popular ? '<span class="popular-badge">Popular</span>' : ""}
                </span>
                <span class="item-dots" aria-hidden="true"></span>
                <span class="item-price">${price}</span>
              </li>
            `;
          }).join("")}
        </ul>
      </section>
    `;
  }).join("") + `<p class="menu-empty">No dishes match your search and filters.</p>`;

  totalMenuItems = menuCategories.reduce((sum, category) => sum + category.items.length, 0);
  menuCount.textContent = `${totalMenuItems} dishes`;
  categoryCount.textContent = `${menuCategories.length} categories`;

  document.querySelectorAll(".category-heading").forEach(button => {
    button.addEventListener("click", () => {
      const category = button.closest(".menu-category");
      const collapsed = category.classList.toggle("collapsed");
      button.setAttribute("aria-expanded", String(!collapsed));
    });
  });

  categoryNav.querySelectorAll(".category-link").forEach(link => {
    link.addEventListener("click", () => {
      const category = document.querySelector(link.getAttribute("href"));
      category.classList.remove("collapsed");
      category.querySelector(".category-heading").setAttribute("aria-expanded", "true");
    });
  });
}

function allMenuEntries() {
  return menuCategories.flatMap(category =>
    category.items.map(([name, price]) => ({ name, price, category: category.name }))
  );
}

function updateSuggestions() {
  const query = normalizeText(search.value);
  clearSearch.classList.toggle("visible", Boolean(search.value));

  if (query.length < 2) {
    suggestions.classList.remove("open");
    suggestions.innerHTML = "";
    search.setAttribute("aria-expanded", "false");
    return;
  }

  const matches = allMenuEntries()
    .map(entry => ({ ...entry, score: fuzzyScore(entry.name, query) }))
    .filter(entry => entry.score < Infinity)
    .sort((a, b) => a.score - b.score || a.name.localeCompare(b.name))
    .slice(0, 6);

  suggestions.innerHTML = matches.map((entry, index) => `
    <button class="suggestion" type="button" role="option" data-name="${escapeHtml(entry.name)}" data-index="${index}">
      <strong>${highlightMatch(entry.name, query, entry.score >= 10)}</strong>
      <small>${entry.category} · ₹${entry.price}</small>
    </button>
  `).join("");

  suggestions.classList.toggle("open", matches.length > 0);
  search.setAttribute("aria-expanded", String(matches.length > 0));
  activeSuggestion = -1;

  suggestions.querySelectorAll(".suggestion").forEach(button => {
    button.addEventListener("click", () => selectSuggestion(button.dataset.name));
  });
}

function applyMenuFilters() {
  const query = normalizeText(search.value);
  let visibleItems = 0;

  document.querySelectorAll(".menu-category").forEach(category => {
    let categoryMatches = 0;
    const categoryScore = fuzzyScore(category.dataset.category, query);

    category.querySelectorAll(".menu-item").forEach(item => {
      const nameScore = fuzzyScore(item.dataset.name, query);
      const matchesQuery = !query || nameScore < Infinity || categoryScore < Infinity;
      const visible = matchesQuery && matchesActiveFilter(item);
      item.classList.toggle("hidden", !visible);

      const name = item.dataset.name;
      item.querySelector(".item-name").innerHTML = highlightMatch(
        name,
        query,
        query && nameScore >= 10 && nameScore < Infinity
      );

      if (visible) {
        categoryMatches += 1;
        visibleItems += 1;
      }
    });

    category.classList.toggle("hidden", categoryMatches === 0);
    if (categoryMatches > 0 && (query || activeFilter !== "all")) {
      category.classList.remove("collapsed");
      category.querySelector(".category-heading").setAttribute("aria-expanded", "true");
    }
  });

  document.querySelector(".menu-empty").classList.toggle("show", visibleItems === 0);
  const filtered = query || activeFilter !== "all";
  menuCount.textContent = filtered ? `${visibleItems} matching dishes` : `${totalMenuItems} dishes`;
  updateSuggestions();
}

function selectSuggestion(name) {
  search.value = name;
  activeFilter = "all";
  filterChips.forEach(chip => chip.classList.toggle("active", chip.dataset.filter === "all"));
  suggestions.classList.remove("open");
  search.setAttribute("aria-expanded", "false");
  applyMenuFilters();
  search.focus();
}

search.addEventListener("input", applyMenuFilters);
search.addEventListener("focus", updateSuggestions);
search.addEventListener("keydown", event => {
  const options = [...suggestions.querySelectorAll(".suggestion")];
  if (!options.length) return;

  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    activeSuggestion = event.key === "ArrowDown"
      ? (activeSuggestion + 1) % options.length
      : (activeSuggestion - 1 + options.length) % options.length;
    options.forEach((option, index) => option.classList.toggle("active", index === activeSuggestion));
  } else if (event.key === "Enter" && activeSuggestion >= 0) {
    event.preventDefault();
    selectSuggestion(options[activeSuggestion].dataset.name);
  } else if (event.key === "Escape") {
    suggestions.classList.remove("open");
    search.setAttribute("aria-expanded", "false");
  }
});

clearSearch.addEventListener("click", () => {
  search.value = "";
  applyMenuFilters();
  search.focus();
});

filterChips.forEach(chip => {
  chip.addEventListener("click", () => {
    activeFilter = chip.dataset.filter;
    filterChips.forEach(item => item.classList.toggle("active", item === chip));
    applyMenuFilters();
  });
});

document.addEventListener("click", event => {
  if (!event.target.closest(".search-wrap")) {
    suggestions.classList.remove("open");
    search.setAttribute("aria-expanded", "false");
  }
});

const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

renderMenu();
