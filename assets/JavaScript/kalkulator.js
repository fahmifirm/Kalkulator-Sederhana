function jumlah() {
  var checkBox1 = document.getElementById("Checkbox1").checked;
  var checkBox2 = document.getElementById("Checkbox2").checked;
  var checkBox3 = document.getElementById("Checkbox3").checked;
  var bil1 = parseFloat(document.kalkulator.input1.value);
  var bil2 = parseFloat(document.kalkulator.input2.value);
  var bil3 = parseFloat(document.kalkulator.input3.value);
  var hasil;
  var centang = document.getElementById("checklist");
  var total = document.getElementById("hsl");
  var i1 = document.getElementById("in1");
  var i2 = document.getElementById("in2");
  var i3 = document.getElementById("in3");
  var operator;
  if (checkBox1 == true && checkBox2 == true && checkBox3 == true) {
    i1.innerHTML = bil1;
    i2.innerHTML = bil2;
    i3.innerHTML = bil3;
    centang.innerHTML = "Semua Input";
    hasil = bil1 + bil2 + bil3;
    document.getElementById("hasil").innerHTML = hasil;
    total.innerHTML = bil1 + "+" + bil2 + "+" + bil3 + "=" + hasil;
    document.getElementById("operator").innerHTML = "Jumlah (+)";
  } else if (checkBox1 == true && checkBox2 == true && checkBox3 == false) {
    i1.innerHTML = bil1;
    i2.innerHTML = bil2;
    i3.innerHTML = "";
    centang.innerHTML = "2 Input";
    hasil = bil1 + bil2;
    document.getElementById("hasil").innerHTML = hasil;
    total.innerHTML = bil1 + "+" + bil2 + "=" + hasil;
    document.getElementById("operator").innerHTML = "Jumlah (+)";
  } else if (checkBox1 == true && checkBox2 == false && checkBox3 == true) {
    i1.innerHTML = bil1;
    i2.innerHTML = "";
    i3.innerHTML = bil3;
    centang.innerHTML = "2 Input";
    hasil = bil1 + bil3;
    document.getElementById("hasil").innerHTML = hasil;
    total.innerHTML = bil1 + "+" + bil3 + "=" + hasil;
    document.getElementById("operator").innerHTML = "Jumlah (+)";
  } else if (checkBox1 == true && checkBox2 == false && checkBox3 == false) {
    alert("Minimal 2 Input!");
    i1.innerHTML = "";
    i2.innerHTML = "";
    i3.innerHTML = "";
    centang.innerHTML = "";
    hasil = "";
    document.getElementById("hasil").innerHTML = "";
    total.innerHTML = "";
    document.getElementById("operator").innerHTML = "";
  } else if (checkBox1 == false && checkBox2 == true && checkBox3 == true) {
    i1.innerHTML = "";
    i2.innerHTML = bil2;
    i3.innerHTML = bil3;
    centang.innerHTML = "2 Input";
    hasil = bil2 + bil3;
    total.innerHTML = bil2 + "+" + bil3 + "=" + hasil;
    document.getElementById("hasil").innerHTML = hasil;
    document.getElementById("operator").innerHTML = "Jumlah (+)";
  } else if (checkBox1 == false && checkBox2 == true && checkBox3 == false) {
    alert("Minimal 2 Input!");
    i1.innerHTML = "";
    i2.innerHTML = "";
    i3.innerHTML = "";
    centang.innerHTML = "";
    hasil = "";
    document.getElementById("hasil").innerHTML = "";
    total.innerHTML = "";
    document.getElementById("operator").innerHTML = "";
  } else if (checkBox1 == false && checkBox2 == false && checkBox3 == true) {
    alert("Minimal 2 Input!");
    i1.innerHTML = "";
    i2.innerHTML = "";
    i3.innerHTML = "";
    centang.innerHTML = "";
    hasil = "";
    document.getElementById("hasil").innerHTML = "";
    total.innerHTML = "";
    document.getElementById("operator").innerHTML = "";
  } else if (checkBox1 == false && checkBox2 == false && checkBox3 == false) {
    alert("Error");
    i1.innerHTML = "";
    i2.innerHTML = "";
    i3.innerHTML = "";
    centang.innerHTML = "";
    hasil = "";
    document.getElementById("hasil").innerHTML = "";
    total.innerHTML = "";
    document.getElementById("operator").innerHTML = "";
  }
}

function kurang() {
  var checkBox1 = document.getElementById("Checkbox1").checked;
  var checkBox2 = document.getElementById("Checkbox2").checked;
  var checkBox3 = document.getElementById("Checkbox3").checked;
  var bil1 = parseFloat(document.kalkulator.input1.value);
  var bil2 = parseFloat(document.kalkulator.input2.value);
  var bil3 = parseFloat(document.kalkulator.input3.value);
  var hasil;
  var centang = document.getElementById("checklist");
  var total = document.getElementById("hsl");
  var i1 = document.getElementById("in1");
  var i2 = document.getElementById("in2");
  var i3 = document.getElementById("in3");
  var operator;
  if (checkBox1 == true && checkBox2 == true && checkBox3 == true) {
    i1.innerHTML = bil1;
    i2.innerHTML = bil2;
    i3.innerHTML = bil3;
    centang.innerHTML = "Semua Input";
    hasil = bil1 - bil2 - bil3;
    document.getElementById("hasil").innerHTML = hasil;
    total.innerHTML = bil1 + "-" + bil2 + "-" + bil3 + "=" + hasil;
    document.getElementById("operator").innerHTML = "Kurang (-)";
  } else if (checkBox1 == true && checkBox2 == true && checkBox3 == false) {
    i1.innerHTML = bil1;
    i2.innerHTML = bil2;
    i3.innerHTML = "";
    centang.innerHTML = "2 Input";
    hasil = bil1 - bil2;
    document.getElementById("hasil").innerHTML = hasil;
    total.innerHTML = bil1 + "-" + bil2 + "=" + hasil;
    document.getElementById("operator").innerHTML = "Kurang (-)";
  } else if (checkBox1 == true && checkBox2 == false && checkBox3 == true) {
    i1.innerHTML = bil1;
    i2.innerHTML = "";
    i3.innerHTML = bil3;
    centang.innerHTML = "2 Input";
    hasil = bil1 - bil3;
    document.getElementById("hasil").innerHTML = hasil;
    total.innerHTML = bil1 + "-" + bil3 + "=" + hasil;
    document.getElementById("operator").innerHTML = "Kurang (-)";
  } else if (checkBox1 == true && checkBox2 == false && checkBox3 == false) {
    alert("Minimal 2 Input!");
    i1.innerHTML = "";
    i2.innerHTML = "";
    i3.innerHTML = "";
    centang.innerHTML = "";
    hasil = "";
    document.getElementById("hasil").innerHTML = "";
    total.innerHTML = "";
    document.getElementById("operator").innerHTML = "";
  } else if (checkBox1 == false && checkBox2 == true && checkBox3 == true) {
    i1.innerHTML = "";
    i2.innerHTML = bil2;
    i3.innerHTML = bil3;
    centang.innerHTML = "2 Input";
    hasil = bil2 - bil3;
    total.innerHTML = bil2 + "-" + bil3 + "=" + hasil;
    document.getElementById("hasil").innerHTML = hasil;
    document.getElementById("operator").innerHTML = "Kurang (-)";
  } else if (checkBox1 == false && checkBox2 == true && checkBox3 == false) {
    alert("Minimal 2 Input!");
    i1.innerHTML = "";
    i2.innerHTML = "";
    i3.innerHTML = "";
    centang.innerHTML = "";
    hasil = "";
    document.getElementById("hasil").innerHTML = "";
    total.innerHTML = "";
    document.getElementById("operator").innerHTML = "";
  } else if (checkBox1 == false && checkBox2 == false && checkBox3 == true) {
    alert("Minimal 2 Input!");
    i1.innerHTML = "";
    i2.innerHTML = "";
    i3.innerHTML = "";
    centang.innerHTML = "";
    hasil = "";
    document.getElementById("hasil").innerHTML = "";
    total.innerHTML = "";
    document.getElementById("operator").innerHTML = "";
  } else if (checkBox1 == false && checkBox2 == false && checkBox3 == false) {
    alert("Error");
    i1.innerHTML = "";
    i2.innerHTML = "";
    i3.innerHTML = "";
    centang.innerHTML = "";
    hasil = "";
    document.getElementById("hasil").innerHTML = "";
    total.innerHTML = "";
    document.getElementById("operator").innerHTML = "";
  }
}

function kali() {
  var checkBox1 = document.getElementById("Checkbox1").checked;
  var checkBox2 = document.getElementById("Checkbox2").checked;
  var checkBox3 = document.getElementById("Checkbox3").checked;
  var bil1 = parseFloat(document.kalkulator.input1.value);
  var bil2 = parseFloat(document.kalkulator.input2.value);
  var bil3 = parseFloat(document.kalkulator.input3.value);
  var hasil;
  var centang = document.getElementById("checklist");
  var total = document.getElementById("hsl");
  var i1 = document.getElementById("in1");
  var i2 = document.getElementById("in2");
  var i3 = document.getElementById("in3");
  var operator;
  if (checkBox1 == true && checkBox2 == true && checkBox3 == true) {
    i1.innerHTML = bil1;
    i2.innerHTML = bil2;
    i3.innerHTML = bil3;
    centang.innerHTML = "Semua Input";
    hasil = bil1 * bil2 * bil3;
    document.getElementById("hasil").innerHTML = hasil;
    total.innerHTML = bil1 + "*" + bil2 + "*" + bil3 + "=" + hasil;
    document.getElementById("operator").innerHTML = "Kali (*)";
  } else if (checkBox1 == true && checkBox2 == true && checkBox3 == false) {
    i1.innerHTML = bil1;
    i2.innerHTML = bil2;
    i3.innerHTML = "";
    centang.innerHTML = "2 Input";
    hasil = bil1 * bil2;
    document.getElementById("hasil").innerHTML = hasil;
    total.innerHTML = bil1 + "*" + bil2 + "=" + hasil;
    document.getElementById("operator").innerHTML = "Kali (*)";
  } else if (checkBox1 == true && checkBox2 == false && checkBox3 == true) {
    i1.innerHTML = bil1;
    i2.innerHTML = "";
    i3.innerHTML = bil3;
    centang.innerHTML = "2 Input";
    hasil = bil1 * bil3;
    document.getElementById("hasil").innerHTML = hasil;
    total.innerHTML = bil1 + "*" + bil3 + "=" + hasil;
    document.getElementById("operator").innerHTML = "Kali (*)";
  } else if (checkBox1 == true && checkBox2 == false && checkBox3 == false) {
    alert("Minimal 2 Input!");
    i1.innerHTML = "";
    i2.innerHTML = "";
    i3.innerHTML = "";
    centang.innerHTML = "";
    hasil = "";
    document.getElementById("hasil").innerHTML = "";
    total.innerHTML = "";
    document.getElementById("operator").innerHTML = "";
  } else if (checkBox1 == false && checkBox2 == true && checkBox3 == true) {
    i1.innerHTML = "";
    i2.innerHTML = bil2;
    i3.innerHTML = bil3;
    centang.innerHTML = "2 Input";
    hasil = bil2 * bil3;
    total.innerHTML = bil2 + "*" + bil3 + "=" + hasil;
    document.getElementById("hasil").innerHTML = hasil;
    document.getElementById("operator").innerHTML = "Kali (*)";
  } else if (checkBox1 == false && checkBox2 == true && checkBox3 == false) {
    alert("Minimal 2 Input!");
    i1.innerHTML = "";
    i2.innerHTML = "";
    i3.innerHTML = "";
    centang.innerHTML = "";
    hasil = "";
    document.getElementById("hasil").innerHTML = "";
    total.innerHTML = "";
    document.getElementById("operator").innerHTML = "";
  } else if (checkBox1 == false && checkBox2 == false && checkBox3 == true) {
    alert("Minimal 2 Input!");
    i1.innerHTML = "";
    i2.innerHTML = "";
    i3.innerHTML = "";
    centang.innerHTML = "";
    hasil = "";
    document.getElementById("hasil").innerHTML = "";
    total.innerHTML = "";
    document.getElementById("operator").innerHTML = "";
  } else if (checkBox1 == false && checkBox2 == false && checkBox3 == false) {
    alert("Error");
    i1.innerHTML = "";
    i2.innerHTML = "";
    i3.innerHTML = "";
    centang.innerHTML = "";
    hasil = "";
    document.getElementById("hasil").innerHTML = "";
    total.innerHTML = "";
    document.getElementById("operator").innerHTML = "";
  }
}

function bagi() {
  var checkBox1 = document.getElementById("Checkbox1").checked;
  var checkBox2 = document.getElementById("Checkbox2").checked;
  var checkBox3 = document.getElementById("Checkbox3").checked;
  var bil1 = parseFloat(document.kalkulator.input1.value);
  var bil2 = parseFloat(document.kalkulator.input2.value);
  var bil3 = parseFloat(document.kalkulator.input3.value);
  var hasil;
  var centang = document.getElementById("checklist");
  var total = document.getElementById("hsl");
  var i1 = document.getElementById("in1");
  var i2 = document.getElementById("in2");
  var i3 = document.getElementById("in3");
  var operator;
  if (checkBox1 == true && checkBox2 == true && checkBox3 == true) {
    i1.innerHTML = bil1;
    i2.innerHTML = bil2;
    i3.innerHTML = bil3;
    centang.innerHTML = "Semua Input";
    hasil = bil1 / bil2 / bil3;
    document.getElementById("hasil").innerHTML = hasil;
    total.innerHTML = bil1 + "/" + bil2 + "/" + bil3 + "=" + hasil;
    document.getElementById("operator").innerHTML = "Bagi (/)";
  } else if (checkBox1 == true && checkBox2 == true && checkBox3 == false) {
    i1.innerHTML = bil1;
    i2.innerHTML = bil2;
    i3.innerHTML = "";
    centang.innerHTML = "2 Input";
    hasil = bil1 / bil2;
    document.getElementById("hasil").innerHTML = hasil;
    total.innerHTML = bil1 + "/" + bil2 + "=" + hasil;
    document.getElementById("operator").innerHTML = "Bagi (/)";
  } else if (checkBox1 == true && checkBox2 == false && checkBox3 == true) {
    i1.innerHTML = bil1;
    i2.innerHTML = "";
    i3.innerHTML = bil3;
    centang.innerHTML = "2 Input";
    hasil = bil1 / bil3;
    document.getElementById("hasil").innerHTML = hasil;
    total.innerHTML = bil1 + "/" + bil3 + "=" + hasil;
    document.getElementById("operator").innerHTML = "Bagi (/)";
  } else if (checkBox1 == true && checkBox2 == false && checkBox3 == false) {
    alert("Minimal 2 Input!");
    i1.innerHTML = "";
    i2.innerHTML = "";
    i3.innerHTML = "";
    centang.innerHTML = "";
    hasil = "";
    document.getElementById("hasil").innerHTML = "";
    total.innerHTML = "";
    document.getElementById("operator").innerHTML = "";
  } else if (checkBox1 == false && checkBox2 == true && checkBox3 == true) {
    i1.innerHTML = "";
    i2.innerHTML = bil2;
    i3.innerHTML = bil3;
    centang.innerHTML = "2 Input";
    hasil = bil2 / bil3;
    total.innerHTML = bil2 + "/" + bil3 + "=" + hasil;
    document.getElementById("hasil").innerHTML = hasil;
    document.getElementById("operator").innerHTML = "Bagi (/)";
  } else if (checkBox1 == false && checkBox2 == true && checkBox3 == false) {
    alert("Minimal 2 Input!");
    i1.innerHTML = "";
    i2.innerHTML = "";
    i3.innerHTML = "";
    centang.innerHTML = "";
    hasil = "";
    document.getElementById("hasil").innerHTML = "";
    total.innerHTML = "";
    document.getElementById("operator").innerHTML = "";
  } else if (checkBox1 == false && checkBox2 == false && checkBox3 == true) {
    alert("Minimal 2 Input!");
    i1.innerHTML = "";
    i2.innerHTML = "";
    i3.innerHTML = "";
    centang.innerHTML = "";
    hasil = "";
    document.getElementById("hasil").innerHTML = "";
    total.innerHTML = "";
    document.getElementById("operator").innerHTML = "";
  } else if (checkBox1 == false && checkBox2 == false && checkBox3 == false) {
    alert("Error");
    i1.innerHTML = "";
    i2.innerHTML = "";
    i3.innerHTML = "";
    centang.innerHTML = "";
    hasil = "";
    document.getElementById("hasil").innerHTML = "";
    total.innerHTML = "";
    document.getElementById("operator").innerHTML = "";
  }
}
