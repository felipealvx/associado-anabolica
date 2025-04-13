import { db } from "../firebase/firebase";
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
        <div style="border: 1px solid #ccc; padding: 10px; margin-top: 10px; border-radius: 5px;">
          <h2>${dados.nome}</h2>
          <p>Plano: ${dados.plano}</p>
          <p>Benefícios: ${dados.beneficios.join(", ")}</p>
          <p>Expira em: ${dados.expiracao}</p>
        </div>
      `;
    } else {
      resultado.innerText = "Associado não encontrado.";
    }
  });
});