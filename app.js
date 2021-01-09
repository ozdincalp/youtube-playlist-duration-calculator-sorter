var removeIcon = `<svg width="16" height="16" viewBox="0 0 166 166" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="83" cy="83" r="83" fill="white" />
<line x1="39.2874" y1="31.6808" x2="131.487" y2="123.328" stroke="#F05B56" stroke-width="15" />
<line x1="131.227" y1="30.3033" x2="39.3033" y2="122.227" stroke="#F05B56" stroke-width="15" />
</svg>`;
var additionIcon = `<svg width="16" height="16" viewBox="0 0 166 166" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="83" cy="83" r="83" fill="white"/>
<rect x="47.5775" y="68.9974" width="55.17" height="20" rx="10" transform="rotate(45 47.5775 68.9974)" fill="#57BB3E"/>
<rect x="60" y="108.625" width="92.8075" height="20" rx="10" transform="rotate(-45 60 108.625)" fill="#57BB3E"/>
</svg>`;

function createDiv(
  innerHTML,
  id,
  onclickAttribute,
  explanation,
  onMouseEnterAttribute,
  onMouseLeaveAttribute
) {
  let div = document.createElement("div");
  div.style.width = "24px";
  div.style.height = "24px";
  div.style.marginTop = "8px";
  div.style.marginLeft = "12px";
  div.innerHTML = innerHTML;
  div.id = id;
  div.addEventListener("click", onclickAttribute);
  div.setAttribute("explanation", explanation);
  div.addEventListener("mouseenter", onMouseEnterAttribute);
  div.addEventListener("mouseleave", onMouseLeaveAttribute);
  div.style.cursor = "pointer";
  playlistPanel.appendChild(div);
  icons.push(div);
}
function insertRemoveAllIcon() {
  const removeAllIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.6933 6.30667L6.29135 15.7087C5.57816 16.4218 5.51454 17.5145 6.14926 18.1493C6.78397 18.784 7.87667 18.7204 8.58986 18.0072L17.9918 8.60518C18.705 7.89199 18.7687 6.79929 18.1339 6.16458C17.4992 5.52986 16.4065 5.59348 15.6933 6.30667Z" fill="#909090"/>
      <path d="M6.30667 8.58987L15.7087 17.9919C16.4218 18.705 17.5145 18.7687 18.1493 18.1339C18.784 17.4992 18.7204 16.4065 18.0072 15.6933L8.60518 6.29136C7.89199 5.57817 6.79929 5.51455 6.16458 6.14927C5.52986 6.78399 5.59348 7.87668 6.30667 8.58987Z" fill="#909090"/>
      </svg>    
  `;

  const removeAllIconExplanation = "Remove all videos from calculation";
  createDiv(
    removeAllIcon,
    "removeAll",
    function () {
      removeAll(this);
    },
    removeAllIconExplanation,
    function () {
      explainSelection(this);
    },
    function () {
      destroyExplanation(this);
    }
  );
}

function insertAddAllIcon() {
  const addAllIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5735 15.86L5.85703 11.1435C5.1164 10.4029 3.91559 10.4029 3.17495 11.1435C2.43431 11.8842 2.43431 13.085 3.17495 13.8256L7.8914 18.5421C8.63204 19.2827 9.83285 19.2827 10.5735 18.5421C11.3141 17.8014 11.3141 16.6006 10.5735 15.86Z" fill="#909090"/>
      <path d="M17.9769 6.21309L8.21305 15.9769C7.47241 16.7175 7.47242 17.9183 8.21305 18.659C8.95369 19.3996 10.1545 19.3996 10.8951 18.659L20.6589 8.89517C21.3996 8.15454 21.3996 6.95372 20.6589 6.21309C19.9183 5.47245 18.7175 5.47245 17.9769 6.21309Z" fill="#909090"/>
      </svg>
  `;
  const addAllIconExplanation = "Add all videos to calculation";
  createDiv(
    addAllIcon,
    "addAll",
    function () {
      addAll(this);
    },
    addAllIconExplanation,
    function () {
      explainSelection(this);
    },
    function () {
      destroyExplanation(this);
    }
  );
}
function insertSelectionIcon() {
  const selectionIcon = `<svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
      <path d="M12.5 28.3333C12.04 28.3333 11.6667 27.96 11.6667 27.5V8.33333C11.6667 6.495 13.1617 5 15 5C16.8384 5 18.3334 6.495 18.3334 8.33333V25.8333C18.3334 26.2933 17.96 26.6667 17.5 26.6667C17.04 26.6667 16.6667 26.2933 16.6667 25.8333V8.33333C16.6667 7.41333 15.92 6.66667 15 6.66667C14.08 6.66667 13.3334 7.41333 13.3334 8.33333V27.5C13.3334 27.96 12.96 28.3333 12.5 28.3333Z" fill="#909090"/>
      <path d="M22.5 26.6667C22.04 26.6667 21.6667 26.2933 21.6667 25.8333V18.3333C21.6667 17.4133 20.92 16.6667 20 16.6667C19.08 16.6667 18.3334 17.4133 18.3334 18.3333C18.3334 18.7933 17.96 19.1667 17.5 19.1667C17.04 19.1667 16.6667 18.7933 16.6667 18.3333C16.6667 16.495 18.1617 15 20 15C21.8384 15 23.3334 16.495 23.3334 18.3333V25.8333C23.3334 26.2933 22.96 26.6667 22.5 26.6667Z" fill="#909090"/>
      <path d="M27.5 26.6667C27.04 26.6667 26.6667 26.2934 26.6667 25.8334V20C26.6667 19.08 25.92 18.3334 25 18.3334C24.08 18.3334 23.3334 19.08 23.3334 20C23.3334 20.46 22.96 20.8334 22.5 20.8334C22.04 20.8334 21.6667 20.46 21.6667 20C21.6667 18.1617 23.1617 16.6667 25 16.6667C26.8384 16.6667 28.3334 18.1617 28.3334 20V25.8334C28.3334 26.2934 27.96 26.6667 27.5 26.6667Z" fill="#909090"/>
      <path d="M25.8333 40H16.1883C13.3833 40 10.49 38.7783 8.445 36.7316C6.18833 34.4733 4.99666 31.2516 5.00166 27.4183C5.00333 24.2483 7.655 21.6666 10.91 21.6666H12.5C12.96 21.6666 13.3333 22.04 13.3333 22.5C13.3333 22.96 12.96 23.3333 12.5 23.3333H10.91C8.57333 23.3333 6.67 25.1683 6.66833 27.42C6.665 30.85 7.66 33.585 9.62333 35.5533C11.6717 37.6033 14.3567 38.3333 16.1883 38.3333H25.8333C29.05 38.3333 31.6667 35.7166 31.6667 32.5V21.6666C31.6667 20.7466 30.92 20 30 20C29.08 20 28.3333 20.7466 28.3333 21.6666C28.3333 22.1266 27.96 22.5 27.5 22.5C27.04 22.5 26.6667 22.1266 26.6667 21.6666C26.6667 19.8283 28.1617 18.3333 30 18.3333C31.8383 18.3333 33.3333 19.8283 33.3333 21.6666V32.5C33.3333 36.635 29.9683 40 25.8333 40V40Z" fill="#909090"/>
      <path d="M20.8334 13.8667C20.6484 13.8667 20.46 13.805 20.3067 13.6783C19.95 13.3867 19.8984 12.8633 20.19 12.5067C21.155 11.3233 21.6667 9.88 21.6667 8.33333C21.6667 4.65667 18.6767 1.66667 15 1.66667C11.3234 1.66667 8.33335 4.65667 8.33335 8.33333C8.33335 9.88 8.84502 11.3233 9.81169 12.5067C10.1034 12.8633 10.0517 13.3867 9.69502 13.6783C9.34002 13.9717 8.81502 13.9183 8.52335 13.5617C7.30835 12.0767 6.66669 10.2683 6.66669 8.33333C6.66669 3.73833 10.405 0 15 0C19.595 0 23.3334 3.73833 23.3334 8.33333C23.3334 10.2683 22.6917 12.0767 21.4784 13.5617C21.3134 13.7633 21.075 13.8667 20.8334 13.8667V13.8667Z" fill="#909090"/>
      </g>
      <defs>
      <clipPath id="clip0">
      <rect width="40" height="40" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      `;
  const selectionIconExplanation = "Calculate duration after spesific video";
  createDiv(
    selectionIcon,
    "selection",
    function () {
      addTargets(this);
    },
    selectionIconExplanation,
    function () {
      explainSelection(this);
    },
    function () {
      destroyExplanation(this);
    }
  );
}
function insertBackToOriginalIcon() {
  const backToOriginalcon = `<svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
      <path d="M29.6494 13.563H5.96352L10.8095 8.71703C11.4917 8.03486 11.4917 6.92903 10.8095 6.24687C10.1272 5.56451 9.02153 5.5647 8.33917 6.24687L0.511625 14.0748C-0.170542 14.757 -0.170542 15.8628 0.511625 16.545L8.33917 24.3725C8.68035 24.7137 9.1273 24.8841 9.57425 24.8841C10.0212 24.8841 10.4682 24.7135 10.8093 24.3725C11.4915 23.6903 11.4915 22.5845 10.8093 21.9023L5.96333 17.0563H29.6492C33.4303 17.0563 36.5065 20.1326 36.5065 23.9137C36.5065 27.6948 33.4303 30.7711 29.6492 30.7711H15.2408C14.2761 30.7711 13.4941 31.553 13.4941 32.5178C13.4941 33.4825 14.2761 34.2644 15.2408 34.2644H29.6492C35.3565 34.2644 39.9999 29.621 39.9999 23.9137C39.9999 18.2064 35.3567 13.563 29.6494 13.563Z" fill="#909090"/>
      </g>
      <defs>
      <clipPath id="clip0">
      <rect width="40" height="40" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      `;
  const backToOriginalIconExplanation = "Turn back original playlist order";
  createDiv(
    backToOriginalcon,
    "backtooriginal",
    function () {
      backToOriginal(this);
    },
    backToOriginalIconExplanation,
    function () {
      explainSelection(this);
    },
    function () {
      destroyExplanation(this);
    }
  );
}
function insertSortbyNameIcon() {
  const sortByNameIcon = `<svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.56984 15.3231H10.0931V5.22997C10.0931 2.44285 7.83368 0.183411 5.04656 0.183411C2.25944 0.183411 0 2.44285 0 5.22997V15.3231H2.52328V11.5382H7.56984V15.3231ZM2.52328 9.0149V5.22997C2.52328 3.83641 3.653 2.70669 5.04656 2.70669C6.44012 2.70669 7.56984 3.83641 7.56984 5.22997V9.0149H2.52328Z" fill="#909090"/>
          <path d="M22.7095 10.9074C22.7092 9.71882 22.2277 8.58097 21.3747 7.75326C23.1202 6.05509 23.1584 3.2634 21.4603 1.51799C20.6286 0.663233 19.4863 0.181759 18.2938 0.183415H12.6164V15.3231H18.2938C20.7325 15.3231 22.7095 13.3461 22.7095 10.9074ZM15.1397 2.7067H18.2938C19.339 2.7067 20.1862 3.55397 20.1862 4.59916C20.1862 5.64435 19.339 6.49162 18.2938 6.49162H15.1397V2.7067ZM15.1397 9.0149H18.2938C19.339 9.0149 20.1862 9.86217 20.1862 10.9074C20.1862 11.9526 19.339 12.7998 18.2938 12.7998H15.1397V9.0149Z" fill="#909090"/>
          <path d="M30.2794 15.3231C33.0665 15.3231 35.326 13.0637 35.326 10.2765H32.8027C32.8027 11.6701 31.673 12.7998 30.2794 12.7998C28.8859 12.7998 27.7561 11.6701 27.7561 10.2765V5.22997C27.7561 3.83641 28.8859 2.70669 30.2794 2.70669C31.673 2.70669 32.8027 3.83641 32.8027 5.22997H35.326C35.326 2.44285 33.0665 0.183411 30.2794 0.183411C27.4923 0.183411 25.2328 2.44285 25.2328 5.22997V10.2765C25.2328 13.0637 27.4923 15.3231 30.2794 15.3231Z" fill="#909090"/>
          <path d="M15.1397 36.2487L7.20022 28.3092L5.41626 30.0931L15.1397 39.8166L32.8658 22.0905L31.0818 20.3066L15.1397 36.2487Z" fill="#909090"/>
          <path d="M38.2154 13.1716L36.4312 14.9558L38.2154 16.74L39.9996 14.9558L38.2154 13.1716Z" fill="#909090"/>
          <path d="M32.8663 18.5236L34.6505 20.3078L36.4347 18.5236L34.6505 16.7394L32.8663 18.5236Z" fill="#909090"/>
          </svg>
          `;
  const sortByNameIconExplanation = "Sort playlist by video names";
  createDiv(
    sortByNameIcon,
    "sortbyname",
    function () {
      sortbyName(this);
    },
    sortByNameIconExplanation,
    function () {
      explainSelection(this);
    },
    function () {
      destroyExplanation(this);
    }
  );
}
function insertSortbyLengthIcon() {
  const sortByLengthIcon = `<svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
              <path d="M32.5503 11.5916L33.5725 10.5704C34.4602 11.0556 35.2854 11.1564 35.7043 10.7395C36.3383 10.1045 35.7907 8.52607 34.4832 7.21666C33.1738 5.90725 31.5954 5.3587 30.9614 5.99563C30.5425 6.41449 30.6443 7.23971 31.1304 8.12739L29.9767 9.28117C27.7392 7.65089 25.0954 6.55475 22.223 6.17816V3.8754C23.4719 3.50938 24.3144 2.85131 24.3144 2.09237C24.3144 0.937628 22.3815 0 20.0009 0C17.6194 0 15.6875 0.937628 15.6875 2.09237C15.6875 2.85131 16.53 3.51034 17.7789 3.8754V6.17624C9.45646 7.27046 3.00739 14.393 3.00739 23.0074C3.00739 32.3779 10.6304 40 20 40C29.3695 40 36.9925 32.376 36.9925 23.0074C36.9925 18.6084 35.3017 14.6101 32.5503 11.5916ZM20 38.9529C11.2068 38.9529 4.05261 31.7986 4.05261 23.0036C4.05261 14.2085 11.2059 7.05526 20 7.05526C28.7941 7.05526 35.9473 14.2085 35.9473 23.0036C35.9473 31.7986 28.7921 38.9529 20 38.9529ZM20 7.8411C11.6391 7.8411 4.83749 14.6427 4.83749 23.0045C4.83749 31.3654 11.6391 38.1689 20 38.1689C28.3608 38.1689 35.1624 31.3654 35.1624 23.0045C35.1624 14.6427 28.3608 7.8411 20 7.8411ZM20 36.0756C12.7929 36.0756 6.9289 30.2116 6.9289 23.0065C6.9289 15.7994 12.7929 9.93539 20 9.93539C27.2061 9.93539 33.0701 15.7994 33.0701 23.0065C33.0701 30.2126 27.207 36.0756 20 36.0756ZM20.5235 12.2852H19.4774V10.4561H20.5235V12.2852ZM19.4774 33.7239H20.5226V35.552H19.4774V33.7239ZM32.5494 22.4819V23.5272H30.7193V22.4819H32.5494ZM9.28161 23.5272H7.45151V22.4819H9.28161V23.5272ZM25.9889 11.9653L26.8881 12.5033L25.9476 14.074L25.0484 13.536L25.9889 11.9653ZM14.0514 31.937L14.9496 32.474L14.0101 34.0447L13.1119 33.5077L14.0514 31.937ZM29.4675 28.0568L31.0401 28.9954L30.5012 29.8926L28.9305 28.9541L29.4675 28.0568ZM9.49777 16.1164L11.0685 17.056L10.5315 17.9542L8.96074 17.0137L9.49777 16.1164ZM29.6673 18.3452L29.1668 17.4268L30.775 16.5526L31.2755 17.472L29.6673 18.3452ZM10.3336 27.6648L10.8331 28.5842L9.22493 29.4565L8.72538 28.5371L10.3336 27.6648ZM25.5787 32.1714L26.4519 33.7796L25.5325 34.2801L24.6593 32.669L25.5787 32.1714ZM14.4222 13.8348L13.548 12.2285L14.4664 11.728L15.3406 13.3353L14.4222 13.8348ZM20.7839 15.1615V23.0045C20.7839 23.2245 20.7147 23.4378 20.5869 23.6165L15.8815 30.152C15.6778 30.4374 15.357 30.5872 15.0323 30.5872C14.8209 30.5872 14.6076 30.5238 14.4222 30.3903C13.9534 30.0521 13.8468 29.3998 14.1849 28.93L18.6934 22.6654V15.1596C18.6934 14.5813 19.1613 14.1144 19.7387 14.1144C20.317 14.1144 20.7839 14.5841 20.7839 15.1615Z" fill="#909090"/>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="40" height="40" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              `;
  const sortByLengthIconExplanation = "Sort playlist by video lengths";
  createDiv(
    sortByLengthIcon,
    "sortbylength",
    function () {
      sortbyLength(this);
    },
    sortByLengthIconExplanation,
    function () {
      explainSelection(this);
    },
    function () {
      destroyExplanation(this);
    }
  );
}

function addIconsToPage() {
  playlistPanel = document.createElement("div");
  playlistPanel.style.width = "240px";
  playlistPanel.style.height = "40px";
  playlistPanel.style.border = "1px dashed #aaaaaa";
  playlistPanel.style.display = "flex";
  insertSelectionIcon();
  insertSortbyNameIcon();
  insertSortbyLengthIcon();
  insertBackToOriginalIcon();
  insertAddAllIcon();
  insertRemoveAllIcon();
  Panel.appendChild(playlistPanel);
  rearrangeToggle();
}

function explainSelection(el) {
  let explanation = el.querySelector(".iconExplanation");
  let coordinates = el.getBoundingClientRect();
  let top = coordinates.bottom + window.scrollY + "px";
  let left = coordinates.left + "px";
  if (!explanation) {
    let div = document.createElement("div");
    div.classList.add("iconExplanation");
    div.innerHTML = el.getAttribute("explanation");
    div.style.position = "absolute";
    div.style.top = top;
    div.style.left = left;
    div.style.backgroundColor = "#616161";
    div.style.fontSize = "13.333px";
    div.style.padding = "8px";
    div.style.color = "white";
    div.style.zIndex = "99";
    div.style.opacity = "0.9";
    div.style.marginTop = "10px";
    div.style.borderRadius = "2px";
    div.style.fontWeight = "1px";
    div.style.fontFamily = "Roboto";
    el.appendChild(div);
  } else {
    explanation.style.display = "initial";
    explanation.style.top = top;
    explanation.style.left = left;
  }
}
function destroyExplanation(el) {
  let explanation = el.querySelector(".iconExplanation");
  explanation.style.display = "none";
}

function changeClickedIconColor(el) {
  let icon = el;
  let others = icons.filter((other) => other !== el);
  if (icon !== undefined) {
    icon.setAttribute("selected", "true");
    icon = icon.querySelector("svg").querySelectorAll("path");
    for (let i = 0; i < icon.length; i++) {
      icon[i].setAttribute("fill", "#065fd4");
    }
  }
  for (let i = 0; i < others.length; i++) {
    if (others[i].getAttribute("selected") == "true") {
      changeUnclickedIconColor(others[i]);
    }
  }
}
function changeUnclickedIconColor(el) {
  let icon = el;
  icon.setAttribute("selected", "false");
  icon = icon.querySelector("svg").querySelectorAll("path");
  for (let i = 0; i < icon.length; i++) {
    icon[i].setAttribute("fill", "#909090");
  }
}
function createInsideIcons(index, className, icon, onclickAttribute) {
  let div = document.createElement("div");
  div.dataset.index = index;
  div.classList.add(className);
  div.innerHTML = icon;
  div.addEventListener("click", onclickAttribute);
  playlistItems[index].appendChild(div);
}

function initializePlaylist(videos) {
  for (let i = 0; i < videos.length; i++) {
    addRemoveIcon(i);
  }
}

function addRemoveIcon(index) {
  if (playlistItems[index].querySelector(".remove") === null) {
    createInsideIcons(index, "remove", removeIcon, function () {
      getIndex(this);
    });
  } else {
    playlistItems[index].querySelector(".remove").style.display = "initial";
  }
}
function addAdditionIcon(index) {
  if (playlistItems[index].querySelector(".add") === null) {
    createInsideIcons(index, "add", additionIcon, function () {
      getAddIndex(this);
    });
  } else {
    playlistItems[index].querySelector(".add").style.display = "initial";
  }
}
function rearrangeToggle() {
  let playlistTopRow = document.getElementById("header-top-row");
  let panel = document.querySelector("ytd-playlist-panel-renderer");
  playlistTopRow.addEventListener("click", () => {
    if (!panel.hasAttribute("collapsed")) {
      panel.querySelector("#items").style.display = "none";
    } else {
      panel.querySelector("#items").style.display = "initial";
    }
  });
}

function getVideos() {
  let videos = document.querySelectorAll("ytd-playlist-panel-video-renderer");
  return videos;
}

function filterDeletedVideos(video) {
  let timeStatus = video.querySelector(
    ".style-scope ytd-thumbnail-overlay-time-status-renderer"
  );
  if (timeStatus === null) {
    video.style.display = "none";
    return false;
  } else {
    return true;
  }
}

function getVideoLengths(videos) {
  let videoLengths = [];
  for (let video of videos) {
    let videoLength = video.querySelector(
      ".style-scope ytd-thumbnail-overlay-time-status-renderer"
    );
    videoLengths.push(videoLength.textContent.trim());
  }
  return videoLengths;
}
function addFlexbox() {
  let items = document.getElementsByClassName(
    "playlist-items yt-scrollbar-dark style-scope ytd-playlist-panel-renderer"
  ).items;
  items.style.flexDirection = "column";
  items.style.display = "flex";
  for (let i = 0; i < playlistItems.length; i++) {
    playlistItems[i].style.order = i;
  }
}
function calculateDurations(videos) {
  let hr = 0;
  let mn = 0;
  let sc = 0;
  for (let duration of videos) {
    if (duration.split(":").length === 3) {
      hr += Number(duration.split(":")[0]);
      mn += Number(duration.split(":")[1]);
    } else if (duration.split(":").length === 2) {
      mn += Number(duration.split(":")[0]);
    }
    sc += Number(duration.split(":")[Number(duration.split(":").length) - 1]);
  }
  mn += Number((sc / 60).toString().split(".")[0]);
  sc = sc % 60;
  hr += Number((mn / 60).toString().split(".")[0]);
  mn = mn % 60;
  return [hr, mn, sc];
}

function addDurationToPage(hr, mn, sc) {
  const element = document.getElementById("publisher-container");
  let durationDiv = document.createElement("div");
  durationDiv.id = "total-playlist-duration";
  durationDiv.innerHTML = `${hr} hours, ${mn} minutes, ${sc} seconds!`;
  durationDiv.style.paddingLeft = "25px";
  if (document.getElementsByTagName("html")[0].getAttribute("dark")) {
    durationDiv.style.color = "#ffffff";
  }
  element.appendChild(durationDiv);
}

function getIndex(el) {
  playlistItems[el.dataset.index].querySelector("a").style.opacity = "0.3";
  let substractedLength = [];
  substractedLength.push(videoLengths[el.dataset.index]);
  removeDuration(...calculateDurations(substractedLength));
  el.style.display = "none";
  addAdditionIcon(el.dataset.index);
}

function removeDuration(hour, minute, second) {
  if (second > secondDuration) {
    secondDuration += 60;
    minuteDuration--;
  }
  if (minute > minuteDuration) {
    minuteDuration += 60;
    hourDuration--;
  }
  hourDuration -= hour;
  minuteDuration -= minute;
  secondDuration -= second;
  updateDurationText(hourDuration, minuteDuration, secondDuration);
}

function getAddIndex(el) {
  playlistItems[el.dataset.index].querySelector("a").style.opacity = "1";
  let addedLength = [];
  addedLength.push(videoLengths[el.dataset.index]);
  addDuration(...calculateDurations(addedLength));
  el.style.display = "none";
  addRemoveIcon(el.dataset.index);
}

function addDuration(hour, minute, second) {
  hourDuration += hour;
  minuteDuration += minute;
  secondDuration += second;

  if (secondDuration > 59) {
    secondDuration %= 60;
    minuteDuration++;
  }
  if (minuteDuration > 59) {
    minuteDuration %= 60;
    hourDuration++;
  }
  updateDurationText(hourDuration, minuteDuration, secondDuration);
}

function removeAll(el) {
  changeClickedIconColor(el);
  for (let i = 0; i < playlistItems.length; i++) {
    let item = playlistItems[i];
    item.querySelector(".remove").style.display = "none";
    item.querySelector("a").style.opacity = "0.3";
    addAdditionIcon(i);
  }
  hourDuration = 0;
  minuteDuration = 0;
  secondDuration = 0;
  updateDurationText(hourDuration, minuteDuration, secondDuration);
}

function addAll(el) {
  changeClickedIconColor(el);
  for (let i = 0; i < playlistItems.length; i++) {
    let item = playlistItems[i];
    item.querySelector(".remove").style.display = "initial";
    let addIcon = item.querySelector(".add");
    if (addIcon !== null) {
      addIcon.style.display = "none";
    }
    item.querySelector("a").style.opacity = "1";
  }
  durations = [...calculateDurations(videoLengths)];
  hourDuration, minuteDuration, secondDuration;
  [hourDuration, minuteDuration, secondDuration] = [...durations];
  updateDurationText(hourDuration, minuteDuration, secondDuration);
}

function calculateFromThis(el) {
  let array = playlistItems;
  let length = playlistItems.length;
  array = array.slice(el.dataset.index, length);
  let videoLengths = getVideoLengths(array);
  let hourDuration, minuteDuration, secondDuration;
  let durations = [...calculateDurations(videoLengths)];
  [hourDuration, minuteDuration, secondDuration] = [...durations];
  updateDurationText(hourDuration, minuteDuration, secondDuration);
  for (let i = 0; i < length; i++) {
    let item = playlistItems[i];
    item.style.borderTop = "none";
    if (Number(item.style.order) < el.dataset.index) {
      item.style.opacity = "0.3";
    } else if (Number(item.style.order) == el.dataset.index) {
      item.style.borderTop = "2px dashed #aaaaaa";
      item.style.opacity = "1";
    } else {
      item.style.opacity = "1";
    }
  }
}
function addDropTargets() {
  for (let i = 0; i < playlistItems.length; i++) {
    const item = playlistItems[i];
    const itemAdd = item.querySelector(".add");
    const itemRemove = item.querySelector(".remove");
    const itemFrom = item.querySelector(".from");
    item.querySelector("a").style.opacity = "1";
    if (itemFrom === null) {
      itemRemove.style.display = "none";
      if (itemAdd !== null) {
        itemAdd.style.display = "none";
      }
      let div = document.createElement("div");
      div.style.width = "50px";
      div.style.height = "25px";
      div.style.border = "1px dashed #aaaaaa";
      div.dataset.index = i;
      div.classList.add("from");
      div.addEventListener("click", function () {
        calculateFromThis(this);
      });
      item.appendChild(div);
    } else {
      itemFrom.dataset.index = i;
      itemRemove.style.display = "none";
      if (itemAdd !== null) {
        itemAdd.style.display = "none";
      }
      itemFrom.style.display = "initial";
    }
  }
  let hourDuration, minuteDuration, secondDuration;
  [hourDuration, minuteDuration, secondDuration] = [...durations];
  updateDurationText(hourDuration, minuteDuration, secondDuration);
}
function removeDropTargets() {
  for (let i = 0; i < playlistItems.length; i++) {
    const item = playlistItems[i];
    item.querySelector(".remove").style.display = "initial";
    item.querySelector(".remove").dataset.index = i;
    item.querySelector(".from").style.display = "none";
    item.style.opacity = "1";
    item.style.border = "";
  }
  [hourDuration, minuteDuration, secondDuration] = [...durations];
  updateDurationText(hourDuration, minuteDuration, secondDuration);
}

function addTargets(el) {
  changeClickedIconColor(el);
  let clickCount = el.getAttribute("clicked");
  clickCount++;
  el.setAttribute("clicked", clickCount);
  const removeAllIcon = document.getElementById("removeAll");
  const addAllIcon = document.getElementById("addAll");
  if (clickCount % 2 === 1) {
    addDropTargets();
    removeAllIcon.style.pointerEvents = "none";
    addAllIcon.style.pointerEvents = "none";
  } else {
    removeDropTargets();
    removeAllIcon.style.pointerEvents = "auto";
    addAllIcon.style.pointerEvents = "auto";
  }
}

function backToOriginal(el) {
  changeClickedIconColor(el);
  playlistItems = originalPlaylist;
  videoLengths = getVideoLengths(playlistItems);
  for (let i = 0; i < playlistItems.length; i++) {
    const item = playlistItems[i];
    const itemAdd = item.querySelector(".add");
    const itemRemove = item.querySelector(".remove");
    const itemFrom = item.querySelector(".from");
    item.style.order = i;
    reorderIcon(itemAdd, itemRemove, itemFrom, i);
  }
}
function sortbyName(el) {
  changeClickedIconColor(el);
  let sortedTitles = [];
  const length = playlistItems.length;
  for (let i = 0; i < length; i++) {
    let name = playlistItems[i].querySelector("#video-title").title;
    sortedTitles.push(name);
  }
  sortedTitles = sortedTitles.sort();
  for (let i = 0; i < length; i++) {
    let item = playlistItems[i];
    let videoName = item.querySelector("#video-title").title;
    for (let y = 0; y < length; y++) {
      if (videoName === sortedTitles[y]) {
        item.style.order = y;
      }
    }
  }
  let sortedPlaylist = [];
  for (let y = 0; y < length; y++) {
    for (let i = 0; i < length; i++) {
      const item = playlistItems[i];
      if (item.style.order === y.toString()) {
        sortedPlaylist.push(item);
      }
    }
  }
  playlistItems = sortedPlaylist;
  for (let i = 0; i < length; i++) {
    const item = playlistItems[i];
    const itemAdd = item.querySelector(".add");
    const itemRemove = item.querySelector(".remove");
    const itemFrom = item.querySelector(".from");
    reorderIcon(itemAdd, itemRemove, itemFrom, i);
  }
  videoLengths = getVideoLengths(playlistItems);
}
function sortbyLength(el) {
  changeClickedIconColor(el);
  const length = playlistItems.length;
  let threeDigitsLongLengths = [];
  let twoDigitsLongLengths = [];
  for (let duration of videoLengths) {
    if (duration.split(":").length === 3) {
      threeDigitsLongLengths.push(duration);
    } else if (duration.split(":").length === 2) {
      twoDigitsLongLengths.push(duration);
    }
  }
  threeDigitsLongLengths = threeDigitsLongLengths.sort();
  twoDigitsLongLengths = twoDigitsLongLengths.sort();
  const sortedLengths = twoDigitsLongLengths.concat(threeDigitsLongLengths);
  for (let i = 0; i < length; i++) {
    let videoLength = playlistItems[i].querySelector(
      ".style-scope ytd-thumbnail-overlay-time-status-renderer"
    );
    videoLength = videoLength.textContent.trim();
    for (let y = 0; y < sortedLengths.length; y++) {
      if (videoLength === sortedLengths[y]) {
        playlistItems[i].style.order = y;
      }
    }
  }
  let sortedPlaylist = [];
  for (let y = 0; y < length; y++) {
    for (let i = 0; i < length; i++) {
      const item = playlistItems[i];
      if (item.style.order === y.toString()) {
        sortedPlaylist.push(item);
      }
    }
  }
  playlistItems = sortedPlaylist;
  for (let i = 0; i < length; i++) {
    const item = playlistItems[i];
    const itemAdd = item.querySelector(".add");
    const itemRemove = item.querySelector(".remove");
    const itemFrom = item.querySelector(".from");
    reorderIcon(itemAdd, itemRemove, itemFrom, i);
  }
  videoLengths = getVideoLengths(playlistItems);
}
function reorderIcon(itemAdd, itemRemove, itemFrom, index) {
  if (itemFrom !== null) {
    itemFrom.dataset.index = index;
  }
  if (itemAdd !== null) {
    itemAdd.dataset.index = index;
  }
  itemRemove.dataset.index = index;
}

function updateDurationText(hr, mn, sc) {
  const element = document.getElementById("total-playlist-duration");
  element.innerHTML = `${hr} hours, ${mn} minutes, ${sc} seconds!`;
}

function main() {
  if (document.readyState == "complete") {
    playlistItems = Array.from(getVideos());
    playlistItems = playlistItems.filter(filterDeletedVideos);
    addFlexbox();
    originalPlaylist = playlistItems;
    videoLengths = getVideoLengths(playlistItems);
    durations = [...calculateDurations(videoLengths)];
    hourDuration, minuteDuration, secondDuration;
    [hourDuration, minuteDuration, secondDuration] = [...durations];
    initializePlaylist(playlistItems);
    addDurationToPage(hourDuration, minuteDuration, secondDuration);
    Panel = document
      .querySelector(".style-scope ytd-playlist-panel-renderer")
      .querySelector("#top-level-buttons");
    addIconsToPage();
  } else {
    setTimeout(main, 5000);
  }
}
var playlistPanel;
var icons = [];
var playlistItems;
var originalPlaylist;
var videoLengths;
var durations;
var hourDuration;
var minuteDuration;
var secondDuration;
var Panel;

main();
