import { db, auth } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cadastro");

  // Só permite acesso se estiver autenticado
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      alert("Acesso restrito. Faça login como admin.");
      window.location.href = "/login.html";
    }
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const plano = document.getElementById("plano").value;
    const expiracao = document.getElementById("expiracao").value;
    const beneficios = document.getElementById("beneficios").value.split(",").map(b => b.trim());

    await addDoc(collection(db, "associados"), {
      nome,
      plano,
      expiracao,
      beneficios,
      criadoEm: serverTimestamp()
    });

    alert("Associado cadastrado com sucesso!");
    form.reset();
  });
});
