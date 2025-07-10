const footerscroll = document.getElementById("footer");
const height = 
document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll",() => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  footerscroll.style.width = `${(scrollTop / height) * 100}%`;
});
