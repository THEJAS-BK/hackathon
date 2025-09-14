document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Demo functionality
function askQuestion(question) {
  const input = document.getElementById("questionInput");
  input.value = question;
  input.focus();
}

function submitQuestion() {
  const input = document.getElementById("questionInput");
  const question = input.value.trim();

  if (question) {
    // Simulate processing
    input.value = "Processing your question...";
    input.disabled = true;

    setTimeout(() => {
      input.value = "";
      input.disabled = false;
      input.placeholder =
        "Great question! NMI would provide detailed answers in your language.";

      setTimeout(() => {
        input.placeholder = "Ask your question in any language...";
      }, 3000);
    }, 2000);
  }
}

// Enter key support for demo
document
  .getElementById("questionInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      submitQuestion();
    }
  });

// Add scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in");
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll("section > div > div").forEach((el) => {
  observer.observe(el);
});

// Share functionality
function shareProject() {
  document.getElementById("shareModal").classList.remove("hidden");
}

function closeShareModal() {
  document.getElementById("shareModal").classList.add("hidden");
}

function copyLink() {
  const linkInput = document.getElementById("projectLink");
  linkInput.select();
  document.execCommand("copy");

  // Show feedback
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = "Copied!";
  button.classList.add("bg-green-600");

  setTimeout(() => {
    button.textContent = originalText;
    button.classList.remove("bg-green-600");
  }, 2000);
}

function copyShareMessage() {
  const messageTextarea = document.getElementById("shareMessage");
  messageTextarea.select();
  document.execCommand("copy");

  // Show feedback
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = "Copied!";
  button.classList.add("bg-green-600");

  setTimeout(() => {
    button.textContent = originalText;
    button.classList.remove("bg-green-600");
  }, 2000);
}

function shareOnTwitter() {
  const text = encodeURIComponent(
    "🇮🇳 Excited to share India's National Memory Infrastructure (NMI) - our country's AI-powered digital brain that preserves knowledge in every Indian language! This revolutionary project will safeguard our heritage, research, and culture for future generations. #DigitalIndia #NMI #Innovation"
  );
  const url = encodeURIComponent("https://nmi-digital-brain.netlify.app");
  window.open(
    `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    "_blank"
  );
}

function shareOnLinkedIn() {
  const url = encodeURIComponent("https://nmi-digital-brain.netlify.app");
  const title = encodeURIComponent(
    "India's National Memory Infrastructure - Digital Brain"
  );
  const summary = encodeURIComponent(
    "Revolutionary AI-powered system preserving India's knowledge in every language for future generations."
  );
  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${summary}`,
    "_blank"
  );
}

function shareOnWhatsApp() {
  const text = encodeURIComponent(
    "🇮🇳 Check out India's National Memory Infrastructure (NMI) - our country's AI-powered digital brain that preserves knowledge in every Indian language! https://nmi-digital-brain.netlify.app #DigitalIndia #NMI"
  );
  window.open(`https://wa.me/?text=${text}`, "_blank");
}

function shareViaEmail() {
  const subject = encodeURIComponent(
    "India's National Memory Infrastructure - Revolutionary Digital Brain"
  );
  const body = encodeURIComponent(`Hi,

I wanted to share this exciting project with you - India's National Memory Infrastructure (NMI).

It's an AI-powered digital brain that preserves our country's vast knowledge, research, legal records, and cultural heritage in every Indian language. Every citizen can access this information effortlessly, safeguarding our rights, history, and culture for future generations.

Check it out: https://nmi-digital-brain.netlify.app

This could transform how we preserve and access knowledge in India!

Best regards`);
  window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
}

// Close modal when clicking outside
document.getElementById("shareModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeShareModal();
  }
});
(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'97ee7ee451123a2c',t:'MTc1NzgzODM0Ny4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
