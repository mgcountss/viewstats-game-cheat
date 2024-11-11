const cheat = async function () {
    const a = document.querySelectorAll('img');
    let ids = [];
    let elements = [];
    let maxName = "";
    let maxViews = 0;
    let maxIndex = 0;
    a.forEach((img) => {
        if (img.className == 'vs-video-thumbnail-img') {
            ids.push(img["data-loaded-src"].split('/vi/')[1].split('/')[0]);
            elements.push(img);
        };
    });
    for (let i = 0; i < ids.length; i++) {
        await fetch('https://mixerno.space/api/youtube-video-counter/user/' + ids[i])
            .then(response => response.json())
            .then(data => {
                if (data.counts[0].count > maxViews) {
                    maxViews = data.counts[0].count;
                    maxName = data.user[0].count;
                    maxIndex = i;
                };
            });
    };
    elements[maxIndex].parentNode.click();
    setTimeout(() => {
        document.querySelector(".next-round-button_next_round_button__mkT8X").click()
    }, 500);
};
const cheater = setInterval(cheat, 1500);