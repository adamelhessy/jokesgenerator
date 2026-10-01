const meme_input = document.querySelector(".meme_input");
const meme_btn = document.querySelector(".meme_btn");
const meme_cont = document.querySelector(".meme_cont");
const meme_display = ({
  name,
  url,
}) => `<p class="text-warning fs-1 fw-bold text-center">${name}</p>
          <img src="${url}" alt="Failed to load img" style="width:80%">`;

meme_btn.addEventListener("click", () => {
  fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then((d) => {
      const Memes = d.data.memes;
      const html = Memes.filter((meme, index) => index == meme_input.value)
        .map(meme_display)
        .join("");
      meme_cont.innerHTML =
        html ||
        `<p class="text-danger fs-3 fw-bold">Enter a number from 0 to 99.</p>`;
      meme_input.value = "";
    })
    .catch((err) => console.log(err.message));
});
