var width = window.innerWidth;
var height = window.innerHeight;
var rotated;

const images = ["Intel_Core_i7-13700K_Processor", "Asus_Prime_B660_PLUS_D4_LGA_1700_ATX_Motherboard", "Dell_UltraSharp_U2723QE_4K_UHD_WLED_LCD_Monitor_White", "hhkb_3_hybrid_white_printed_ecomm", "Silicon_Power_DDR5_32GB", "CORSAIR_MP600_PRO_LPX_2TB_Internal_SSD_PCIe_Gen_4", "PNY-RTX-4080-12GB-VERTO-Triple-Fan-top"];
const ids = ["cpu", "motherboard", "monitor", "keyboard", "ram", "ssd", "gpu"];

function update() {
    width = window.innerWidth;
    height = window.innerHeight;
    let new_rotated = width <= 0.9 * height; 
    if(new_rotated != rotated) {
        rotated = new_rotated;
        rotate();
    }
    // requestAnimationFrame(resize);
}

function rotate() {
    let path = `./assets/home/${rotated ? "rotated" : "normal"}/`;
    for(let i = 0; i < images.length; i++) {
        let element = document.getElementById(ids[i]);
        if(!element) {
            let container = document.getElementById("image-container");
            element = document.createElement("img");
            element.id = ids[i];
            container.appendChild(element);
        }
        element.src = path + images[i] + ".png";
    }
}

function resize() {
    console.log(window.getComputedStyle(document.body).getPropertyValue("--grid-dim"));

    // get height space
    const container = document.getElementById("image-container");
    const rect = container.getBoundingClientRect();
    const space = height - rect.top;
    const margin = 80;
    
    // get result
    const height_space = (space - margin) / (rotated ? 19 : 8);
    const width_space = (width - margin) / (rotated ? 8 : 19);
    const res = Math.min(height_space, width_space, 50);

    // set value
    document.documentElement.style.setProperty("--grid-dim", `${res}px`); 

    console.log(window.getComputedStyle(document.body).getPropertyValue("--grid-dim"));
    console.log(`${height} ${width}`);
}

window.addEventListener("load", () => {
    // console.log("load");
    update();
});
window.addEventListener("resize", () => {
    // console.log("resize");
    requestAnimationFrame(update);
});
