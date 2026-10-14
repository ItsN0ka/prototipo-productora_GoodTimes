(function () {
  const KEY = "goodtimes-demo-v1";
  const initial = [
    {
      id: "COT-1082",
      name: "Aniversario Grupo Lumen",
      type: "Evento corporativo",
      date: "2026-11-28",
      time: "18:00",
      place: "Terraza Virreyes",
      guests: 180,
      status: "Confirmado",
      amount: 14850,
      created: "2026-06-08",
      description:
        "Cena de aniversario con escenario, presentación institucional y música en vivo.",
      client: "cliente@correo.com",
    },
    {
      id: "COT-1071",
      name: "Lanzamiento Colección Aura",
      type: "Activación de marca",
      date: "2026-12-12",
      time: "16:00",
      place: "Por definir",
      guests: 120,
      status: "Pendiente",
      amount: 0,
      created: "2026-06-10",
      description:
        "Presentación de producto con experiencia inmersiva y zona de exhibición.",
      client: "cliente@correo.com",
    },
    {
      id: "EV-024",
      name: "Lanzamiento Nova",
      type: "Evento corporativo",
      date: "2026-11-08",
      time: "18:00",
      place: "Museo de Arte Moderno",
      guests: 320,
      status: "Confirmado",
      amount: 18400,
      paid: 14720,
      client: "cliente@pulso.mx",
      description: "Lanzamiento de producto con escenario y pantalla LED.",
    },
    {
      id: "EV-023",
      name: "Boda Andrea & Mateo",
      type: "Boda o celebración",
      date: "2026-11-21",
      time: "16:00",
      place: "Hacienda San Gabriel",
      guests: 180,
      status: "Confirmado",
      amount: 12800,
      paid: 12800,
      client: "andrea@correo.com",
      description: "Boda con audio, iluminación y mobiliario.",
    },
    {
      id: "EV-022",
      name: "Cumbre Fintech",
      type: "Evento corporativo",
      date: "2026-10-14",
      time: "10:00",
      place: "Centro de Convenciones",
      guests: 650,
      status: "Finalizado",
      amount: 24900,
      paid: 24900,
      client: "banco@correo.com",
      description: "Conferencia con streaming y audio.",
    },
  ];

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || initial.slice();
    } catch (e) {
      return initial.splice();
    }
  }
  function save(events) {
    localStorage.setItem(KEY, JSON.stringify(events));
  }
  function money(n) {
    return n
      ? new Intl.NumberFormat("es-CL", {
          style: "currency",
          currency: "CLP",
          maximumFractionDigits: 0,
        }).format(n)
      : "En evaluación";
  }
  function dateLabel(s) {
    if (!s) return "Sin fecha";
    return new Date(s + "T12:00:00").toLocaleDateString("es-CL", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }
  function escape(s) {
    return String(s ?? "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  }
  function session() {
    try {
      return JSON.parse(sessionStorage.getItem("goodtimes-session"));
    } catch (e) {
      return null;
    }
  }
  function requireRole(role) {
    const s = session();
    if (!s || s.role !== role) {
      location.href = "login.html" + (role === "admin" ? "?role=admin" : "");
      return false;
    }
    return true;
  }
  function logout() {
    sessionStorage.removeItem("goodtimes-session");
    location.href = "index.html";
  }
  window.Goodtimes = {
    load,
    save,
    money,
    dateLabel,
    escape,
    session,
    requireRole,
    logout,
  };
})();
