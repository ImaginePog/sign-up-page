// alert("hello world");

const form = document.querySelector("form");
const pass = document.querySelector("#pass-in");
const confirmPass = document.querySelector("#pass-confirm-in");

function checkPass() {
	if (pass.value === confirmPass.value) {
		if (pass.classList.contains("invalid")) {
			pass.classList.remove("invalid");
			confirmPass.classList.remove("invalid");

			const spane = document.querySelector(".invalid-notif");
			spane.remove();
		}
	} else {
		if (!pass.classList.contains("invalid")) {
			pass.classList.add("invalid");
			confirmPass.classList.add("invalid");

			const spane = document.createElement("span");
			spane.textContent = "*Passwords dont match!";
			spane.classList.add("invalid-notif");
			pass.after(spane);
		}
	}
}

pass.addEventListener("focus", checkPass);
pass.addEventListener("blur", checkPass);

confirmPass.addEventListener("focus", checkPass);
confirmPass.addEventListener("blur", checkPass);
