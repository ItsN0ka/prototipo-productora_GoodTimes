/* Formulario de cotización: valida datos, revisa horario y guarda una solicitud local. */
(() => {
  if (!Goodtimes.requireRole("cliente")) return;
  const form = document.getElementById("quote-form"),
    date = document.getElementById("q-date"),
    slots = document.getElementById("slots"),
    submit = document.getElementById("submit");
  const occupied = {
      "2026-11-08": ["10:00", "18:00"],
      "2026-11-21": ["16:00", "20:00"],
      "2026-11-28": ["12:00"],
    },
    times = ["10:00", "12:00", "16:00", "18:00", "20:00"];
  let selected = "";
  date.min = new Date().toLocaleDateString("en-CA");
  date.value = date.min;
  function draw() {
    slots.innerHTML = "";
    const busy = occupied[date.value] || [];
    times.forEach((time) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "slot" + (selected === time ? " active" : "");
      b.textContent = time;
      b.disabled = busy.includes(time);
      b.title = b.disabled ? "Horario ocupado" : "Seleccionar " + time;
      b.addEventListener("click", () => {
        selected = time;
        draw();
      });
      slots.appendChild(b);
    });
    submit.disabled = !selected;
    document.getElementById("slot-help").textContent = busy.length
      ? "Algunos horarios están ocupados."
      : "Selecciona uno de los horarios disponibles.";
  }
  date.addEventListener("change", () => {
    selected = "";
    draw();
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!selected) return;
    const d = Object.fromEntries(new FormData(form));
    const all = Pulso.load(),
      user = Pulso.session();
    const event = {
      id: "COT-" + Date.now().toString().slice(-7),
      name: d.name,
      type: d.type,
      date: d.date,
      time: selected,
      place: d.place,
      guests: Number(d.guests),
      status: "Pendiente",
      amount: 0,
      created: new Date().toISOString().slice(0, 10),
      description: d.description,
      client: user.email,
      contactName: d.contactName,
      phone: d.phone,
    };
    all.unshift(event);
    Pulso.save(all);
    form.reset();
    location.href = "cliente.html?sent=1";
  });
  draw();
})();
