import { db, auth } from "../firebase/firebase";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

document.addEventListener("DOMContentLoaded", () => {
  // Só permite acesso se estiver autenticado
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      alert("Acesso restrito. Faça login como admin.");
      window.location.href = "/public/login.html";
    }
  });
});
