document.addEventListener("DOMContentLoaded", function () {
      const checkbox = document.getElementById('hudba-id');
      const hudba = document.getElementById('hudba');

      const ulozeno = localStorage.getItem("hudbaZapnuta");
      const cas = localStorage.getItem("hudbaCas");

      // Obnovení času po načtení metadat
      if (cas) {
        hudba.addEventListener("loadedmetadata", () => {
          hudba.currentTime = parseFloat(cas);
        });
      }

      // Obnovení stavu hudby
      if (ulozeno === "true") {
        checkbox.checked = true;
        setTimeout(() => {
          hudba.play();
        }, 100);
      } else {
        checkbox.checked = false;
        hudba.pause();
      }

      // Při změně checkboxu
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          hudba.play();
          localStorage.setItem("hudbaZapnuta", "true");
        } else {
          hudba.pause();
          localStorage.setItem("hudbaZapnuta", "false");
        }
      });

      // Ukládání pozice každou sekundu
      setInterval(() => {
        if (!hudba.paused) {
          localStorage.setItem("hudbaCas", hudba.currentTime);
        }
      }, 1000);
    });