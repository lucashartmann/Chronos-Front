  function calculo() {

    var minuto = document.getElementById('minuto').value
    var hora = document.getElementById('hora').value
    var dia = document.getElementById('dia').value
    var mes = document.getElementById('mes').value
    var ano = document.getElementById('ano').value

    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var hour = d.getHours();
    var minute = d.getMinutes();


    var a = ano - 1900;
    var bissexto = a % 4;
    var bissextoo = a % 100;
    var bissextooo = a % 400;

    var idadeEmAnos = d.getFullYear() - ano;
    if (month < mes) {
      idadeEmAnos = year - ano - 1;
    } else if (month == mes && date < dia) {
      idadeEmAnos = year - ano - 1;
    } else if (month == mes && date == dia && hour < hora) {
      idadeEmAnos = year - ano - 1;
    } else if (month == mes && date == dia && hour == hora && minute < minuto) {
      idadeEmAnos = year - ano - 1;
    }

    var idadeEmMeses = idadeEmAnos * 12 + (12 - mes) + month;
    if (date < dia) {
      idadeEmMeses = idadeEmAnos * 12 + (12 - mes) + month - 1;
    } else if (date == dia && hour < hora) {
      idadeEmMeses = idadeEmAnos * 12 + (12 - mes) + month - 1;
    } else if (date == dia && hour == hora && minute < minuto) {
      idadeEmMeses = idadeEmAnos * 12 + (12 - mes) + month - 1;
    }

    var idadeEmDias = (idadeEmAnos * 365) + ((12 - mes) * 31) + (31 - dia) + (((month - 1) * 31) + date - 1);
    if (hour > hora) {
      idadeEmDias = (idadeEmAnos * 365) + ((12 - mes) * 31) + (31 - dia) + (((month - 1) * 31) + date);
    } else if (hour == hora && minute > minuto) {
      idadeEmDias = (idadeEmAnos * 365) + ((12 - mes) * 31) + (31 - dia) + (((month - 1) * 31) + date);
    }
    if (bissexto == 0 && bissextooo == 0 && bissextoo > 0) {
      idadeEmDias = (idadeEmAnos * 366) + ((12 - mes) * 31) + (31 - dia) + (((month - 1) * 31) + date - 1);
    } else if (hour > hora) {
      idadeEmDias = (idadeEmAnos * 366) + ((12 - mes) * 31) + (31 - dia) + (((month - 1) * 31) + date);
    } else if (hour == hora && minute > minuto) {
      idadeEmDias = (idadeEmAnos * 366) + ((12 - mes) * 31) + (31 - dia) + (((month - 1) * 31) + date);
    }

    var idadeEmHoras = ((idadeEmDias - 1) * 24) + hour + (24 - hora);

    var idadeEmMinutos = (idadeEmHoras * 60) + minute + minuto;


    document.getElementById("AnosVividos").value = idadeEmAnos;
    document.getElementById("Mesesvividos").value = idadeEmMeses;
    document.getElementById("Diasvividos").value = idadeEmDias;
    document.getElementById("Horasvividas").value = idadeEmHoras;
    document.getElementById("Minutosvividos").value = idadeEmMinutos;

  }





