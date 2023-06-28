const ulNav = document.querySelector("ul.navigation"),
	navBtn = document.querySelector("button.nav-open.mobile"),
	closeBtn = document.querySelector(".section-close.mobile > .btn-close");

navBtn.onclick = e => {
	ulNav.style.display = "flex";
	ulNav.setAttribute("opening", "");
	ulNav.addEventListener("animationend", e => {
		ulNav.classList.add("opened");
		ulNav.removeAttribute("opening");
	}, {once: true})

}

closeBtn.onclick = e => {
	ulNav.setAttribute("closing", "");
	ulNav.addEventListener("animationend", e => {
		ulNav.classList.remove("opened");
		ulNav.removeAttribute("closing");
		ulNav.style.display = "none";
	}, {once: true})
}

window.onresize = e => {
	if (window.innerWidth > 650) {
		ulNav.style.display = "flex";
	}
	else {
		ulNav.style.display = "none";
	}
}