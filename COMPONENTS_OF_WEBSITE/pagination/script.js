document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const pageNumbers = document.querySelectorAll(".page-num");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentPage = 1;
    const totalPages = pageNumbers.length;

    function updateContent(page) {
        content.textContent = `Page ${page} content goes here`; // Replace with actual page content.
    }

    function setActivePage(page) {
        pageNumbers.forEach(pageNum => {
            pageNum.classList.remove("active");
            if (parseInt(pageNum.dataset.page) === page) {
                pageNum.classList.add("active");
            }
        });
    }

    function handlePageClick(event) {
        const page = parseInt(event.target.dataset.page);
        if (page !== currentPage) {
            currentPage = page;
            updateContent(page);
            setActivePage(page);
        }
    }

    function handlePrevNext(direction) {
        if (direction === "prev" && currentPage > 1) {
            currentPage--;
        } else if (direction === "next" && currentPage < totalPages) {
            currentPage++;
        }
        updateContent(currentPage);
        setActivePage(currentPage);
    }

    // Event listeners
    pageNumbers.forEach(pageNum => pageNum.addEventListener("click", handlePageClick));
    prevButton.addEventListener("click", () => handlePrevNext("prev"));
    nextButton.addEventListener("click", () => handlePrevNext("next"));
});
