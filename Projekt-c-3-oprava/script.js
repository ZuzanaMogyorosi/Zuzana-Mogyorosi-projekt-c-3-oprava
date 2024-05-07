// NAVIGACE
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
	if (hamburgerIcon.classList[1] === "fa-bars") {
		hamburgerIcon.classList.add("fa-xmark");
		hamburgerIcon.classList.remove("fa-bars");
		menuList.style.display = "block";
	} else {
		hamburgerIcon.classList.add("fa-bars");
		hamburgerIcon.classList.remove("fa-xmark");
		menuList.style.display = "none";
	}
});

// DARK/LIGHT MODE

document.documentElement.setAttribute("data-theme", "default");

const customButton = document.querySelector(".custom-mode-circle");
const toggleButton = document.querySelector(".dark-light-circle");

toggleButton.textContent = "dark";

toggleButton.addEventListener("click", () => {
	const currentTheme = document.documentElement.getAttribute("data-theme");
	if (currentTheme === "dark") {
		document.documentElement.setAttribute("data-theme", "light");
		toggleButton.textContent = "dark";
	} else {
		document.documentElement.setAttribute("data-theme", "dark");
		toggleButton.textContent = "light";
	}
});

customButton.addEventListener("click", () => {
	document.documentElement.setAttribute("data-theme", "default");
});

// FORM-SECTION

const formular = document.querySelector("form");
const fullName = document.querySelector(".fullName");
const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");

const notifName = document.querySelector(".notifName");
const notifPassword1 = document.querySelector(".notifPassword1");
const notifPassword2 = document.querySelector(".notifPassword2");
const pMatch = document.querySelector(".notifMatch");

// Vyskakující notifikace pro nevyplnění polí ve formuláři

formular.addEventListener("submit", (e) => {
	e.preventDefault();

	if (fullName.value === "") {
		notifName.style.display = "block";
	}
	if (password1.value === "") {
		notifPassword1.style.display = "block";
	}
	if (password2.value === "") {
		notifPassword2.style.display = "block";
	}
});

// Skrytí notifikace

function hideNotification() {
	if (fullName.value !== "") {
		notifName.style.display = "none";
	}
	if (password1.value !== "") {
		notifPassword1.style.display = "none";
	}
	if (password2.value !== "") {
		notifPassword2.style.display = "none";
	}
}

fullName.addEventListener("input", hideNotification);
password1.addEventListener("input", hideNotification);
password2.addEventListener("input", hideNotification);

// Kontrola shody hesel

function checkPasswordsMatch() {
	const password1Value = password1.value;
	const password2Value = password2.value;

	if (password1Value === password2Value) {
		pMatch.textContent = "Hesla jsou shodná";
		pMatch.classList.add("valid");
		pMatch.classList.remove("invalid");
	} else {
		pMatch.textContent = "Hesla se liší";
		pMatch.classList.add("invalid");
		pMatch.classList.remove("valid");
	}
	if (password1Value === "" && password2Value === "") {
		pMatch.textContent = "";
	}
}

password1.addEventListener("input", checkPasswordsMatch);
password2.addEventListener("input", checkPasswordsMatch);

// Tlačítko zpět nahoru

const toTop = document.querySelector(".top-page");
const topCircle = document.querySelector(".top-circle");

window.addEventListener("scroll", () => {
	if (window.scrollY >= 100) {
		toTop.classList.add("show");
		topCircle.classList.add("show");
		toTop.classList.remove("hide");
		topCircle.classList.remove("hide");
	} else {
		toTop.classList.remove("show");
		topCircle.classList.remove("show");
		toTop.classList.add("hide");
		topCircle.classList.add("hide");
	}
});
