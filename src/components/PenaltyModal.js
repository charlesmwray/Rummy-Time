import React from "react";

const getSrc = () => {
  const items = [
    "https://lh3.googleusercontent.com/-J6aznrLA_nI/YLhSbJRKuVI/AAAAAAAAOlU/kzecaicrAo8Mrb-GlAzckBv436rsUkNVwCJEEGAsYHg/s0/2021-06-02.jpg?authuser=0",
    "https://lh3.googleusercontent.com/-tCrM1bE2PSA/YLhSgDNRiOI/AAAAAAAAOlc/5KWMBaAz0D09XBYvuSZGsSsLZ6HNyFqRwCJEEGAsYHg/s0/2021-06-02.jpg?authuser=0",
    "https://lh3.googleusercontent.com/-dvcHBqVmSAk/YLhSRLwc6KI/AAAAAAAAOlE/elt-gW8hUN4pj1sGHJCYYA6YGxpkneuVgCJEEGAsYHg/s512/2021-06-02.jpg",
    "https://lh3.googleusercontent.com/-nmF0msjqvck/YLhSL2_pYjI/AAAAAAAAOk4/_FNrPPbr0y4pM_hRJkH5CchVC_hYOFFKgCJEEGAsYHg/s512/2021-06-02.jpg",
    "https://lh3.googleusercontent.com/-rpOZzcbqIwU/YLhSEN9KTdI/AAAAAAAAOkw/3QN6vDFeTYgcQcj0UAUgu5YwZ7Hr8D8tACJEEGAsYHg/s512/2021-06-02.jpg",
    "https://lh3.googleusercontent.com/-xXFlqUTNb70/YLhR_LDFEdI/AAAAAAAAOkk/VOg_gAgsTo06yXEA3vGPHgCxAsE4zz2YgCJEEGAsYHg/s0/2021-06-02.jpg?authuser=0",
    "https://lh3.googleusercontent.com/-pK-qeTTJHkY/YLhR3UcaXhI/AAAAAAAAOkY/7WcVGC9ZjpMlPl8l09vS3papyoZYN8M6wCJEEGAsYHg/s0/2021-06-02.jpg?authuser=0",
    "https://lh3.googleusercontent.com/-kCCqzQtx-Aw/YLhRsvPPbII/AAAAAAAAOkQ/PFGd0_-qlsICrogWzBgQ6p1KnW92Sf6bQCJEEGAsYHg/s0/2021-06-02.jpg?authuser=0",
    "https://lh3.googleusercontent.com/-9fj9xM7U3fI/YLhRnU4fEhI/AAAAAAAAOkI/NfQubvsKW0A2aAKeCtaxU1jLeR2AYFr0QCJEEGAsYHg/s0/2021-06-02.jpg?authuser=0",
    "https://lh3.googleusercontent.com/-tuot7hi_WpM/YLhRiNaJ6PI/AAAAAAAAOkA/lMBctSfrRXERZg8XAwR4jIQVh5jnEhjOACJEEGAsYHg/s0/2021-06-02.jpg?authuser=0",
    "https://lh3.googleusercontent.com/-rvcCfcdUBdE/YLhRdse5doI/AAAAAAAAOj4/tp4xnYViGgQhI9JLdnPFTUKZYIJ9ZUbXwCJEEGAsYHg/s0/2021-06-02.jpg?authuser=0",
    "https://lh3.googleusercontent.com/-E1rskEWaaTI/YL7irg3ZDfI/AAAAAAAAOoY/6H5Kn0v9BWk0F42wwm0LZgmc55pra6oMgCJEEGAsYHg/s0/2021-06-07.jpg?authuser=0"
  ];
  return items[Math.floor(Math.random() * items.length)];
};

const PenaltyModal = () => {
  return (
    <>
      <div className="penalty-container">
        <img alt="wrong" src={getSrc()} />
      </div>
      <div className="penalty-container-label">WRONG</div>
    </>
  );
};

export default PenaltyModal;
