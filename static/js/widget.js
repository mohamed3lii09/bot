function toggleWidget() {
  const widget = document.getElementById("chat-widget");
  widget.classList.toggle("hidden");
}

async function sendMessage() {
  const input = document.getElementById("chat-input");
  const messages = document.getElementById("chat-messages");
  const userMsg = input.value.trim();
  if (!userMsg) return;
  messages.innerHTML += `<div><b>🧍‍♂️ أنت:</b> ${userMsg}</div>`;
  input.value = "";

  const res = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userMsg })
  });
  const data = await res.json();
  const botMsg = data.reply || "حصل خطأ، حاول تاني.";
  messages.innerHTML += `<div><b>🤖 الطبيب:</b> ${botMsg}</div>`;
  messages.scrollTop = messages.scrollHeight;
}
