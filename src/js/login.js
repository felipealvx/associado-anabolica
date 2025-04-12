import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-login");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      window.location.href = "../html/cadastro.html";
    } catch (err) {
      erro.textContent = "Email ou senha inválidos.";
    }
  });
});
