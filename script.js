const sendButton = document.getElementById("send-button");
const messageInput = document.getElementById("message-input");
const chatBox = document.getElementById("chat-box");

const cevaplar = [
    "yarma aq",
    "hönkürtme aq",
    "ossurtma aq",
    "patlatma aq",
    "öldürme aq",
    "gümletme aq",
    "zortlatma aq",
    "xd",
    "XD",
    ":D",
    "şaka yapma aq",
    "zinkirtme aq",
    "işicemmm",
    "fjgvnroslgvbmimkmsljmveiop"
  ];
  
let oncekiCevap = "";

function rastgeleCevap() {
  let cevap;
  do {
    const index = Math.floor(Math.random() * cevaplar.length);
    cevap = cevaplar[index];
  } while (cevap === oncekiCevap);
  
  oncekiCevap = cevap;
  return cevap;
}


sendButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message === "") return;
  

  // Kullanıcı mesajı ekle
  addMessage(message, "user");

  // Bot cevabı (şimdilik sabit, sonradan dinamik yaparsın)
  setTimeout(() => {
    let cevap;

    if (message === "sa" || message === "sea") {
      cevap = "as kardeşim hoş geldin 🌟";
    } else {
      cevap = rastgeleCevap();
    }

    addMessage(cevap, "bot");
  }, 500);

  messageInput.value = "";
});

messageInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      sendButton.click();
    }
  });
  

function addMessage(text, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender === "user" ? "user-message" : "bot-message");
  msgDiv.innerText = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
