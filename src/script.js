const scroller = document.querySelector(".item-scroller");
const chatContainer = document.querySelector(".chat-container");
const phoneChat = document.querySelector(".phone-chat");
const btn = document.querySelector(".send-btn");

const updateChatHeight = () => {
  chatContainer.style.minHeight = `${scroller.clientHeight}px`;
  chatContainer.style.height = `${phoneChat.clientHeight}px`;
};

const updateScrollPosition = () => {
  scroller.scrollTop = scroller.scrollHeight - scroller.clientHeight;
};

const debounce = (func, time = 100) => {
  var timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, time, event);
  };
}

// set some initial height although not 100% precise when fonts are not cached
updateChatHeight();
updateScrollPosition();

/* needed in case fonts are loaded later, usually they should be preloaded, but in this demo project
   when run with live reload, fonts are not cached and loaded with delay */
window.addEventListener("load", () => {
  updateChatHeight();
  updateScrollPosition();
});

window.addEventListener("resize", debounce(updateChatHeight, 150));

btn.addEventListener("click", () => {
  const el = document.createElement("div");
  el.className = "message-wrapper end";
  //el.classList.add("chat-item");
  el.innerHTML = `<p class="chat-message bg-light">Can you make it?</p>`;
  //   el.style.transform = "translateY(18px)";
  //   el.style.position = 'absolute';
  //   el.style.top = '100%';
  //   chatContainer.appendChild(el);

  phoneChat.classList.add("notransition"); // Disable transitions
  phoneChat.appendChild(el);
  // must include any additional margin in the value
  phoneChat.style.transform = `translateY(${el.clientHeight}px)`;
  phoneChat.offsetHeight; // Trigger a reflow, flushing the CSS changes
  phoneChat.classList.remove("notransition"); // Re-enable transitions
  //phoneChat.appendChild(el);

  //phoneChat.offsetHeight;

  const containerHeight = chatContainer.style.height
    ? Number(chatContainer.style.height.split("px")[0])
    : 0;
  //el.offsetHeight;
  // must include any additional margins in the calculation
  chatContainer.style.height = `${containerHeight + el.clientHeight}px`;

  //chatContainer.offsetHeight;

  scroller.scrollTop = scroller.scrollHeight - scroller.clientHeight;

  phoneChat.style.transform = "translateY(0)";

  // inner.addEventListener('transitionend', () => {
  // });
});
