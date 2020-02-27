function Accordion(options) {
  // function called when onclick is trigged, this one add or remove several class
  checkClass = (event, index) => {
    let materialIcons = document.getElementsByClassName("material-icons")[
      index
    ];
    let subPanelMenu = document.getElementsByClassName("sub-panel-menu")[index];
    let subPanelContent = document.getElementById("sub-panel-content-" + index);

    if (subPanelContent.classList.contains("sub-panel-content")) {
      subPanelContent.classList.remove("sub-panel-content");
      subPanelMenu.classList.add("sub-panel-content-mr");
      materialIcons.innerHTML = `keyboard_arrow_up`;
    } else {
      subPanelContent.classList.add("sub-panel-content");
      subPanelMenu.classList.remove("sub-panel-content-mr");
      materialIcons.innerHTML = `keyboard_arrow_down`;
    }
  };

  // Check if Title Header exist and if true make it visible on menu
  if (options.mainTitle) {
    let divContainerAccordion = document.getElementById("my-accordion");
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<p>${options.mainTitle}</p>`;
    newDiv.classList.add("menu-title");
    divContainerAccordion.appendChild(newDiv);
  }

  // this one makes panel menu in accord to number of array inside obj options
  options.panels.forEach((element, index) => {
    console.log(element);
    let divContainerAccordion = document.getElementById("my-accordion");
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<p>${element.title}</p>`;
    newDiv.classList.add("panel-menu");
    newDiv.id = "panel-menu" + index;
    divContainerAccordion.appendChild(newDiv);

    document.getElementById("panel-menu" + index).innerHTML = `
      <div class="sub-panel-menu" onclick="checkClass(event,${index})">
        <div class="title">
          <p>${element.title}</p>
          ${element.subtitle && `<p>${element.subtitle}</p>`}
          
        </div>
           <i class="material-icons">keyboard_arrow_down</i>
        <div class="sub-panel-content sub-panel-content-fixed" id="sub-panel-content-${index}">
           ${element.content}
        </div>
      </div>
      `;
  });
}
