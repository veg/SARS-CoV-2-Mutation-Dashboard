var sidebar = document.getElementById("sidebar");

function sidebarToggle() {
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}

var profileDropdown = document.getElementById("ProfileDropDown");

function profileToggle() {
  if (profileDropdown.style.display === "none") {
    profileDropdown.style.display = "block";
  } else {
    profileDropdown.style.display = "none";
  }
}

/**
 * ### Modals ###
 */

function toggleModal(action, elem_trigger) {
  elem_trigger.addEventListener("click", function() {
    if (action == "add") {
      let modal_id = this.dataset.modal;
      document.getElementById(`${modal_id}`).classList.add("modal-is-open");
    } else {
      // Automaticlly get the opned modal ID
      let modal_id = elem_trigger.closest(".modal-wrapper").getAttribute("id");
      document.getElementById(`${modal_id}`).classList.remove("modal-is-open");
    }
  });
}

// Check if there is modals on the page
if (document.querySelector(".modal-wrapper")) {
  // Open the modal
  document.querySelectorAll(".modal-trigger").forEach(btn => {
    toggleModal("add", btn);
  });

  // close the modal
  document.querySelectorAll(".close-modal").forEach(btn => {
    toggleModal("remove", btn);
  });
}

function tabToggle(e) {
  let id = this.event.target.dataset.hash;

  // update classnames
  document.querySelectorAll(".tab-list").forEach(tabs => {
    tabs.querySelectorAll("li").forEach(elem => {
      elem.className = "mr-1";
      elem.querySelector("a").className =
        "bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold";
    });
  });

  this.event.target.className =
    "bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold";
  this.event.target.parentElement.className = "-mb-px mr-1";

  // get all tabs and display none besides anchor
  document.querySelectorAll(".tab-view").forEach(ctn => {
    if (id == ctn.id) {
      ctn.style.display = "block";
    } else {
      ctn.style.display = "none";
    }
  });
}

function panelToggle(e) {

  let id = this.event.target.dataset.panel;

  // get all tabs and display none besides anchor
  togglePanels(id);

}

function togglePanels(id) {
  document.querySelectorAll(".panel").forEach(panel => {

    if(id == "observablehq-6c794e13") {

      document.querySelectorAll(".dashboard-pointer").forEach(ctn => {
        ctn.className = "fas dashboard-pointer fa-angle-right float-right"
      });

      document.querySelectorAll(".summary-pointer").forEach(ctn => {
        ctn.className = "fas summary-pointer fa-angle-down float-right"
      });


      document.querySelectorAll(".dashboard-options").forEach(ctn => {
        ctn.style.display = "none"
      });

    } else {

      document.querySelectorAll(".dashboard-pointer").forEach(ctn => {
        ctn.className = "fas dashboard-pointer fa-angle-down float-right"
      });

      document.querySelectorAll(".summary-pointer").forEach(ctn => {
        ctn.className = "fas summary-pointer fa-angle-right float-right"
      });

      document.querySelectorAll(".dashboard-options").forEach(ctn => {
        ctn.style.display = "block"
      });
    }

    if (id == panel.id) {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
  });
}

d3
  .select("#observablehq-6abd9222 .observablehq-summary_table")
  .selectAll("tr")
  .on("click", function(d) {
    document
      .getElementsByClassName("observablehq-viewof-render_site")[0]
      .getElementsByTagName("select")[0].value =
      "3C,108,108,5";
    mainModule._scope
      .get("viewof render_site")
      ._value.dispatchEvent(new CustomEvent("input"));
  });

function tabToggleId(id) {

  let target = document.getElementById(id);

  // update classnames
  document.querySelectorAll(".tab-list").forEach(tabs => {
    tabs.querySelectorAll("li").forEach(elem => {
      elem.className = "mr-1";
      elem.querySelector("a").className =
        "bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold";
    });
  });

  target.className =
    "bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold";
  target.parentElement.className = "-mb-px mr-1";

  // get all tabs and display none besides anchor
  document.querySelectorAll(".tab-view").forEach(ctn => {
    if (id == ctn.id) {
      ctn.style.display = "block";
    } else {
      ctn.style.display = "none";
    }
  });
}

