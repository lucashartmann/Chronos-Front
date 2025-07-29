function calculo() {
  const minuto = parseInt(document.getElementById('minuto').value);
  const hora = parseInt(document.getElementById('hora').value);
  const dia = parseInt(document.getElementById('dia').value);
  const mes = parseInt(document.getElementById('mes').value);
  const ano = parseInt(document.getElementById('ano').value);

  const nascimento = new Date(ano, mes - 1, dia, hora, minuto);
  const agora = new Date();

  const diffMs = agora - nascimento;

  if (diffMs < 0) {
    alert("Data de nascimento no futuro?");
    return;
  }

  const minutos = Math.floor(diffMs / 60000);
  const horas = Math.floor(diffMs / 3600000);
  const dias = Math.floor(diffMs / 86400000);

  let anos = agora.getFullYear() - nascimento.getFullYear();
  let meses = agora.getMonth() - nascimento.getMonth();
  if (meses < 0) {
    anos--;
    meses += 12;
  }
  if (
    agora.getDate() < nascimento.getDate() ||
    (agora.getDate() === nascimento.getDate() && agora.getHours() < nascimento.getHours()) ||
    (agora.getDate() === nascimento.getDate() && agora.getHours() === nascimento.getHours() && agora.getMinutes() < nascimento.getMinutes())
  ) {
    meses--;
    if (meses < 0) {
      anos--;
      meses += 12;
    }
  }

  document.getElementById("AnosVividos").value = anos;
  document.getElementById("MesesVividos").value = anos * 12 + meses;
  document.getElementById("DiasVividos").value = dias;
  document.getElementById("HorasVividas").value = horas;
  document.getElementById("MinutosVividos").value = minutos;

  const proximoAniversario = new Date(agora.getFullYear(), mes - 1, dia, hora, minuto);
  if (agora > proximoAniversario) {
    proximoAniversario.setFullYear(agora.getFullYear() + 1);
  }

  const faltaMs = proximoAniversario - agora;
  const faltaDias = Math.floor(faltaMs / 86400000);
  const faltaMeses = Math.floor(faltaDias / 30); 

  const dado = document.getElementById("aniversario");
  if (
    agora.getDate() === dia &&
    agora.getMonth() + 1 === mes
  ) {
    dado.value = "Você está de aniversário hoje! Parabéns!";
  } else {
    dado.value = `Faltam ${faltaMeses} mês(es) e ${faltaDias % 30} dia(s) para o seu aniversário.\n`;
  }
}
