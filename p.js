const wrapper = document.querySelector(".wrapper"),
    searchInput = wrapper.querySelector("input");

searchInput.addEventListener("keyup", e => {
    console.log(e.target.value);
}
);