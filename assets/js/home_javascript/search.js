document.getElementById("searchButton").addEventListener("click", function () {
    const searchTerm = document.getElementById("searchInput").value.trim();
    if (searchTerm) {
      localStorage.setItem("searchTerm", searchTerm);
      window.location.href = "results.html";
    }
  });