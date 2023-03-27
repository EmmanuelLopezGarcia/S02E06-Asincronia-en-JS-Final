const endpoint = 'https://cataas.com/cat?json=true';
const catImage = document.getElementById('cat-image');

async function getRandomCatImage() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    if (`https://cataas.com${data.validated}`) {
            
        const imageUrl = `https://cataas.com${data.url}`;
        catImage.src = imageUrl;

    }else{
        alert("ERROR BY GETTING THE CAT IMAGE")
    }
  } catch (error) {
    console.error(error);
  }
}

function llamandoAPI() {
  getRandomCatImage();
}