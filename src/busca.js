import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

document.addEventListener("DOMContentLoaded", () => {
  const botaoBuscar = document.getElementById("buscar");

  botaoBuscar.addEventListener("click", async () => {
    const nomeBusca = document.getElementById("busca").value.trim().toLowerCase();
    const snap = await getDocs(collection(db, "associados"));

    const associado = snap.docs.find(doc =>
      doc.data().nome.toLowerCase() === nomeBusca
    );

    const resultado = document.getElementById("resultado");

    if (associado) {
      const dados = associado.data();
      resultado.innerHTML = `
        <h2>${dados.nome}</h2>
        <p>Plano: ${dados.plano}</p>
        <p>Benefícios: ${dados.beneficios.join(", ")}</p>
        <p>Expira em: ${dados.expiracao}</p>
      `;
    } else {
      resultado.innerText = "Associado não encontrado.";
    }
  });
});