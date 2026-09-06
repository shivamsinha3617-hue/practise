let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
let img = document.querySelector("img");

btn.addEventListener("click", async () => {
    let output = await getImage();
    img.setAttribute("src", output);
    console.log(output);
})

async function getImage() {
    try{
        let image = await axios.get(url);
        let ans = image.data.message;
        return ans;
    } catch(err){
        console.log("error :", err);
        return "some error occured";
    }
}