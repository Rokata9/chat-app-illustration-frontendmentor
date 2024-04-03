const scroller = document.querySelector(".item-scroller");
const chatContainer = document.querySelector(".chat-container");
const phoneChat = document.querySelector(".phone-chat");
const btn = document.querySelector(".send-btn");

chatContainer.style.minHeight = `${scroller.clientHeight}px`;
chatContainer.style.height = `${scroller.clientHeight}px`;

// let counter = 0;

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
  phoneChat.style.transform = `translateY(${el.clientHeight}px)`;
  phoneChat.offsetHeight; // Trigger a reflow, flushing the CSS changes
  phoneChat.classList.remove("notransition"); // Re-enable transitions
  //phoneChat.appendChild(el);

  //phoneChat.offsetHeight;

  const containerHeight = chatContainer.style.height
    ? Number(chatContainer.style.height.split("px")[0])
    : 0;
  //el.offsetHeight;
  chatContainer.style.height = `${containerHeight + el.clientHeight}px`;

  //chatContainer.offsetHeight;

  // using margin on the newly added child causes scroll to immediately move by that margin, THEN do the animation
  // thus using padding on the chat message wrapper
  scroller.scrollTop = scroller.scrollHeight - scroller.clientHeight;

  phoneChat.style.transform = "translateY(0)";

  // inner.addEventListener('transitionend', () => {
  // });
});
